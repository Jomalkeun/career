import { Header } from './components/Header';
import { ProfileSection } from './components/ProfileSection';
import { useMemo, useState } from 'react';
import { careerData } from './data/careerData';
import { getCoreRowModel, useReactTable, getFilteredRowModel, getSortedRowModel, type SortingState } from '@tanstack/react-table';
import { CareerToolbar } from './components/CareerToolbar';
import { CareerTable } from './components/CareerTable';
import { CardView } from './components/CardView';
import { ListView } from './components/ListView';
import { useCareerColumns } from './hooks/useCareerColumns';
import { CareerFilters } from './components/toolbar/CareerFilters';

function App() {
  const [globalFilter, setGlobalFilter] = useState('');
  const [viewMode, setViewMode] = useState<"table" | "card" | "list">("table");
  const [showFilters, setShowFilters] = useState(false);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [showDescriptionAsRow, setShowDescriptionAsRow] = useState(true);

  // New states for advanced filters
  const [selectedRoleTypes, setSelectedRoleTypes] = useState<string[]>([]);
  const [selectedPhases, setSelectedPhases] = useState<string[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

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

  const availablePhases = useMemo(() => {
    return Array.from(new Set(careerData.map(item => item.phase).filter(Boolean))) as string[];
  }, []);

  const availableSkills = useMemo(() => {
    const skills = new Set<string>();
    careerData.forEach(item => {
      const extract = (obj: any) => {
        if (!obj) return;
        if (Array.isArray(obj)) {
          obj.forEach(v => typeof v === 'string' && skills.add(v));
        } else if (typeof obj === 'object') {
          Object.values(obj).forEach(val => extract(val));
        }
      };
      extract(item.language);
      extract(item.tool);
      extract(item.techStack);
    });
    return Array.from(skills).sort();
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

    // Year filter
    if (selectedYear) {
      data = data.filter(item => item.duration.includes(selectedYear));
    }

    // Role Type filter
    if (selectedRoleTypes.length > 0) {
      data = data.filter(item => selectedRoleTypes.includes(item.roleType));
    }

    // Phase filter
    if (selectedPhases.length > 0) {
      data = data.filter(item => item.phase && selectedPhases.includes(item.phase));
    }

    // Skills filter
    if (selectedSkills.length > 0) {
      data = data.filter(item => {
        const itemSkills = new Set<string>();
        const extract = (obj: any) => {
          if (!obj) return;
          if (Array.isArray(obj)) {
            obj.forEach(v => typeof v === 'string' && itemSkills.add(v));
          } else if (typeof obj === 'object') {
            Object.values(obj).forEach(val => extract(val));
          }
        };
        extract(item.language);
        extract(item.tool);
        extract(item.techStack);
        
        return selectedSkills.some(skill => itemSkills.has(skill));
      });
    }

    return data;
  }, [globalFilter, selectedYear, selectedRoleTypes, selectedPhases, selectedSkills]);

  const columns = useCareerColumns(showDescriptionAsRow);

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
      <main className="px-6 py-8 space-y-8 ">
        <section className="max-w-[1440px] mx-auto">
          <ProfileSection />
        </section>

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
            showDescriptionAsRow={showDescriptionAsRow}
            setShowDescriptionAsRow={setShowDescriptionAsRow}
          />
          {showFilters && (
            <CareerFilters
              selectedRoleTypes={selectedRoleTypes}
              setSelectedRoleTypes={setSelectedRoleTypes}
              selectedPhases={selectedPhases}
              setSelectedPhases={setSelectedPhases}
              selectedSkills={selectedSkills}
              setSelectedSkills={setSelectedSkills}
              availablePhases={availablePhases}
              availableSkills={availableSkills}
            />
          )}


          <div className="p-0">
            {viewMode === "table" ? (
              <CareerTable table={table} showDescriptionAsRow={showDescriptionAsRow} />
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
