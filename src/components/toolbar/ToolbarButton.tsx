
interface ToolbarButtonProps {
  icon: string;
  label: string;
  onClick?: () => void;
  rightIcon?: string;
  active?: boolean;
}

export const ToolbarButton = ({ icon, label, onClick, rightIcon, active }: ToolbarButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-3 py-2 border rounded-lg transition-colors shadow-sm group
        ${active
          ? 'bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300'
          : 'bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
        }`}
    >
      <span className={`material-symbols-outlined text-[18px] transition-colors ${active ? 'text-blue-600 dark:text-blue-400' : 'text-slate-500 group-hover:text-primary'}`}>
        {icon}
      </span>
      <span className="text-sm font-medium">{label}</span>
      {rightIcon && (
        <span className="material-symbols-outlined text-slate-400 text-[18px]">
          {rightIcon}
        </span>
      )}
    </button>
  );
};
