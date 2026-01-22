

interface CareerToolbarProps {
  globalFilter: string;
  setGlobalFilter: (value: string) => void;
  viewMode: 'table' | 'card' | 'list';
  setViewMode: (mode: 'table' | 'card' | 'list') => void;
  onToggleFilters: () => void;
}

export const CareerToolbar = ({
  globalFilter,
  setGlobalFilter,
  viewMode,
  setViewMode,
  onToggleFilters,
}: CareerToolbarProps) => {
  return (
    <div className="bg-surface-light dark:bg-surface-dark border-b border-border-light dark:border-border-dark px-6 py-4 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 z-40 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] shrink-0">
      <div className="relative w-full lg:w-96 group">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="material-symbols-outlined text-slate-400 text-[20px] group-focus-within:text-primary transition-colors">
            search
          </span>
        </div>
        <input
          className="block w-full pl-10 pr-3 py-2.5 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-primary/20 focus:border-primary sm:text-sm transition-all"
          placeholder="Search projects, clients, or skills..."
          type="text"
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
        <div className="relative">
          <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm text-slate-700 dark:text-slate-300">
            <span className="material-symbols-outlined text-slate-500 text-[18px]">
              calendar_today
            </span>
            <span className="text-sm font-medium">All Years</span>
            <span className="material-symbols-outlined text-slate-400 text-[18px]">
              arrow_drop_down
            </span>
          </button>
        </div>
        <button 
          onClick={onToggleFilters}
          className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm group text-slate-700 dark:text-slate-300"
        >
          <span className="material-symbols-outlined text-slate-500 group-hover:text-primary text-[18px] transition-colors">
            filter_list
          </span>
          <span className="text-sm font-medium">Filter</span>
        </button>
        <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm group text-slate-700 dark:text-slate-300"
        >
          <span className="material-symbols-outlined text-slate-500 group-hover:text-primary text-[18px] transition-colors">
            sort
          </span>
          <span className="text-sm font-medium">Sort</span>
        </button>
        <div className="h-6 w-px bg-slate-300 dark:bg-slate-700 mx-1 hidden lg:block"></div>
        <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg border border-slate-200 dark:border-slate-700">
          <button
              onClick={() => setViewMode("list")}
              className={`p-1.5 rounded transition-colors ${
                viewMode === "list"
                  ? "bg-white dark:bg-slate-700 shadow-sm text-primary dark:text-primary ring-1 ring-black/5 dark:ring-white/10"
                  : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              }`}
            >
              <span className="material-symbols-outlined text-[20px] block">view_list</span>
            </button>
          <button
            onClick={() => setViewMode("card")}
            className={`p-1.5 rounded transition-colors ${
              viewMode === "card"
                ? "bg-white dark:bg-slate-700 shadow-sm text-primary dark:text-primary ring-1 ring-black/5 dark:ring-white/10"
                : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            }`}
          >
            <span className="material-symbols-outlined text-[20px] block">grid_view</span>
          </button>
          <button
            onClick={() => setViewMode("table")}
            className={`p-1.5 rounded transition-colors ${
              viewMode === "table"
                ? "bg-white dark:bg-slate-700 shadow-sm text-primary dark:text-primary ring-1 ring-black/5 dark:ring-white/10"
                : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            }`}
          >
            <span className="material-symbols-outlined text-[20px] block">table_rows</span>
          </button>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-blue-600 text-white rounded-lg shadow-sm transition-all active:scale-[0.98] group ml-2">
          <span className="material-symbols-outlined text-[18px] group-hover:animate-bounce">
            download
          </span>
          <span className="text-sm font-bold">Export PDF</span>
        </button>
      </div>
    </div>
  );
};
