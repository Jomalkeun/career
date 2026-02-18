
import type { Career } from '../../types';

interface ArchitectureSectionProps {
  project: Career;
}

export const ArchitectureSection = ({ project }: ArchitectureSectionProps) => {
  if (!project.architecture) return null;

  return (
    <section className="bg-gray-50 dark:bg-gray-900/50 p-5 rounded-2xl border border-gray-100 dark:border-gray-800">
      <h3 className="text-xs font-bold text-[#637588] dark:text-gray-400 uppercase tracking-widest mb-3">Architecture & Challenges</h3>
      <div className="text-sm text-[#3e4d5b] dark:text-gray-300 leading-relaxed">
        {project.architecture}
      </div>
    </section>
  );
};
