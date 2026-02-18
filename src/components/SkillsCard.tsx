import { useState } from 'react';
import { SkillsDetailModal } from './SkillsDetailModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getCardSkills, getLevelText } from '../data/skillsData';

export function SkillsCard() {
  const [isOpen, setIsOpen] = useState(false);

  // Get only skills that should be shown in the card
  const topSkills = getCardSkills();

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
              onClick={() => setIsOpen(true)}
              className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:border-primary/30 hover:scale-[1.02] shadow-sm hover:shadow-md flex flex-col items-center justify-center gap-2 aspect-square group transition-all cursor-pointer text-center w-full"
            >
              {skill.icon ? (
                <FontAwesomeIcon icon={skill.icon} className="text-3xl mb-1" style={{ color: skill.color }} />
              ) : skill.iconText ? (
                <div className="text-3xl mb-1 font-bold" style={{ color: skill.color }}>
                  {skill.iconText}
                </div>
              ) : null}
              <div className="text-center">
                <div className="font-bold text-slate-900 dark:text-white text-sm">{skill.name}</div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400">{getLevelText(skill.level)}</div>
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
