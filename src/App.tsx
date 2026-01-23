import { Header } from './components/Header';
import { ProfileSection } from './components/ProfileSection';
import { useMemo, useState } from 'react';
import { careerData } from './data/careerData';
import { getCoreRowModel, getPaginationRowModel, useReactTable, getFilteredRowModel } from '@tanstack/react-table';
import { CareerToolbar } from './components/CareerToolbar';
import { CareerFilters } from './components/CareerFilters';
import { CareerTable } from './components/CareerTable';
import { CardView } from './components/CardView';
import { ListView } from './components/ListView';
import { useCareerColumns } from './hooks/useCareerColumns';

function App() {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });
  const [globalFilter, setGlobalFilter] = useState('');
  const [viewMode, setViewMode] = useState<"table" | "card" | "list">("table");
  const [showFilters, setShowFilters] = useState(false);

  // Filter logic
  const filteredData = useMemo(() => {
    let data = careerData;
    if (globalFilter) {
      const lowerFilter = globalFilter.toLowerCase();
      data = data.filter((item) =>
        Object.values(item).some(
          (val) =>
            typeof val === "string" && val.toLowerCase().includes(lowerFilter)
        )
      );
    }
    return data;
  }, [globalFilter]);

  const columns = useCareerColumns();

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onPaginationChange: setPagination,
    onGlobalFilterChange: setGlobalFilter,
    state: {
      pagination,
      globalFilter,
    },
  });

  return (
    <div className="font-display antialiased bg-background-light dark:bg-background-dark min-h-screen">
      <Header />
      <main className="px-6 py-8 space-y-8 max-w-[1440px] mx-auto">
        <ProfileSection />

        <section className="space-y-0 rounded-xl overflow-hidden border border-border-light dark:border-border-dark shadow-sm bg-surface-light dark:bg-surface-dark">
          <CareerToolbar
            globalFilter={globalFilter}
            setGlobalFilter={setGlobalFilter}
            viewMode={viewMode}
            setViewMode={setViewMode}
            onToggleFilters={() => setShowFilters(!showFilters)}
          />
          {showFilters && <CareerFilters />}


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
