import { Header } from './components/Header';
import { ProfileSection } from './components/ProfileSection';
import { useMemo, useState } from 'react';
import { careerData } from './data/careerData';
import { getCoreRowModel, useReactTable, getFilteredRowModel, getSortedRowModel, type SortingState } from '@tanstack/react-table';
import { CareerToolbar } from './components/CareerToolbar';
import { CareerFilters } from './components/CareerFilters';
import { CareerTable } from './components/CareerTable';
import { CardView } from './components/CardView';
import { ListView } from './components/ListView';
import { useCareerColumns } from './hooks/useCareerColumns';

function App() {
  const [globalFilter, setGlobalFilter] = useState('');
  const [viewMode, setViewMode] = useState<"table" | "card" | "list">("table");
  const [showFilters, setShowFilters] = useState(false);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  // Extract unique technologies from careerData (Pinned + Top 5 total)
  const availableTechs = useMemo(() => {
    const pinned = ["Vue.js", "React.js"];
    const counts: Record<string, number> = {};

    careerData.forEach(item => {
      item.techStack.forEach(tech => {
        counts[tech] = (counts[tech] || 0) + 1;
      });
    });

    // Sort others by frequency
    const others = Object.entries(counts)
      .filter(([tech]) => !pinned.includes(tech))
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .map(([tech]) => tech);

    // Combine pinned and top others, limited to 5
    return [...pinned, ...others].slice(0, 8);
  }, []);

  // Extract all unique years from careerData
  const availableYears = useMemo(() => {
    const years = new Set<string>();
    careerData.forEach(item => {
      const yearMatches = item.duration.match(/\d{4}/g);
      if (yearMatches) {
        yearMatches.forEach(y => years.add(y));
      }
    });
    return Array.from(years).sort((a, b) => b.localeCompare(a)); // Descending years
  }, []);

  // Filter logic
  const filteredData = useMemo(() => {
    let data = careerData;

    // Global text filter
    if (globalFilter) {
      const lowerFilter = globalFilter.toLowerCase();
      data = data.filter((item) =>
        Object.values(item).some(
          (val) =>
            typeof val === "string" && val.toLowerCase().includes(lowerFilter)
        )
      );
    }

    // Tech stack filter
    if (selectedTech) {
      data = data.filter(item => item.techStack.includes(selectedTech));
    }

    // Year filter
    if (selectedYear) {
      data = data.filter(item => item.duration.includes(selectedYear));
    }

    return data;
  }, [globalFilter, selectedTech, selectedYear]);

  const columns = useCareerColumns();

  const table = useReactTable({
    data: filteredData,
    columns,
    state: {
      globalFilter,
      sorting,
    },
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="font-display antialiased bg-background-light dark:bg-background-dark min-h-screen">
      <Header />
      <main className="px-6 py-8 space-y-8 max-w-[1440px] mx-auto">
        <ProfileSection
          selectedTech={selectedTech}
          onSelectTech={setSelectedTech}
        />

        <section className="space-y-0 rounded-xl overflow-hidden border border-border-light dark:border-border-dark shadow-sm bg-surface-light dark:bg-surface-dark">
          <CareerToolbar
            globalFilter={globalFilter}
            setGlobalFilter={setGlobalFilter}
            viewMode={viewMode}
            setViewMode={setViewMode}
            onToggleFilters={() => setShowFilters(!showFilters)}
            selectedYear={selectedYear}
            setSelectedYear={setSelectedYear}
            availableYears={availableYears}
          />
          {showFilters && (
            <CareerFilters
              techs={availableTechs}
              selectedTech={selectedTech}
              onSelectTech={setSelectedTech}
            />
          )}


          <div className="p-0">
            {viewMode === "table" ? (
              <CareerTable table={table} />
            ) : viewMode === "card" ? (
              <div className="p-6">
                <CardView rows={table.getRowModel().rows} />
              </div>
            ) : (
              <div className="p-6">
                <ListView rows={table.getRowModel().rows} />
              </div>
            )}

          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
