
interface ViewToggleProps {
  viewMode: 'table' | 'card' | 'list';
  setViewMode: (mode: 'table' | 'card' | 'list') => void;
}

export const ViewToggle = ({ viewMode, setViewMode }: ViewToggleProps) => {
  const modes: { id: 'table' | 'card' | 'list'; icon: string }[] = [
    { id: 'list', icon: 'view_list' }, // Note: id was list but icon view_list
    { id: 'card', icon: 'grid_view' },
    { id: 'table', icon: 'table_rows' },
  ];

  return (
    <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg border border-slate-200 dark:border-slate-700">
      {modes.map((mode) => (
        <button
          key={mode.id}
          onClick={() => setViewMode(mode.id)}
          className={`p-1.5 rounded transition-colors ${mode.id === 'table' ? 'hidden lg:inline-block' : ''
            } ${viewMode === mode.id
              ? "bg-white dark:bg-slate-700 shadow-sm text-primary dark:text-primary ring-1 ring-black/5 dark:ring-white/10"
              : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            }`}
        >
          <span className="material-symbols-outlined text-[20px] block">{mode.icon}</span>
        </button>
      ))}
    </div>
  );
};
