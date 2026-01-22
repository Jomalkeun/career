import { useState } from 'react';
import { SkillsDetailModal } from './SkillsDetailModal';

export function SkillsCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="mb-0 transition-all duration-300">
        <div className="mb-3 flex items-baseline justify-between">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Top 5 Core Stacks</h2>
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
        <div className="flex overflow-x-auto gap-4 pb-4 no-scrollbar">
          <div className="min-w-[140px] bg-surface-light dark:bg-surface-dark p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center gap-3">
            <i className="fa-brands fa-html5 text-4xl text-[#E34F26]"></i>
            <div className="text-center">
              <div className="font-bold text-slate-900 dark:text-white">HTML5</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Expert</div>
            </div>
          </div>
          <div className="min-w-[140px] bg-surface-light dark:bg-surface-dark p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center gap-3">
            <i className="fa-brands fa-css3-alt text-4xl text-[#1572B6]"></i>
            <div className="text-center">
              <div className="font-bold text-slate-900 dark:text-white">CSS3</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Expert</div>
            </div>
          </div>
          <div className="min-w-[140px] bg-surface-light dark:bg-surface-dark p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center gap-3">
            <i className="fa-brands fa-js text-4xl text-[#F7DF1E]"></i>
            <div className="text-center">
              <div className="font-bold text-slate-900 dark:text-white">JavaScript</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Advanced</div>
            </div>
          </div>
          <div className="min-w-[140px] bg-surface-light dark:bg-surface-dark p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center gap-3">
            <i className="fa-brands fa-vuejs text-4xl text-[#4FC08D]"></i>
            <div className="text-center">
              <div className="font-bold text-slate-900 dark:text-white">Vue.js</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Advanced</div>
            </div>
          </div>
          <div className="min-w-[140px] bg-surface-light dark:bg-surface-dark p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center gap-3">
            <i className="fa-brands fa-sass text-4xl text-[#CC6699]"></i>
            <div className="text-center">
              <div className="font-bold text-slate-900 dark:text-white">Sass/SCSS</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Expert</div>
            </div>
          </div>
        </div>
      </section>

      <SkillsDetailModal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
      />
    </>
  );
}

