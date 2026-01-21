import { type Table, flexRender } from "@tanstack/react-table";
import type { Career } from "../types";

interface ProjectsTableProps {
  table: Table<Career>;
}

export function ProjectsTable({ table }: ProjectsTableProps) {
  return (
    <div className="card-surface overflow-hidden">
      <div className="table-container w-full">
        <table className="min-w-full divide-y divide-light-gray-border">
          <thead className="bg-silver-bg/50">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    scope="col"
                    className="px-6 py-4 text-left text-[9px] font-bold text-medium-gray uppercase tracking-widest"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-light-gray-border">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-silver-bg transition-colors group cursor-pointer">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-6 py-5 whitespace-nowrap">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-6 py-4 bg-silver-bg/30 flex items-center justify-between border-t border-light-gray-border">
        <div className="flex-1 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold text-medium-gray uppercase tracking-widest">
              Showing{' '}
              <span className="text-deep-charcoal">
                {table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1}
              </span>{' '}
              to{' '}
              <span className="text-deep-charcoal">
                {Math.min(
                  (table.getState().pagination.pageIndex + 1) * table.getState().pagination.pageSize,
                  table.getFilteredRowModel().rows.length
                )}
              </span>{' '}
              of <span className="text-deep-charcoal">{table.getFilteredRowModel().rows.length}</span>
            </p>
          </div>
          <nav
            aria-label="Pagination"
            className="relative z-0 inline-flex rounded-lg -space-x-px overflow-hidden border border-light-gray-border bg-white shadow-subtle"
          >
            <button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="relative inline-flex items-center px-2 py-2 text-medium-gray hover:bg-silver-bg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="material-symbols-outlined text-[16px]">chevron_left</span>
            </button>
            {Array.from({ length: table.getPageCount() }, (_, i) => (
              <button
                key={i}
                onClick={() => table.setPageIndex(i)}
                className={`relative inline-flex items-center px-4 py-2 text-[10px] font-bold border-x border-light-gray-border ${
                  table.getState().pagination.pageIndex === i
                    ? 'bg-silver-bg text-deep-charcoal'
                    : 'text-medium-gray hover:bg-silver-bg'
                } transition-colors`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="relative inline-flex items-center px-2 py-2 text-medium-gray hover:bg-silver-bg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
