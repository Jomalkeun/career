export const CareerTableHeader = () => {
  return (
    <thead className="bg-slate-50 dark:bg-slate-800/50">
        <tr>
        <th className="sticky left-0 z-10 bg-slate-50 dark:bg-slate-900 px-6 py-4 text-left font-semibold text-slate-900 dark:text-white uppercase tracking-wider text-xs border-r border-slate-200 dark:border-slate-700 shadow-[4px_0_12px_-4px_rgba(0,0,0,0.1)]" scope="col">
            <div className="flex items-center gap-1 cursor-pointer hover:text-primary">
            Project
            <span className="material-symbols-outlined text-[14px] text-slate-400">unfold_more</span>
            </div>
        </th>
        <th className="px-6 py-4 text-left font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-xs whitespace-nowrap" scope="col">
            <div className="flex items-center gap-1 cursor-pointer hover:text-primary">
            Period
            <span className="material-symbols-outlined text-[14px] text-slate-400">unfold_more</span>
            </div>
        </th>
        <th className="px-6 py-4 text-left font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-xs whitespace-nowrap" scope="col">Client</th>
        <th className="px-6 py-4 text-left font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-xs whitespace-nowrap" scope="col">Role</th>
        <th className="px-6 py-4 text-left font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-xs w-64" scope="col">Description</th>
        <th className="px-6 py-4 text-left font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-xs whitespace-nowrap" scope="col">
            <div className="flex items-center gap-1 cursor-pointer hover:text-primary">
            Tech Stack
            <span className="material-symbols-outlined text-[14px] text-primary">filter_list</span>
            </div>
        </th>
        <th className="px-6 py-4 text-right font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-xs whitespace-nowrap" scope="col">
            Actions
        </th>
        </tr>
    </thead>
  );
};
