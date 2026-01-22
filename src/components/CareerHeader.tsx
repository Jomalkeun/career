

export const CareerHeader = () => {
  return (
    <nav className="bg-surface-light dark:bg-surface-dark border-b border-border-light dark:border-border-dark px-6 py-3 flex items-center justify-between shadow-sm z-50 shrink-0">
      <div className="flex items-center gap-4">
        <div className="bg-primary/10 p-2 rounded-lg">
          <span className="material-symbols-outlined text-primary text-2xl">dataset</span>
        </div>
        <h1 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
          Career History Manager
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors">
          <span className="material-symbols-outlined text-xl">notifications</span>
        </button>
        <button className="p-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors">
          <span className="material-symbols-outlined text-xl">settings</span>
        </button>
        <div className="h-8 w-px bg-slate-200 dark:bg-slate-700"></div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-bold text-green-700 dark:text-green-400 uppercase tracking-wider">
              Available
            </span>
          </div>
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-blue-600 text-white flex items-center justify-center text-sm font-bold shadow-sm ring-2 ring-white dark:ring-slate-800 cursor-pointer">
            JD
          </div>
        </div>
      </div>
    </nav>
  );
};
