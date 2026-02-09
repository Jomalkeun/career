import type { Career, LanguageCategorized, ToolCategorized } from '../types';

/**
 * Normalizes a language or tool field into a flat string array.
 * Handles both string[] and categorized object formats.
 */
export const getFlatTechList = (
  items: string[] | LanguageCategorized | ToolCategorized | undefined
): string[] => {
  if (!items) return [];
  if (Array.isArray(items)) return items;

  // It's an object, extract all array values
  return Object.values(items).flat().filter((item): item is string => typeof item === 'string');
};

/**
 * Extracts all unique technologies from career data for filtering.
 * Returns an array of technology names sorted by frequency (pinned items first).
 */
export const getAvailableTechs = (data: Career[]): string[] => {
  const pinned = ["Vue.js", "React.js"];
  const counts: Record<string, number> = {};

  data.forEach(item => {
    // Collect from both language and tool fields
    const allTechs = [
      ...getFlatTechList(item.language),
      ...getFlatTechList(item.tool)
    ];

    allTechs.forEach(tech => {
      counts[tech] = (counts[tech] || 0) + 1;
    });
  });

  // Sort others by frequency then alphabetically
  const others = Object.entries(counts)
    .filter(([tech]) => !pinned.includes(tech))
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([tech]) => tech);

  // Return pinned + top 8 others (or all if needed, here limiting to mimic previous behavior)
  // The previous logic sliced to 8, we can keep that or return all.
  // Returning top 15 to be safe
  return [...pinned, ...others].slice(0, 15);
};
