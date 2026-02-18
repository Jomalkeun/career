import {
  type ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { careerData } from "../data/careerData";
import type { Career } from "../types";
import { CardView } from "./CardView";
import { CareerHeader } from "./CareerHeader";
import { CareerToolbar } from "./CareerToolbar";
import { CareerTable } from "./CareerTable";

export const CareerBoard = () => {
  const [viewMode, setViewMode] = useState<'table' | 'card' | 'list'>('table');
  const [globalFilter, setGlobalFilter] = useState('');
  const [showDescriptionAsRow, setShowDescriptionAsRow] = useState(false);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  // Extract available years from career data
  const availableYears = useMemo(() => {
    const years = new Set<string>();
    careerData.forEach((item) => {
      if (item.period) {
        const year = item.period.split('.')[0];
        years.add(year);
      }
    });
    return Array.from(years).sort().reverse();
  }, []);

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
        onToggleFilters={() => setShowFilters(!showFilters)}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
        availableYears={availableYears}
        showDescriptionAsRow={showDescriptionAsRow}
        setShowDescriptionAsRow={setShowDescriptionAsRow}
      />

      {/* Main Content Area */}
      <div className="flex-1 overflow-auto bg-background-light dark:bg-background-dark p-6">
        {viewMode === "table" ? (
          <CareerTable table={table} showDescriptionAsRow={showDescriptionAsRow} />
        ) : (
          <CardView rows={table.getRowModel().rows} />
        )}


      </div>
    </div>
  );
};
