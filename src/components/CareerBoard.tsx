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
import { TableView } from "./TableView";
import { TagFilter } from "./TagFilter";
import { ViewToggle } from "./ViewToggle";
import { Search } from "lucide-react";
import { Badge } from "./ui/Badge";

export const CareerBoard = () => {
  const [viewMode, setViewMode] = useState<"table" | "card">("card"); // Default to Card view for visual impact
  const [globalFilter, setGlobalFilter] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Calculate all unique tags from data
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    careerData.forEach((item) => item.techStack.forEach((tag) => tags.add(tag)));
    return Array.from(tags).sort();
  }, []);

  const handleToggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  // Custom filter logic to handle both search text and tag selection
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

    // Filter by Selected Tags
    if (selectedTags.length > 0) {
      data = data.filter((item) =>
        selectedTags.every((tag) => item.techStack.includes(tag))
      );
    }

    return data;
  }, [globalFilter, selectedTags]);

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
        cell: (info) => (
          <div className="flex flex-wrap gap-1">
            {(info.getValue() as string[]).map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        ),
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
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Search Bar */}
        <div className="relative w-full md:w-96">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-shadow shadow-sm"
            placeholder="Search company, role, or stack..."
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
          />
        </div>

        {/* View Toggle */}
        <ViewToggle viewMode={viewMode} onToggle={setViewMode} />
      </div>

      {/* Tag Filters */}
      <div>
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Filter by Tech Stack</h3>
        <TagFilter
          allTags={allTags}
          selectedTags={selectedTags}
          onToggleTag={handleToggleTag}
        />
      </div>

      {/* Content Area */}
      <div className="min-h-[400px]">
        {viewMode === "table" ? (
          <TableView table={table} />
        ) : (
          <CardView rows={table.getRowModel().rows} />
        )}
      </div>

      <div className="text-xs text-gray-400 text-right">
        Showing {filteredData.length} records
      </div>
    </div>
  );
};
