import type { Career } from "../types";

interface ProjectCardProps {
  career: Career;
}

export const ProjectCard = ({ career }: ProjectCardProps) => {
  const { period = "", company, role, description, techStack, projectName, durationInMonths, client } = career;

  // Extract all techs from categorized structure
  let allTechs: string[] = [];
  if (Array.isArray(techStack)) {
    allTechs = techStack;
  } else {
    // Assuming techStack is an object if not an array
    allTechs = [
      ...(techStack.language || []),
      ...(techStack.scripts || []),
      ...(techStack.framework || []),
      ...(techStack.designTool || []),
      ...(techStack.stylesheet || []),
      ...(techStack.library || []),
      ...(techStack.versionControl || []),
      ...(techStack.other || []),
    ];

    // Add boolean flags as tags
    if (techStack.responsiveWeb) allTechs.push("반응형웹");
    if (techStack.accessibility) allTechs.push("웹접근성");
    if (techStack.multilingual) allTechs.push("다국어");
  }

  // Random color selection for the left border strip, or deterministically based on id/name
  const colors = ['bg-primary', 'bg-indigo-500', 'bg-teal-500', 'bg-purple-500', 'bg-rose-500', 'bg-amber-500'];
  // Simple deterministic pick
  const colorIndex = (projectName || role).length % colors.length;
  const stripColor = colors[colorIndex];

  // Text color mapping for role/subtitle based on strip color approximation
  const textColorMap: Record<string, string> = {
    'bg-primary': 'text-primary',
    'bg-indigo-500': 'text-indigo-500 dark:text-indigo-400',
    'bg-teal-500': 'text-teal-600 dark:text-teal-400',
    'bg-purple-500': 'text-purple-600 dark:text-purple-400',
    'bg-rose-500': 'text-rose-600 dark:text-rose-400',
    'bg-amber-500': 'text-amber-600 dark:text-amber-400',
  };
  const roleColor = textColorMap[stripColor] || 'text-primary';

  // Badge background color map
  const badgeBgMap: Record<string, string> = {
    'bg-primary': 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
    'bg-indigo-500': 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300',
    'bg-teal-500': 'bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300',
    'bg-purple-500': 'bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
    'bg-rose-500': 'bg-rose-50 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300',
    'bg-amber-500': 'bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
  };
  const badgeClass = badgeBgMap[stripColor] || badgeBgMap['bg-primary'];

  return (
    <article className="bg-surface-light dark:bg-surface-dark rounded-xl p-5 shadow-soft border border-gray-100 dark:border-gray-700/50 relative overflow-hidden group hover:shadow-md transition-all duration-300">
      <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${stripColor}`}></div>
      <div className="flex justify-between items-start mb-2 pl-2">
        <div>
          <h3 className="text-base font-bold text-gray-900 dark:text-white leading-tight">{projectName || role}</h3>
          <p className={`text-xs ${roleColor} font-medium mt-1`}>{role}</p>
        </div>
        <div className="text-right">
          <span className="block text-xs font-bold text-gray-900 dark:text-gray-100">{period}</span>
          <span className="block text-[10px] text-text-muted-light dark:text-text-muted-dark">{durationInMonths || "Duration N/A"}</span>
        </div>
      </div>
      <div className="pl-2 mb-3">
        <div className="flex items-center gap-2 text-xs text-text-muted-light dark:text-text-muted-dark mb-2">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">business</span>
            {client || company}
          </span>
          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
          <span>{company === client ? 'In-house' : 'SI Project'}</span>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>
      <div className="pl-2 flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-gray-100 dark:border-gray-700 border-dashed">
        {allTechs.map((tech, idx) => (
          <span key={`${tech}-${idx}`} className={`px-2 py-0.5 rounded text-[10px] font-medium ${badgeClass}`}>
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
};
