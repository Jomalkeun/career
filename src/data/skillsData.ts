import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
    faHtml5,
    faCss3Alt,
    faJs,
    faVuejs,
    faSass,
    faAngular,
    faBootstrap,
    faGitAlt,
    faGithub,
    faGulp,
    faJenkins,
    faNode,
    faNpm,
    faReact,
    faTrello,
    faWordpress,
    faFigma
} from '@fortawesome/free-brands-svg-icons';
import { faCode, faComputer, faUniversalAccess, faMobileScreen } from '@fortawesome/free-solid-svg-icons';

export type SkillLevel = 1 | 2 | 3 | 4 | 5;

export interface Skill {
    name: string;
    level: SkillLevel;
    category: string;
    icon?: IconDefinition;
    iconText?: string; // For custom text icons like "Ps", "Ai", "jQ"
    color: string;
    showInCard: boolean; // Whether to show in SkillsCard
}

// Helper function to convert level number to text
export const getLevelText = (level: SkillLevel): string => {
    const levelMap: Record<SkillLevel, string> = {
        1: 'Beginner',
        2: 'Intermediate',
        3: 'Proficient',
        4: 'Advanced',
        5: 'Expert'
    };
    return levelMap[level];
};

// Helper function to get proficiency text for modal
export const getProficiencyText = (level: SkillLevel): string => {
    const proficiencyMap: Record<SkillLevel, string> = {
        1: 'Beginner Proficiency',
        2: 'Intermediate Proficiency',
        3: 'Proficient',
        4: 'Advanced Proficiency',
        5: 'Expert Proficiency'
    };
    return proficiencyMap[level];
};

export const skillsData: Skill[] = [
    // Language & Script
    {
        name: 'HTML5',
        level: 5,
        category: 'Language & Script',
        icon: faHtml5,
        color: '#E34F26',
        showInCard: false
    },
    {
        name: 'CSS3',
        level: 5,
        category: 'Language & Script',
        icon: faCss3Alt,
        color: '#1572B6',
        showInCard: false
    },
    {
        name: 'JavaScript',
        level: 4,
        category: 'Language & Script',
        icon: faJs,
        color: '#F7DF1E',
        showInCard: false
    },
    {
        name: 'ES6+ JavaScript',
        level: 4,
        category: 'Language & Script',
        icon: faJs,
        color: '#F7DF1E',
        showInCard: false
    },
    {
        name: 'jQuery',
        level: 5,
        category: 'Language & Script',
        iconText: 'jQ',
        color: '#2563EB',
        showInCard: false
    },

    // Frameworks
    {
        name: 'Vue.js',
        level: 5,
        category: 'Framework',
        icon: faVuejs,
        color: '#4FC08D',
        showInCard: true
    },
    {
        name: 'React.js',
        level: 3,
        category: 'Framework',
        icon: faReact,
        color: '#61DAFB',
        showInCard: true
    },
    {
        name: 'Angular',
        level: 4,
        category: 'Framework',
        icon: faAngular,
        color: '#DD0031',
        showInCard: true
    },
    {
        name: 'Next.js',
        level: 3,
        category: 'Framework',
        icon: faJs,
        color: '#000000',
        showInCard: false
    },

    // CSS Preprocessors & Frameworks
    {
        name: 'Sass/SCSS',
        level: 5,
        category: 'Stylesheet',
        icon: faSass,
        color: '#CC6699',
        showInCard: true
    },
    {
        name: 'Bootstrap',
        level: 5,
        category: 'Stylesheet',
        icon: faBootstrap,
        color: '#7952B3',
        showInCard: true
    },
    {
        name: 'Tailwind',
        level: 4,
        category: 'Stylesheet',
        icon: faCode,
        color: '#06B6D4',
        showInCard: true
    },
    {
        name: 'Panda.css',
        level: 4,
        category: 'Stylesheet',
        icon: faComputer,
        color: '#FCD34D',
        showInCard: true
    },

    // Publishing
    {
        name: 'Web Accessibility',
        level: 5,
        category: 'Publishing',
        icon: faUniversalAccess,
        color: 'inherit',
        showInCard: true
    },
    {
        name: 'Responsive Web',
        level: 5,
        category: 'Publishing',
        icon: faMobileScreen,
        color: 'inherit',
        showInCard: false
    },

    // Tools & Version Control
    {
        name: 'Git',
        level: 5,
        category: 'Tools & Version Control',
        icon: faGitAlt,
        color: '#F05032',
        showInCard: true
    },
    {
        name: 'Github',
        level: 5,
        category: 'Tools & Version Control',
        icon: faGithub,
        color: '#181717',
        showInCard: false
    },
    {
        name: 'SVN',
        level: 4,
        category: 'Tools & Version Control',
        icon: faCode,
        color: '#809CC9',
        showInCard: false
    },
    {
        name: 'Jenkins',
        level: 4,
        category: 'Tools & Version Control',
        icon: faJenkins,
        color: '#D24939',
        showInCard: true
    },

    // Build Tools & Package Managers
    {
        name: 'Gulp',
        level: 4,
        category: 'Build Tools',
        icon: faGulp,
        color: '#CF4647',
        showInCard: false
    },
    {
        name: 'Node.js',
        level: 4,
        category: 'Build Tools',
        icon: faNode,
        color: '#339933',
        showInCard: false
    },
    {
        name: 'Npm',
        level: 5,
        category: 'Build Tools',
        icon: faNpm,
        color: '#CB3837',
        showInCard: false
    },
    {
        name: 'Storybook',
        level: 4,
        category: 'Build Tools',
        icon: faSass,
        color: '#FF4785',
        showInCard: true
    },

    // Design Tools
    {
        name: 'Figma',
        level: 3,
        category: 'Design & Tools',
        icon: faFigma,
        color: '#F24E1E',
        showInCard: true
    },
    {
        name: 'Photoshop',
        level: 4,
        category: 'Design & Tools',
        iconText: 'Ps',
        color: '#31A8FF',
        showInCard: false
    },
    // {
    //     name: 'Illustrator',
    //     level: 3,
    //     category: 'Design & Tools',
    //     iconText: 'Ai',
    //     color: '#FF9A00',
    //     showInCard: false
    // },

    // Other Tools
    {
        name: 'Trello',
        level: 4,
        category: 'Project Management',
        icon: faTrello,
        color: '#0052CC',
        showInCard: false
    },
    {
        name: 'WordPress',
        level: 4,
        category: 'CMS',
        icon: faWordpress,
        color: '#21759B',
        showInCard: false
    },
];

// Helper function to get skills by category
export const getSkillsByCategory = (category: string): Skill[] => {
    return skillsData.filter(skill => skill.category === category);
};

// Helper function to get all unique categories
export const getCategories = (): string[] => {
    return Array.from(new Set(skillsData.map(skill => skill.category)));
};

// Helper function to get skills for SkillsCard (only showInCard: true)
export const getCardSkills = (): Skill[] => {
    return skillsData.filter(skill => skill.showInCard);
};
