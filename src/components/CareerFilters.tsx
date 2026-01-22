import React from 'react';

export const CareerFilters = () => {
  return (
    <div className="px-6 py-3 border-b border-border-light dark:border-border-dark bg-slate-50 dark:bg-slate-800/50">
      <div className="flex items-center gap-2 overflow-x-auto pb-2 custom-scrollbar no-scrollbar-on-mobile">
        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mr-1">Filter:</span>
        <button className="flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-primary text-white shadow-sm transition-transform active:scale-95 whitespace-nowrap">
            All
        </button>
        <button className="flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-600 hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary transition-colors whitespace-nowrap">
            Vue.js
        </button>
        <button className="flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-600 hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary transition-colors whitespace-nowrap">
            React.js
        </button>
        <button className="flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-600 hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary transition-colors whitespace-nowrap">
            HTML/CSS
        </button>
        <button className="flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-600 hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary transition-colors whitespace-nowrap">
            UX Design
        </button>
        <button className="flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-600 hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary transition-colors whitespace-nowrap">
            Backend
        </button>
      </div>
    </div>
  );
};
