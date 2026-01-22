
interface SkillGridItemProps {
  name: string;
  iconClass?: string;
  iconText?: string;
  iconColor?: string;
  level: number; // 1-5
}

export const SkillGridItem = ({ name, iconClass, iconText, iconColor, level }: SkillGridItemProps) => {
  return (
    <div className="bg-surface-light dark:bg-surface-dark p-3 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col gap-2">
      <div className="flex justify-between items-start">
         {iconClass ? (
             <i className={`${iconClass} text-2xl`} style={{ color: iconColor }}></i>
         ) : (
             <div className="text-xl font-bold" style={{ color: iconColor }}>{iconText}</div>
         )}
        <div className="flex gap-0.5 mt-1">
            {[1, 2, 3, 4].map((i) => (
                 <div 
                 key={i} 
                 className={`w-1.5 h-1.5 rounded-full ${i <= level ? 'bg-primary' : 'bg-slate-200 dark:bg-slate-600'}`}
               ></div>
            ))}
        </div>
      </div>
      <div className="font-medium text-sm text-slate-900 dark:text-white">{name}</div>
    </div>
  );
};
