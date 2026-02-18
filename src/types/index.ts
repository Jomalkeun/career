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


export interface Career {
  id: string;
  projectName: string;
  projectType: string;
  icon?: string;
  duration: string;
  durationInMonths: string;
  client: string;
  company: string;
  role: string;
  roleType: 'lead' | 'member';
  osEnv: string;
  techStack: string[] | TechStackCategorized;
  language?: string[] | LanguageCategorized;
  tool?: string[] | ToolCategorized;
  period?: string;
  category?: string;
  phase?: string;
  description?: string[] | string;
  architecture?: React.ReactElement; // 시스템 아키텍처 설명
}
