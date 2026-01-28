import { flexRender, type Table } from '@tanstack/react-table';
import type { Career } from '../types';

interface CareerTableHeaderProps {
    table: Table<Career>;
}

export const CareerTableHeader = ({ table }: CareerTableHeaderProps) => {
    return (
        <thead className="bg-slate-50 dark:bg-slate-800/50">
            {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                        const isProjectColumn = header.column.id === 'projectName';
                        const isTechStackColumn = header.column.id === 'techStack';

                        const baseClasses = "px-6 py-4 text-left font-semibold uppercase tracking-wider text-xs whitespace-nowrap";
                        const stickyClasses = isProjectColumn ? "sticky left-0 z-10 bg-slate-50 dark:bg-slate-900 border-r border-slate-200 dark:border-slate-700 shadow-[4px_0_12px_-4px_rgba(0,0,0,0.1)] text-slate-900 dark:text-white" : "text-slate-500 dark:text-slate-400";
                        const widthClass = header.column.id === 'description' ? "w-64" : "";

                        return (
                            <th
                                key={header.id}
                                className={`${baseClasses} ${stickyClasses} ${widthClass}`}
                                scope="col"
                            >
                                <div
                                    className={`flex items-center gap-1 ${header.column.getCanSort() ? 'cursor-pointer hover:text-primary transition-colors' : ''}`}
                                    onClick={header.column.getToggleSortingHandler()}
                                >
                                    {flexRender(header.column.columnDef.header, header.getContext())}

                                    {header.column.getCanSort() && (
                                        <span className={`material-symbols-outlined text-[14px] ${header.column.getIsSorted() ? 'text-primary' : 'text-slate-400'}`}>
                                            {header.column.getIsSorted() === 'asc' ? 'expand_less' : header.column.getIsSorted() === 'desc' ? 'expand_more' : 'unfold_more'}
                                        </span>
                                    )}

                                    {isTechStackColumn && !header.column.getIsSorted() && (
                                        <span className="material-symbols-outlined text-[14px] text-primary">filter_list</span>
                                    )}
                                </div>
                            </th>
                        );
                    })}
                </tr>
            ))}
        </thead>
    );
};
