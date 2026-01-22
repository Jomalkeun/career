
interface SkillItemProps {
  name: string;
  proficiency: string;
  iconClass?: string;
  iconText?: string;
  iconColor?: string;
  level: number; // 1-5
}

export const SkillItem = ({ name, proficiency, iconClass, iconText, iconColor, level }: SkillItemProps) => {
  return (
    <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-lg bg-slate-50 dark:bg-slate-700 flex items-center justify-center text-xl">
            {iconClass ? (
                 <i className={`${iconClass}`} style={{ color: iconColor }}></i>
            ) : (
                <span className="font-bold text-sm" style={{ color: iconColor }}>{iconText}</span>
            )}
        </div>
        <div>
          <div className="font-semibold text-slate-900 dark:text-white">{name}</div>
          <div className="text-xs text-slate-500 dark:text-slate-400">{proficiency}</div>
        </div>
      </div>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <div 
            key={i} 
            className={`w-2 h-2 rounded-full ${i <= level ? 'bg-primary' : 'bg-slate-200 dark:bg-slate-600'}`}
          ></div>
        ))}
      </div>
    </div>
  );
};
