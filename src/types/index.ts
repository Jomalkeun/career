export interface TechStackCategorized {
  phase?: string;
  language?: string[];
  scripts?: string[];
  framework?: string[];
  designTool?: string[];
  stylesheet?: string[];
  library?: string[];
  versionControl?: string[];
  responsiveWeb?: boolean; // 반응형 웹 여부
  accessibility?: boolean; // 웹접근성 준수 여부
  multilingual?: boolean; // 다국어 지원 여부
  cms?: string[];
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
  period?: string;
  category?: string;
  description?: string;
}
