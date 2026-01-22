
interface TechStackListProps {
  techStack: string[];
}

export const TechStackList = ({ techStack }: TechStackListProps) => {
  return (
    <section>
      <h3 className="text-xs font-bold text-[#637588] dark:text-gray-400 uppercase tracking-widest mb-4">Tech Stack</h3>
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
            <span key={tech} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 dark:bg-primary/10 text-primary text-xs font-bold rounded-lg border border-primary/20">
            {tech}
            </span>
        ))}
      </div>
    </section>
  );
};
