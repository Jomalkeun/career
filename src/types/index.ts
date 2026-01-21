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
  techStack: string[];

  // legacy fields that can be removed or mapped
  period?: string;
  category?: string;
  description?: string;
}
