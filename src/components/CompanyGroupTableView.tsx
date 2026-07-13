import { useState } from 'react';
import type { CompanyGroup } from '../utils/careerUtils';
import { RoleBadges } from './RoleBadges';
import { ProjectCard } from './ProjectCard';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { EmploymentBadge } from './EmploymentBadge';

interface CompanyGroupTableViewProps {
  groups: CompanyGroup[];
}

export const CompanyGroupTableView = ({ groups }: CompanyGroupTableViewProps) => {
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);

  if (groups.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500 bg-white rounded-lg border border-gray-200 border-dashed">
        No matching records found.
      </div>
    );
  }

  const toggleGroup = (companyKey: string) => {
    setExpandedGroup(expandedGroup === companyKey ? null : companyKey);
  };

  return (
    <div className="space-y-3">
      <div className="hidden md:grid md:grid-cols-[minmax(140px,1.1fr)_minmax(210px,1.25fr)_minmax(90px,0.65fr)_minmax(220px,1.5fr)_90px_130px] items-center gap-4 rounded-lg bg-slate-100 px-6 py-3 text-xs font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
        <span>회사명</span>
        <span>기간</span>
        <span>직위</span>
        <span>담당업무</span>
        <span>신분</span>
        <span className="text-center">Project</span>
      </div>
      {groups.map((group) => {
        const groupKey = group.key;
        const isExpanded = expandedGroup === groupKey;

        // 회사내 프로젝트들을 날짜순으로 정렬 (최신 먼저)
        const sortedProjects = [...group.projects].sort((a, b) => {
          const aYear = parseInt(a.duration.match(/\d{4}/)?.[0] || '0');
          const bYear = parseInt(b.duration.match(/\d{4}/)?.[0] || '0');
          if (aYear !== bYear) return bYear - aYear;
          // 같은 연도면 월 기준으로 정렬
          const aMonth = parseInt(a.duration.match(/\.(\d{2})/)?.[1] || '0');
          const bMonth = parseInt(b.duration.match(/\.(\d{2})/)?.[1] || '0');
          return bMonth - aMonth;
        });

        return (
          <div key={groupKey} className="border border-gray-200 rounded-lg bg-white shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            {/* Company Row */}
            <button
              onClick={() => toggleGroup(groupKey)}
              aria-expanded={isExpanded}
              className="grid w-full grid-cols-1 gap-3 px-6 py-4 text-left transition-colors hover:bg-gray-50 md:grid-cols-[minmax(140px,1.1fr)_minmax(210px,1.25fr)_minmax(90px,0.65fr)_minmax(220px,1.5fr)_90px_130px] md:items-center md:gap-4 dark:hover:bg-slate-800/60"
            >
              <div className="min-w-0">
                <span className="mb-1 block text-[10px] font-bold text-gray-400 md:hidden">회사명</span>
                <h3 className="font-bold text-gray-900 text-base">{group.company}</h3>
              </div>

              <div className="min-w-0">
                <span className="mb-1 block text-[10px] font-bold text-gray-400 md:hidden">기간</span>
                <p className="text-sm font-medium text-gray-700 dark:text-slate-300">
                  {group.duration} <span className="whitespace-nowrap text-gray-500">({group.tenureInMonths}개월)</span>
                </p>
              </div>

              <div className="min-w-0">
                <span className="mb-1 block text-[10px] font-bold text-gray-400 md:hidden">직위</span>
                <p className="text-sm text-gray-700 dark:text-slate-300">{group.position || '-'}</p>
              </div>

              <div className="min-w-0">
                <span className="mb-1 block text-[10px] font-bold text-gray-400 md:hidden">담당업무</span>
                <RoleBadges roles={group.roles} compact />
              </div>

              <div className="min-w-0">
                <span className="mb-1 block text-[10px] font-bold text-gray-400 md:hidden">신분</span>
                <EmploymentBadge type={group.employmentType} compact />
              </div>

              <div className="flex items-center justify-between gap-2 md:justify-center">
                <span className="text-[10px] font-bold text-gray-400 md:hidden">Project</span>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {group.projects.length}건
                </span>
                {isExpanded ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </div>
            </button>

            {/* Expanded Projects Grid */}
            {isExpanded && (
              <div className="border-t border-gray-200 bg-gray-50 p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {sortedProjects.map((project) => (
                    <ProjectCard key={project.id} career={project} />
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
