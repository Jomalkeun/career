
interface SkillSectionProps {
  title: string;
  children: React.ReactNode;
  gridCols?: number;
}

export const SkillSection = ({ title, children, gridCols = 1 }: SkillSectionProps) => {
  return (
    <section>
      <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
        <span className="w-1 h-6 bg-primary rounded-full"></span>
        {title}
      </h2>
      <div className={`grid grid-cols-${gridCols} gap-3`}>
        {children}
      </div>
    </section>
  );
};
