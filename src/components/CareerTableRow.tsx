import type { Career } from "../types";

interface CareerTableRowProps {
  career: Career;
  onOpenModal: (project: Career) => void;
}

export const CareerTableRow = ({ career, onOpenModal }: CareerTableRowProps) => {
  return (
    <>
      <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors group">
        <td
          rowSpan={2}
          className="sticky left-0 z-10 bg-white dark:bg-surface-dark group-hover:bg-slate-50 dark:group-hover:bg-slate-800 px-6 py-4 whitespace-nowrap text-slate-900 dark:text-white font-medium border-r border-slate-200 dark:border-slate-700 align-top"
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600"></div>
            <span>{career.projectName || career.role}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenModal(career);
              }}
              className="text-slate-400 hover:text-primary transition-colors opacity-0 group-hover:opacity-100"
            >
              <span className="material-symbols-outlined text-[16px]">open_in_new</span>
            </button>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-slate-600 dark:text-slate-300">
          {career.duration}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-slate-600 dark:text-slate-300">
          {career.client || 'Client'}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-slate-600 dark:text-slate-300">
          {career.company || 'Company'}
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
            {career.role}
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
            {career.osEnv}
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex gap-1.5">
            {career.techStack.map((tech) => (
              <span key={tech} className="px-2 py-1 text-xs rounded border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                {tech}
              </span>
            ))}
          </div>
        </td>
      </tr>
      <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors group">
        <td colSpan={5} className="px-6 py-3 text-slate-600 dark:text-slate-400 text-sm italic bg-slate-50/50 dark:bg-slate-800/30">
          {career.description}
        </td>
      </tr>
    </>
  );
};
