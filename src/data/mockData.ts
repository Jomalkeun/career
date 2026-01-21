import type { Career } from "../types";

export const careerData: Career[] = [
  {
    id: "1",
    projectName: "E-Commerce Dashboard Redesign",
    projectType: "Admin Panel",
    icon: "dashboard",
    duration: "2023.10-24.02",
    durationInMonths: "5",
    client: "FinTech Corp",
    company: "Agency A",
    role: "Frontend Lead",
    roleType: "lead",
    osEnv: "Web / Windows",
    techStack: ["React", "TS"],
  },
  {
    id: "2",
    projectName: "Healthcare App Integration",
    projectType: "Patient Intake",
    icon: "monitor_heart",
    duration: "2023.01-09",
    durationInMonths: "9",
    client: "HealthPlus",
    company: "Agency A",
    role: "Senior UI Dev",
    roleType: "member",
    osEnv: "Hybrid / iOS",
    techStack: ["Vue.js", "Ionic"],
  },
  // Add more mock data if needed to fill the table
];
