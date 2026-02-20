import type { Career } from "../types";
import { getFlatTechList } from "../utils/careerUtils";

interface CareerTableRowProps {
  career: Career;
  onOpenModal: (project: Career) => void;
  showDescriptionAsRow: boolean;
}

export const CareerTableRow = ({ career, onOpenModal, showDescriptionAsRow }: CareerTableRowProps) => {
  return (
    <>
      <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors group">
        <td
          rowSpan={showDescriptionAsRow ? 2 : 1}
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
        {!showDescriptionAsRow && (
          <td className="px-6 py-4">

            <span className="text-slate-600 dark:text-slate-400 text-sm whitespace-pre-wrap min-w-[300px] block">
              {career.phase && (
                <span className="mr-2 px-2 py-0.5 text-xs rounded border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 align-middle not-italic font-normal">
                  {career.phase}
                </span>
              )}
              {Array.isArray(career.description) ? career.description[0] : career.description}
            </span>
          </td>
        )}
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
            {career.osEnv}
          </span>
        </td>
        <td className="px-6 py-4">
          <div className="flex gap-1.5 flex-wrap max-w-[200px]">
            {getFlatTechList(career.language).map((lang, idx) => (
              <span key={`${lang}-${idx}`} className="px-2 py-1 text-xs rounded border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                {lang}
              </span>
            ))}
          </div>
        </td>
        <td className="px-6 py-4">
          <div className="flex gap-1.5 flex-wrap max-w-[200px]">
            {getFlatTechList(career.tool).map((tool, idx) => (
              <span key={`${tool}-${idx}`} className="px-2 py-1 text-xs rounded border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                {tool}
              </span>
            ))}
          </div>
        </td>
        <td className="px-6 py-4">
          <div className="flex gap-1.5 flex-wrap max-w-[200px]">
            {(() => {
              const val = career.techStack;
              if (!val) return null;

              if (Array.isArray(val)) {
                return val.map((item, idx) => (
                  <span key={idx} className="px-2 py-1 text-xs rounded border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {item}
                  </span>
                ));
              }

              const { responsiveWeb, accessibility, multilingual, other } = val;
              return (
                <>
                  {responsiveWeb && (
                    <span className="px-2 py-1 text-xs rounded border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-300">
                      반응형
                    </span>
                  )}
                  {accessibility && (
                    <span className="px-2 py-1 text-xs rounded border border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300">
                      웹접근성
                    </span>
                  )}
                  {multilingual && (
                    <span className="px-2 py-1 text-xs rounded border border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300">
                      다국어
                    </span>
                  )}
                  {other?.map((item, idx) => (
                    <span key={idx} className="px-2 py-1 text-xs rounded border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {item}
                    </span>
                  ))}
                </>
              );
            })()}
          </div>
        </td>
      </tr>
      {showDescriptionAsRow && (
        <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors group">
          <td colSpan={5} className="px-6 py-3 text-slate-600 dark:text-slate-400 text-sm italic bg-slate-50/50 dark:bg-slate-800/30">
            {career.phase && (
              <span className="mr-2 px-2 py-0.5 text-xs rounded border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 align-middle not-italic font-normal">
                {career.phase}
              </span>
            )}
            <span className="align-middle">{career.description}</span>
          </td>
        </tr>
      )}
    </>
  );
};
