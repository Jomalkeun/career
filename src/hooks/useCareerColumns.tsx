import { useMemo } from 'react';
import type { ColumnDef } from '@tanstack/react-table';
import type { Career } from '../types';

export const useCareerColumns = () => {
  return useMemo<ColumnDef<Career>[]>(
    () => [
      {
        accessorKey: "projectName",
        header: "업무명",
        cell: (info) => <span className="font-medium text-slate-900 dark:text-white">{info.getValue() as string}</span>,
      },
      {
        accessorKey: "duration",
        header: "참여기간",
        cell: (info) => <span className="whitespace-nowrap font-medium text-slate-600 dark:text-slate-300">{info.getValue() as string}</span>,
        sortingFn: (rowA, rowB) => {
          const parseDate = (dateStr: string) => {
            if (!dateStr) return 0;
            const start = dateStr.split('~')[0].trim();
            const parts = start.split('.');
            if (parts.length < 2) return 0;
            return parseInt(parts[0]) * 100 + parseInt(parts[1]);
          };
          return parseDate(rowA.original.duration) - parseDate(rowB.original.duration);
        }
      },
      {
        accessorKey: "client",
        header: "고객사(발주사)",
        cell: (info) => <span className="text-slate-600 dark:text-slate-300">{info.getValue() as string || 'Client'}</span>,
        enableSorting: false,
      },
      {
        accessorKey: "company",
        header: "근무회사",
        cell: (info) => <span className="text-slate-600 dark:text-slate-300">{info.getValue() as string || 'Company'}</span>,
        enableSorting: false,
      },
      {
        accessorKey: "role",
        header: "본인역할",
        cell: (info) => (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
            {info.getValue() as string}
          </span>
        ),
        enableSorting: false,
      },
      {
        accessorKey: "osEnv",
        header: "OS / 사용환경",
        cell: (info) => (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
            {info.getValue() as string}
          </span>
        ),
        enableSorting: false,
      },
      {
        accessorKey: "techStack",
        header: "사용기술",
        cell: (info) => (
          <div className="flex flex-wrap gap-1.5">
            {(info.getValue() as string[]).map((tech) => (
              <span key={tech} className="px-2 py-1 text-xs rounded border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                {tech}
              </span>
            ))}
          </div>
        ),
        enableSorting: false,
      },
    ],
    []
  );
};
