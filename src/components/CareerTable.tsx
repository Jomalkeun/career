import type { Table } from '@tanstack/react-table';
import type { Career } from '../types';

interface CareerTableProps {
  table: Table<Career>;
}

export const CareerTable = ({ table }: CareerTableProps) => {
  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark overflow-hidden min-w-[1400px]">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-border-light dark:border-border-dark">
            <th className="py-4 px-5 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 w-[22%] group cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <div className="flex items-center gap-1">
                업무명 (Project Name)
                <span className="material-symbols-outlined text-[14px] opacity-0 group-hover:opacity-100 transition-opacity">arrow_downward</span>
              </div>
            </th>
            <th className="py-4 px-5 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 w-[12%] group cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <div className="flex items-center gap-1">
                참여기간
                <span className="material-symbols-outlined text-[14px] opacity-0 group-hover:opacity-100 transition-opacity">arrow_downward</span>
              </div>
            </th>
            <th className="py-4 px-5 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 w-[12%] group cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <div className="flex items-center gap-1">
                고객사 (Client)
                <span className="material-symbols-outlined text-[14px] opacity-0 group-hover:opacity-100 transition-opacity">arrow_downward</span>
              </div>
            </th>
            <th className="py-4 px-5 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 w-[12%] group cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <div className="flex items-center gap-1">
                근무회사
                <span className="material-symbols-outlined text-[14px] opacity-0 group-hover:opacity-100 transition-opacity">arrow_downward</span>
              </div>
            </th>
            <th className="py-4 px-5 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 w-[10%] group cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <div className="flex items-center gap-1">
                본인역할
                <span className="material-symbols-outlined text-[14px] opacity-0 group-hover:opacity-100 transition-opacity">arrow_downward</span>
              </div>
            </th>
            <th className="py-4 px-5 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 w-[14%]">
              <div className="flex items-center gap-1">OS / 사용환경</div>
            </th>
            <th className="py-4 px-5 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              사용기술 (Tech Stack)
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border-light dark:divide-border-dark">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-colors group cursor-pointer">
              <td className="py-4 px-5 align-top">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">folder_open</span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                      {row.original.projectName || row.original.role}
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 pl-6">
                    {row.original.description}
                  </span>
                </div>
              </td>
              <td className="py-4 px-5 align-top">
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 whitespace-nowrap font-variant-numeric">
                  {row.original.period}
                </span>
                <div className="text-[11px] text-slate-400 font-medium mt-0.5">
                  {row.original.duration}
                </div>
              </td>
              <td className="py-4 px-5 align-top">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-[9px] text-white font-bold shrink-0 shadow-sm">
                    {row.original.client ? row.original.client.substring(0, 2).toUpperCase() : 'CL'}
                  </div>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300 truncate">
                    {row.original.client || 'Client'}
                  </span>
                </div>
              </td>
              <td className="py-4 px-5 align-top">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-slate-400 text-[16px]">business</span>
                  <span className="text-sm text-slate-700 dark:text-slate-300">
                    {row.original.company}
                  </span>
                </div>
              </td>
              <td className="py-4 px-5 align-top">
                <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-blue-50 dark:bg-blue-900/30 text-primary border border-blue-100 dark:border-blue-800">
                  {row.original.role}
                </span>
              </td>
              <td className="py-4 px-5 align-top">
                <div className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  {/* Assuming category or another field maps to OS/Env as placeholder */}
                  <div className="flex items-center gap-1.5 mb-1"><span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>{row.original.category}</div>
                </div>
              </td>
              <td className="py-4 px-5 align-top">
                <div className="flex flex-wrap gap-1.5">
                  {row.original.techStack.map((tech) => (
                    <span key={tech} className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-700 text-[11px] font-semibold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600 hover:border-slate-300 dark:hover:border-slate-500 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
