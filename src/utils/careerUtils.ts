import type { Career, EmploymentType, LanguageCategorized, ToolCategorized, RoleCode } from '../types';

/**
 * Normalizes a language or tool field into a flat string array.
 * Handles both string[] and categorized object formats.
 */
export const getFlatTechList = (
  items: string[] | LanguageCategorized | ToolCategorized | undefined
): string[] => {
  if (!items) return [];
  if (Array.isArray(items)) return items;

  // It's an object, extract all array values
  return Object.values(items).flat().filter((item): item is string => typeof item === 'string');
};

/**
 * Groups career data by company.
 * Returns an array of groups with company info and related projects.
 */
export interface CompanyGroup {
  key: string;
  company: string;
  employmentType: EmploymentType;
  client?: string;
  duration: string;
  tenureInMonths: number;
  tenure: string;
  position?: string;
  roles: RoleCode[];
  projects: Career[];
  description?: string;
  phase?: string;
}

interface CareerMonth {
  year: number;
  month: number;
  index: number;
}

const parseCareerMonth = (value: string): CareerMonth => {
  const [yearText, monthText = '1'] = value.split('.');
  const year = Number(yearText);
  const month = Number(monthText);

  return { year, month, index: year * 12 + month - 1 };
};

const formatCareerMonth = ({ year, month }: CareerMonth) =>
  `${year}.${String(month).padStart(2, '0')}`;

const getProjectPeriod = (duration: string) => {
  const matches = duration.match(/\d{4}(?:\.\d{1,2})?/g);

  if (!matches?.length) {
    throw new Error(`경력 기간 형식을 확인할 수 없습니다: ${duration}`);
  }

  return {
    start: parseCareerMonth(matches[0]),
    end: parseCareerMonth(matches.at(-1) ?? matches[0]),
  };
};

const formatTenure = (months: number) => {
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years > 0 && remainingMonths > 0) return `${years}년 ${remainingMonths}개월`;
  if (years > 0) return `${years}년`;
  return `${remainingMonths}개월`;
};

const calculateEmploymentPeriod = (projects: Career[]) => {
  const periods = projects.map(project => getProjectPeriod(project.duration));
  const start = periods.reduce((earliest, period) =>
    period.start.index < earliest.index ? period.start : earliest, periods[0].start);
  const end = periods.reduce((latest, period) =>
    period.end.index > latest.index ? period.end : latest, periods[0].end);
  const tenureInMonths = end.index - start.index + 1;
  const startText = formatCareerMonth(start);
  const endText = formatCareerMonth(end);

  return {
    duration: startText === endText ? startText : `${startText} ~ ${endText}`,
    tenureInMonths,
    tenure: formatTenure(tenureInMonths),
    endIndex: end.index,
  };
};

const getEmploymentGroupKey = (career: Career) => `${career.company}::${career.employmentType}`;

export const groupCareerByCompany = (data: Career[], allData: Career[] = data): CompanyGroup[] => {
  const groupMap = new Map<string, CompanyGroup>();

  data.forEach(item => {
    const key = getEmploymentGroupKey(item);
    
    if (!groupMap.has(key)) {
      groupMap.set(key, {
        key,
        company: item.company,
        employmentType: item.employmentType,
        client: undefined, // 더 이상 표시하지 않음
        duration: '',
        tenureInMonths: 0,
        tenure: '',
        position: '', // 회사 레벨에서는 표시하지 않음
        roles: item.roles,
        projects: [],
        phase: '',
      });
    }

    const group = groupMap.get(key)!;
    group.projects.push(item);
    
    // Merge roles (keep unique)
    group.roles = Array.from(new Set([...group.roles, ...item.roles])) as RoleCode[];
  });

  const groupsWithPeriods = Array.from(groupMap.values())
    .map(group => {
      const employmentProjects = allData.filter(item => getEmploymentGroupKey(item) === group.key);
      const period = calculateEmploymentPeriod(employmentProjects);
      const position = [...employmentProjects]
        .sort((a, b) => getProjectPeriod(b.duration).end.index - getProjectPeriod(a.duration).end.index)
        .find(project => project.position)?.position;

      return {
        group: {
          ...group,
          position,
          duration: period.duration,
          tenureInMonths: period.tenureInMonths,
          tenure: period.tenure,
        },
        endIndex: period.endIndex,
      };
    })
    .sort((a, b) => b.endIndex - a.endIndex);

  return groupsWithPeriods.map(({ group }) => group);
};

/**
 * Extracts all unique technologies from career data for filtering.
 * Returns an array of technology names sorted by frequency (pinned items first).
 */
export const getAvailableTechs = (data: Career[]): string[] => {
  const pinned = ["Vue.js", "React.js"];
  const counts: Record<string, number> = {};

  data.forEach(item => {
    // Collect from both language and tool fields
    const allTechs = [
      ...getFlatTechList(item.language),
      ...getFlatTechList(item.tool)
    ];

    allTechs.forEach(tech => {
      counts[tech] = (counts[tech] || 0) + 1;
    });
  });

  // Sort others by frequency then alphabetically
  const others = Object.entries(counts)
    .filter(([tech]) => !pinned.includes(tech))
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([tech]) => tech);

  // Return pinned + top 8 others (or all if needed, here limiting to mimic previous behavior)
  // The previous logic sliced to 8, we can keep that or return all.
  // Returning top 15 to be safe
  return [...pinned, ...others].slice(0, 15);
};
