import type { Row } from "@tanstack/react-table";
import type { Career } from "../types";
import { Badge } from "./ui/Badge";

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {rows.map((row) => {
        const { period = "", company, role, description, techStack } = row.original;
        return (
          <div
            key={row.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 overflow-hidden flex flex-col"
          >
            <div className="p-6 flex-1">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">{company}</h3>
                  <p className="text-sm text-blue-600 font-medium mt-1">{role}</p>
                </div>
                <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded border border-gray-100 whitespace-nowrap">
                  {period.split(" ~ ")[0]}
                </span>
              </div>
              
              <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-3">
                {description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-gray-50 text-gray-600">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 flex justify-between items-center text-xs text-gray-400">
              <span>{period}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
