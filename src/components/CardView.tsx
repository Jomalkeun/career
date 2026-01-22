import type { Row } from "@tanstack/react-table";
import type { Career } from "../types";
import { ProjectCard } from "./ProjectCard";

interface CardViewProps {
  rows: Row<Career>[];
}

export const CardView = ({ rows }: CardViewProps) => {
  if (rows.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500 bg-white rounded-lg border border-gray-200 border-dashed">
        No matching records found.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {rows.map((row) => (
        <ProjectCard key={row.id} career={row.original} />
      ))}
    </div>
  );
};
