import { LayoutGrid, List } from "lucide-react";
import { Button } from "./ui/Button";

interface ViewToggleProps {
  viewMode: "table" | "card";
  onToggle: (mode: "table" | "card") => void;
}

export const ViewToggle = ({ viewMode, onToggle }: ViewToggleProps) => {
  return (
    <div className="flex bg-gray-100 p-1 rounded-lg">
      <Button
        variant={viewMode === "table" ? "primary" : "ghost"}
        size="sm"
        onClick={() => onToggle("table")}
        className={viewMode === "table" ? "shadow-sm" : "hover:bg-gray-200"}
        title="List View"
      >
        <List className="w-4 h-4" />
      </Button>
      <Button
        variant={viewMode === "card" ? "primary" : "ghost"}
        size="sm"
        onClick={() => onToggle("card")}
        className={viewMode === "card" ? "shadow-sm" : "hover:bg-gray-200"}
        title="Grid View"
      >
        <LayoutGrid className="w-4 h-4" />
      </Button>
    </div>
  );
};
