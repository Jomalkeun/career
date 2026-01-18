import { Badge } from "./ui/Badge";

interface TagFilterProps {
  allTags: string[];
  selectedTags: string[];
  onToggleTag: (tag: string) => void;
}

export const TagFilter = ({ allTags, selectedTags, onToggleTag }: TagFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {allTags.map((tag) => (
        <Badge
          key={tag}
          variant="secondary"
          active={selectedTags.includes(tag)}
          onClick={() => onToggleTag(tag)}
          className="transition-all active:scale-95"
        >
          {tag}
        </Badge>
      ))}
    </div>
  );
};
