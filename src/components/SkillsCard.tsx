import { useState } from 'react';
import { SkillsDetailModal } from './SkillsDetailModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
  faWordpress
} from '@fortawesome/free-brands-svg-icons';
import { faCode, faComputer } from '@fortawesome/free-solid-svg-icons';

interface SkillsCardProps {
  selectedTech: string | null;
  onSelectTech: (tech: string | null) => void;
}

export function SkillsCard({ selectedTech, onSelectTech }: SkillsCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const topSkills = [
    { name: 'HTML5', level: 'Expert', icon: faHtml5, color: '#E34F26' },
    { name: 'CSS3', level: 'Expert', icon: faCss3Alt, color: '#1572B6' },
    { name: 'JavaScript', level: 'Advanced', icon: faJs, color: '#F7DF1E' },
    { name: 'Vue.js', level: 'Expert', icon: faVuejs, color: '#4FC08D' },
    { name: 'Sass/SCSS', level: 'Expert', icon: faSass, color: '#CC6699' },
    { name: 'Angular', level: 'Advanced', icon: faAngular, color: '#E34F26' },
    { name: 'bootstrap', level: 'Expert', icon: faBootstrap, color: '#CC6699' },
    { name: 'Git', level: 'Expert', icon: faGitAlt, color: '#E34F26' },
    { name: 'Github', level: 'Expert', icon: faGithub, color: '#E34F26' },
    { name: 'Gulp', level: 'Expert', icon: faGulp, color: '#E34F26' },
    { name: 'Jenkins', level: 'Expert', icon: faJenkins, color: '#E34F26' },
    { name: 'Node.js', level: 'Expert', icon: faNode, color: '#F7DF1E' },
    { name: 'Npm', level: 'Expert', icon: faNpm, color: '#E34F26' },
    { name: 'React.js', level: 'Expert', icon: faReact, color: '#61DAFB' },
    { name: 'Next.js', level: 'Expert', icon: faJs, color: '#61DAFB' },
    { name: 'Tailwind', level: 'Expert', icon: faCode, color: '#61DAFB' },
    { name: 'Storybook', level: 'Expert', icon: faSass, color: '#CC6699' },
    { name: 'Trello', level: 'Expert', icon: faTrello, color: '#CC6699' },
    { name: 'Wordpress', level: 'Expert', icon: faWordpress, color: '#CC6699' },
    { name: 'Svn', level: 'Expert', icon: faCode, color: '#CC6699' },
    { name: 'Panda.css', level: 'Expert', icon: faComputer, color: '#CC6699' },
  ];

  const handleTechClick = (techName: string) => {
    if (selectedTech === techName) {
      onSelectTech(null);
    } else {
      onSelectTech(techName);
    }
  };

  return (
    <>
      <section className="mb-0 transition-all duration-300">
        <div className="mb-3 flex items-baseline justify-between">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Core Stacks</h2>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-500 dark:text-slate-400"
            title={isOpen ? 'Close' : 'View All'}
          >
            <span className="material-symbols-outlined text-xl">
              {isOpen ? 'close' : 'grid_view'}
            </span>
          </button>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {topSkills.map((skill) => (
            <button
              key={skill.name}
              onClick={() => handleTechClick(skill.name)}
              className={`bg-surface-light dark:bg-surface-dark p-4 rounded-xl shadow-sm border flex flex-col items-center justify-center gap-2 aspect-square group transition-all cursor-pointer text-center w-full
                ${selectedTech === skill.name
                  ? 'border-primary bg-primary/5 dark:bg-primary/10 ring-2 ring-primary/20 scale-[1.02]'
                  : 'border-slate-100 dark:border-slate-700 hover:border-primary/30 hover:scale-[1.02] shadow-sm hover:shadow-md'}`}
            >
              <FontAwesomeIcon icon={skill.icon} className="text-3xl mb-1" style={{ color: skill.color }} />
              <div className="text-center">
                <div className="font-bold text-slate-900 dark:text-white text-sm">{skill.name}</div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400">{skill.level}</div>
              </div>
            </button>
          ))}
        </div>
      </section>

      <SkillsDetailModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}

