import { useState } from 'react';
import { SkillsDetailModal } from './SkillsDetailModal';

interface SkillsCardProps {
  selectedTech: string | null;
  onSelectTech: (tech: string | null) => void;
}

export function SkillsCard({ selectedTech, onSelectTech }: SkillsCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const topSkills = [
    { name: 'HTML5', level: 'Expert', icon: 'fa-html5', color: '#E34F26', prefix: 'fa-brands' },
    { name: 'CSS3', level: 'Expert', icon: 'fa-css3-alt', color: '#1572B6', prefix: 'fa-brands' },
    { name: 'JavaScript', level: 'Advanced', icon: 'fa-js', color: '#F7DF1E', prefix: 'fa-brands' },
    { name: 'Vue.js', level: 'Expert', icon: 'fa-vuejs', color: '#4FC08D', prefix: 'fa-brands' },
    { name: 'Sass/SCSS', level: 'Expert', icon: 'fa-sass', color: '#CC6699', prefix: 'fa-brands' },
    { name: 'Angular', level: 'Advanced', icon: 'fa-angular', color: '#E34F26', prefix: 'fa-brands' },
    { name: 'bootstrap', level: 'Expert', icon: 'fa-bootstrap', color: '#CC6699', prefix: 'fa-brands' },
    { name: 'Git', level: 'Expert', icon: 'fa-git-alt', color: '#E34F26', prefix: 'fa-brands' },
    { name: 'Github', level: 'Expert', icon: 'fa-github', color: '#E34F26', prefix: 'fa-brands' },
    { name: 'Gulp', level: 'Expert', icon: 'fa-gulp', color: '#E34F26', prefix: 'fa-brands' },
    { name: 'Jenkins', level: 'Expert', icon: 'fa-jenkins', color: '#E34F26', prefix: 'fa-brands' },
    { name: 'Node.js', level: 'Expert', icon: 'fa-node', color: '#F7DF1E', prefix: 'fa-brands' },
    { name: 'Npm', level: 'Expert', icon: 'fa-npm', color: '#E34F26', prefix: 'fa-brands' },
    { name: 'React.js', level: 'Expert', icon: 'fa-react', color: '#61DAFB', prefix: 'fa-brands' },
    { name: 'Next.js', level: 'Expert', icon: 'fa-square-js', color: '#61DAFB', prefix: 'fa-brands' },
    { name: 'Tailwind', level: 'Expert', icon: 'fa-web-awesome', color: '#61DAFB', prefix: 'fa-solid' },
    { name: 'Storybook', level: 'Expert', icon: 'fa-stripe-s', color: '#CC6699', prefix: 'fa-brands' },
    { name: 'Trello', level: 'Expert', icon: 'fa-trello', color: '#CC6699', prefix: 'fa-brands' },
    { name: 'Wordpress', level: 'Expert', icon: 'fa-wordpress', color: '#CC6699', prefix: 'fa-brands' },
    { name: 'Svn', level: 'Expert', icon: 'fa-code', color: '#CC6699', prefix: 'fa-solid' },
    { name: 'Panda.css', level: 'Expert', icon: 'fa-web-awesome', color: '#CC6699', prefix: 'fa-solid' },
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
              <i className={`${skill.prefix} ${skill.icon} text-3xl mb-1`} style={{ color: skill.color }}></i>
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

