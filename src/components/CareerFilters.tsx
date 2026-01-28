import React from 'react';

interface CareerFiltersProps {
  techs: string[];
  selectedTech: string | null;
  onSelectTech: (tech: string | null) => void;
}

export const CareerFilters = ({ techs, selectedTech, onSelectTech }: CareerFiltersProps) => {
  return (
    <div className="px-6 py-3 border-b border-border-light dark:border-border-dark bg-slate-50 dark:bg-slate-800/50">
      <div className="flex items-center gap-2 overflow-x-auto pb-2 custom-scrollbar no-scrollbar-on-mobile">
        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mr-1">Filter:</span>
        <button
          onClick={() => onSelectTech(null)}
          className={`flex items-center px-3 py-1.5 rounded-full text-xs font-medium transition-all active:scale-95 whitespace-nowrap ${selectedTech === null
              ? "bg-primary text-white shadow-sm"
              : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-600 hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary"
            }`}
        >
          All
        </button>
        {techs.map((tech) => (
          <button
            key={tech}
            onClick={() => onSelectTech(tech === selectedTech ? null : tech)}
            className={`flex items-center px-3 py-1.5 rounded-full text-xs font-medium transition-all active:scale-95 whitespace-nowrap ${selectedTech === tech
                ? "bg-primary text-white shadow-sm"
                : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-600 hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary"
              }`}
          >
            {tech}
          </button>
        ))}
      </div>
    </div>
  );
};
