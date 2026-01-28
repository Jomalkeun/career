
import { SearchBar } from './toolbar/SearchBar';
import { ViewToggle } from './toolbar/ViewToggle';
import { ToolbarButton } from './toolbar/ToolbarButton';
import { ExportButton } from './toolbar/ExportButton';
import { YearSelect } from './toolbar/YearSelect';

interface CareerToolbarProps {
  globalFilter: string;
  setGlobalFilter: (value: string) => void;
  viewMode: 'table' | 'card' | 'list';
  setViewMode: (mode: 'table' | 'card' | 'list') => void;
  onToggleFilters: () => void;
  selectedYear: string | null;
  setSelectedYear: (year: string | null) => void;
  availableYears: string[];
}

export const CareerToolbar = ({
  globalFilter,
  setGlobalFilter,
  viewMode,
  setViewMode,
  onToggleFilters,
  selectedYear,
  setSelectedYear,
  availableYears,
}: CareerToolbarProps) => {
  return (
    <div className="bg-surface-light dark:bg-surface-dark border-b border-border-light dark:border-border-dark px-6 py-4 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 z-40 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] shrink-0">
      <SearchBar
        value={globalFilter}
        onChange={setGlobalFilter}
        placeholder="Search projects, clients, or skills..."
      />
      <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
        <YearSelect
          years={availableYears}
          selectedYear={selectedYear}
          onChange={setSelectedYear}
        />
        <ToolbarButton
          icon="filter_list"
          label="Filter"
          onClick={onToggleFilters}
        />
        {/* <ToolbarButton 
          icon="sort" 
          label="Sort" 
        /> */}
        <div className="h-6 w-px bg-slate-300 dark:bg-slate-700 mx-1 hidden lg:block"></div>
        <ViewToggle viewMode={viewMode} setViewMode={setViewMode} />
        <ExportButton />
      </div>
    </div>
  );
};
