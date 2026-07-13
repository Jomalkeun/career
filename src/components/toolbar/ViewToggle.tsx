
interface ViewToggleProps {
  viewMode: 'table' | 'card' | 'list' | 'group';
  setViewMode: (mode: 'table' | 'card' | 'list' | 'group') => void;
}

export const ViewToggle = ({ viewMode, setViewMode }: ViewToggleProps) => {
  const modes: { id: 'table' | 'card' | 'list' | 'group'; icon: string }[] = [
    { id: 'group', icon: 'apartment' },
    { id: 'table', icon: 'table_rows' },
    { id: 'card', icon: 'grid_view' },
    { id: 'list', icon: 'view_list' },
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
          title={
            mode.id === 'group' ? 'Group by Company' :
            mode.id === 'table' ? 'Table View' :
            mode.id === 'card' ? 'Grid View' :
            'List View'
          }
        >
          <span className="material-symbols-outlined text-[20px] block">{mode.icon}</span>
        </button>
      ))}
    </div>
  );
};
