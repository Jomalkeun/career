import { useMemo } from 'react';
import type { ColumnDef } from '@tanstack/react-table';
import type { Career } from '../types';
import { getFlatTechList } from '../utils/careerUtils';

export const useCareerColumns = (showDescriptionAsRow: boolean) => {
  return useMemo<ColumnDef<Career>[]>(
    () => {
      const baseColumns: ColumnDef<Career>[] = [
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
      ];

      // 수행업무
      if (!showDescriptionAsRow) {
        baseColumns.push({
          accessorKey: "description",
          header: "수행업무",
          cell: (info) => (
            <span className="text-slate-600 dark:text-slate-400 text-sm whitespace-pre-wrap min-w-[300px] block">
              {info.getValue() as string}
            </span>
          ),
          enableSorting: false,
        });
      }

      baseColumns.push(
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
          accessorKey: "language",
          header: "언어 (Language)",
          cell: (info) => {
            const languages = getFlatTechList(info.getValue() as any);
            return (
              <div className="flex flex-wrap gap-1.5">
                {languages?.map((lang, idx) => (
                  <span key={`${lang}-${idx}`} className="px-2 py-1 text-xs rounded border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {lang}
                  </span>
                ))}
              </div>
            );
          },
          enableSorting: false,
        },
        {
          accessorKey: "tool",
          header: "Tool",
          cell: (info) => {
            const tools = getFlatTechList(info.getValue() as any);
            return (
              <div className="flex flex-wrap gap-1.5">
                {tools?.map((tool, idx) => (
                  <span key={`${tool}-${idx}`} className="px-2 py-1 text-xs rounded border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {tool}
                  </span>
                ))}
              </div>
            );
          },
          enableSorting: false,
        },
        {
          accessorKey: "techStack",
          header: "Tech Stack",
          cell: (info) => {
            const val = info.getValue() as any;
            if (!val) return null;

            if (Array.isArray(val)) {
              return (
                <div className="flex flex-wrap gap-1.5">
                  {val.map((item, idx) => (
                    <span key={idx} className="px-2 py-1 text-xs rounded border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
              )
            }

            const { phase, responsiveWeb, accessibility, multilingual, other } = val;
            return (
              <div className="flex flex-wrap gap-1.5">
                {phase && (
                  <span className="px-2 py-1 text-xs rounded border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300">
                    {phase}
                  </span>
                )}
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
                {other?.map((item: string, idx: number) => (
                  <span key={idx} className="px-2 py-1 text-xs rounded border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            );
          },
          enableSorting: false,
        });

      return baseColumns;
    },
    [showDescriptionAsRow]
  );
};
