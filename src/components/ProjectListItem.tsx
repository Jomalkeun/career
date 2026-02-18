import type { Career } from "../types";
import { Badge } from "./ui/Badge";

interface ProjectListItemProps {
  career: Career;
}

export const ProjectListItem = ({ career }: ProjectListItemProps) => {
  const { period = "", company, role, description, techStack } = career;

  // Flatten techStack to array of strings
  const techStackArray = Array.isArray(techStack)
    ? techStack
    : [
        ...(techStack.framework || []),
        ...(techStack.library || []),
        ...(techStack.other || []),
      ];
  
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 overflow-hidden flex flex-col sm:flex-row">
      <div className="p-6 flex-1">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
          <div>
            <h3 className="text-lg font-bold text-gray-900 leading-tight">{company}</h3>
            <p className="text-sm text-blue-600 font-medium mt-1">{role}</p>
          </div>
          <div className="flex flex-col sm:items-end gap-1">
              <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded border border-gray-100 whitespace-nowrap">
              {period}
              </span>
           </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {techStackArray.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-gray-50 text-gray-600">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};
