import {
  type ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { careerData } from "../data/mockData";
import type { Career } from "../types";
import { CardView } from "./CardView";
import { CareerHeader } from "./CareerHeader";
import { CareerToolbar } from "./CareerToolbar";
import { CareerTable } from "./CareerTable";

export const CareerBoard = () => {
  const [viewMode, setViewMode] = useState<"table" | "card">("table"); 
  const [globalFilter, setGlobalFilter] = useState("");

  // Custom filter logic to handle search text
  const filteredData = useMemo(() => {
    let data = careerData;

    // Filter by Search Text (Global)
    if (globalFilter) {
      const lowerFilter = globalFilter.toLowerCase();
      data = data.filter((item) =>
        Object.values(item).some(
          (val) =>
            typeof val === "string" && val.toLowerCase().includes(lowerFilter)
        )
      );
    }

    return data;
  }, [globalFilter]);

  const columns = useMemo<ColumnDef<Career>[]>(
    () => [
      {
        accessorKey: "period",
        header: "Period",
        cell: (info) => <span className="whitespace-nowrap font-medium text-gray-700">{info.getValue() as string}</span>,
      },
      {
        accessorKey: "company",
        header: "Company",
        cell: (info) => <span className="font-bold text-gray-900">{info.getValue() as string}</span>,
      },
      {
        accessorKey: "role",
        header: "Role",
        cell: (info) => <span className="text-blue-600">{info.getValue() as string}</span>,
      },
      {
        accessorKey: "category",
        header: "Category",
      },
      {
        accessorKey: "description",
        header: "Description",
        cell: (info) => <span className="text-gray-600 block min-w-[300px]">{info.getValue() as string}</span>,
      },
      {
        accessorKey: "techStack",
        header: "Tech Stack",
      },
    ],
    []
  );

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(), // Not strictly needed with manual filtering but good practice
  });

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased min-h-screen flex flex-col overflow-hidden">
      {/* Navigation */}
      <CareerHeader />

      {/* Toolbar */}
      <CareerToolbar 
        globalFilter={globalFilter} 
        setGlobalFilter={setGlobalFilter} 
        viewMode={viewMode} 
        setViewMode={setViewMode} 
      />

      {/* Main Content Area */}
      <div className="flex-1 overflow-auto bg-background-light dark:bg-background-dark p-6">
        {viewMode === "table" ? (
          <CareerTable table={table} />
        ) : (
          <CardView rows={table.getRowModel().rows} />
        )}
        
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 px-2">
            <span className="text-sm text-slate-500 dark:text-slate-400">
              Showing <span className="font-bold text-slate-800 dark:text-slate-200">1-{filteredData.length}</span> of <span className="font-bold text-slate-800 dark:text-slate-200">{careerData.length}</span> projects
            </span>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 text-sm rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-400 disabled:opacity-50 cursor-not-allowed shadow-sm" disabled>
                <span className="material-symbols-outlined text-[16px]">chevron_left</span>
              </button>
              <button className="px-3 py-1.5 text-sm font-medium rounded-lg bg-primary text-white shadow-sm ring-2 ring-primary ring-offset-2 dark:ring-offset-slate-900">1</button>
               {/* Pagination placeholders - implementing full pagination not requested but kept UI structure */}
              <button className="px-3 py-1.5 text-sm rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 shadow-sm transition-colors">
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};
