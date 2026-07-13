export interface TechStackCategorized {
  framework?: string[];
  library?: string[];
  responsiveWeb?: boolean; // 반응형 웹 여부
  accessibility?: boolean; // 웹접근성 준수 여부
  multilingual?: boolean; // 다국어 지원 여부
  other?: string[];
}

export interface ToolCategorized {
  framework?: string[];
  designTool?: string[];
  library?: string[];
  versionControl?: string[];
  cms?: string[];
  other?: string[];
}


export interface LanguageCategorized {
  scripts?: string[];
  framework?: string[];
  stylesheet?: string[];
  other?: string[];
}

export type RoleCode = 'PM' | 'PL' | 'A' | 'P' | 'D' | 'O' | 'E' | 'W' | 'SE';

export type EmploymentType = '정규직' | '프리랜서' | '계약직' | '인턴';

export interface Career {
  id: string;
  projectName: string;
  projectType: string;
  icon?: string;
  duration: string;
  durationInMonths: string;
  client: string;
  company: string;
  roles: RoleCode[];
  position?: string;
  osEnv: string;
  techStack: string[] | TechStackCategorized;
  language?: string[] | LanguageCategorized;
  tool?: string[] | ToolCategorized;
  period?: string;
  category?: string;
  phase?: string;
  demoUrl?: string;
  githubUrl?: string;
  description?: string[] | string;
  architecture?: React.ReactElement; // 시스템 아키텍처 설명
  employmentType: EmploymentType; // 고용 형태
}
