
interface ToolbarButtonProps {
  icon: string;
  label: string;
  onClick?: () => void;
  rightIcon?: string;
}

export const ToolbarButton = ({ icon, label, onClick, rightIcon }: ToolbarButtonProps) => {
  return (
    <button 
      onClick={onClick}
      className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm group text-slate-700 dark:text-slate-300"
    >
      <span className="material-symbols-outlined text-slate-500 group-hover:text-primary text-[18px] transition-colors">
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
