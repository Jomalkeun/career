import type { Row } from "@tanstack/react-table";
import type { Career } from "../types";
import { useMemo } from 'react';
import { getFlatTechList } from "../utils/careerUtils";

interface ListViewProps {
  rows: Row<Career>[];
}

interface CareerGroup {
  id: string;
  company: string;
  period: string; // Approximate period from first to last project in group or explicit field
  role: string;
  projects: Career[];
}

export const ListView = ({ rows }: ListViewProps) => {
  // Group rows by company/period continuity
  const groups = useMemo(() => {
    const result: CareerGroup[] = [];
    if (rows.length === 0) return result;

    let currentGroup: CareerGroup | null = null;

    rows.forEach((row) => {
      const career = row.original;

      // Check if we can continue with the current group (same company)
      if (currentGroup && currentGroup.company === career.company) {
        currentGroup.projects.push(career);
        // Extend period logic could be improved, but for now we keep the group's main period 
        // or update it if we parsed dates. For simplicity, we stick to the first project's period
        // or the company-level period field if it existed.
        return;
      }

      // Close current group and start a new one
      if (currentGroup) {
        result.push(currentGroup);
      }

      currentGroup = {
        id: `group-${career.id}`,
        company: career.company,
        period: career.period || "2024", // Fallback
        role: career.role, // Main role, or most recent
        projects: [career],
      };
    });

    if (currentGroup) {
      result.push(currentGroup);
    }

    return result;
  }, [rows]);

  if (rows.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500 bg-white rounded-lg border border-gray-200 border-dashed">
        No matching records found.
      </div>
    );
  }

  const getGroupStyle = (index: number) => {
    // Cycle through styles: Primary (Blue), Amber, Emerald
    const styles = [
      {
        yearBg: "bg-primary text-white",
        iconBg: "bg-blue-50 dark:bg-slate-700",
        iconColor: "text-primary",
        icon: "rocket_launch",
        border: "border-primary dark:border-blue-500"
      },
      {
        yearBg: "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300",
        iconBg: "bg-amber-50 dark:bg-slate-700",
        iconColor: "text-amber-500",
        icon: "token",
        border: "border-amber-500"
      },
      {
        yearBg: "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300",
        iconBg: "bg-emerald-50 dark:bg-slate-700",
        iconColor: "text-emerald-500",
        icon: "developer_mode",
        border: "border-emerald-500"
      }
    ];
    return styles[index % styles.length];
  };

  return (
    <main className="max-w-md mx-auto px-4 pb-24 relative">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700 opacity-50"></div>

      {groups.map((group, index) => {
        const style = getGroupStyle(index);

        return (
          <div key={group.id} className="relative mb-16">
            <div className="flex flex-col items-center mb-10">
              <div className={`z-10 text-[10px] font-bold px-3 py-1 rounded-full shadow-lg mb-4 ${style.yearBg}`}>
                {group.period.split(/[.-]/)[0] || '2024'} {/* Extract Year roughly */}
              </div>
              <div className="z-10 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-md border border-slate-100 dark:border-slate-700 w-full text-center">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 ${style.iconBg}`}>
                  <span className={`material-symbols-outlined text-2xl ${style.iconColor}`}>{style.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{group.company}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">{group.role}</p>
                <p className="text-xs text-slate-400 dark:text-slate-500 italic">{group.period}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 px-2">
              {group.projects.map((project) => (
                <div key={project.id} className="relative flex items-start group">
                  <div className={`bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-sm border-l-4 w-full hover:shadow-md transition-shadow ${style.border}`}>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-slate-800 dark:text-slate-100">{project.projectName || project.projectType}</h4>
                      <button className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors cursor-pointer text-[20px]">
                        open_in_new
                      </button>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {(() => {
                        const allTechs = [
                          ...getFlatTechList(project.language),
                          ...getFlatTechList(project.tool)
                        ];

                        return allTechs.map((tech, idx) => (
                          <span key={`${tech}-${idx}`} className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-[10px] font-medium rounded-md">
                            {tech}
                          </span>
                        ));
                      })()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      <div className="flex justify-center mt-12 bg-white dark:bg-transparent relative z-10">
        <button className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full shadow-sm text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-slate-700 dark:text-slate-200">
          <span className="material-symbols-outlined text-primary text-lg">download</span>
          Download Full Resume
        </button>
      </div>
    </main>
  );
};
