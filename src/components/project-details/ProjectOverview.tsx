
import type { Career } from '../../types';

interface ProjectOverviewProps {
  project: Career;
}

export const ProjectOverview = ({ project }: ProjectOverviewProps) => {
  return (
    <section>
      <h1 className="text-2xl font-extrabold text-[#111418] dark:text-white leading-tight mb-2">
        {project.projectName || project.role}
      </h1>
      <div className="flex flex-wrap gap-y-4">
        <div className="w-1/2">
          <p className="text-[10px] text-[#637588] dark:text-gray-400 uppercase font-bold tracking-widest mb-1">Company</p>
          <p className="text-sm font-semibold dark:text-gray-200">{project.company}</p>
        </div>
        <div className="w-1/2">
          <p className="text-[10px] text-[#637588] dark:text-gray-400 uppercase font-bold tracking-widest mb-1">Duration</p>
          <p className="text-sm font-semibold dark:text-gray-200">{project.period}</p>
        </div>
        <div className="w-full">
          <p className="text-[10px] text-[#637588] dark:text-gray-400 uppercase font-bold tracking-widest mb-1">Client Location</p>
          <p className="text-sm font-semibold dark:text-gray-200">{project.client || 'N/A'}</p>
        </div>
      </div>
    </section>
  );
};
