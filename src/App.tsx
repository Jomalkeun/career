import { Header } from './components/Header';
import { ProfileCard } from './components/ProfileCard';
import { StatsCard } from './components/StatsCard';
import { SkillsCard } from './components/SkillsCard';
import { useMemo, useState } from 'react';
import { careerData } from './data/mockData';
import type { Career } from './types';
import { getCoreRowModel, getPaginationRowModel, useReactTable, getFilteredRowModel } from '@tanstack/react-table';
import type { ColumnDef } from '@tanstack/react-table';
import { CareerToolbar } from './components/CareerToolbar';
import { CareerTable } from './components/CareerTable';
import { CardView } from './components/CardView';

function App() {
  const [pagination, setPagination] = useState({
    pageIndex: 0, 
    pageSize: 10,
  });
  const [globalFilter, setGlobalFilter] = useState('');
  const [viewMode, setViewMode] = useState<"table" | "card">("table");

  // Filter logic similar to CareerBoard
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

  const columns = useMemo<ColumnDef<Career>[]>(
      () => [
        {
          accessorKey: "period",
          header: "Period",
          cell: (info) => <span className="whitespace-nowrap font-medium text-gray-700">{info.getValue() as string}</span>,
        },
        {
          accessorKey: "company",
          header: "Company",
          cell: (info) => <span className="font-bold text-gray-900">{info.getValue() as string}</span>,
        },
        {
          accessorKey: "role",
          header: "Role",
          cell: (info) => <span className="text-blue-600">{info.getValue() as string}</span>,
        },
        {
          accessorKey: "category",
          header: "Category",
        },
        {
          accessorKey: "description",
          header: "Description",
          cell: (info) => <span className="text-gray-600 block min-w-[300px]">{info.getValue() as string}</span>,
        },
        {
          accessorKey: "techStack",
          header: "Tech Stack",
        },
      ],
      []
    );

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
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-4">
            <ProfileCard />
          </div>
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatsCard icon="history" label="Years Experience" value="15+" accent="sky" />
              <StatsCard icon="folder_open" label="Projects Delivered" value="80+" accent="charcoal" />
              <StatsCard icon="emoji_events" label="Industry Awards" value="12" accent="gold" />
            </div>
            <SkillsCard />
          </div>
        </section>
        
        <section className="space-y-0 rounded-xl overflow-hidden border border-border-light dark:border-border-dark shadow-sm bg-surface-light dark:bg-surface-dark">
          <CareerToolbar 
            globalFilter={globalFilter} 
            setGlobalFilter={setGlobalFilter} 
            viewMode={viewMode} 
            setViewMode={setViewMode} 
          />
          
          <div className="p-0">
             {viewMode === "table" ? (
              <CareerTable table={table} />
            ) : (
              <div className="p-6">
                  <CardView rows={table.getRowModel().rows} />
              </div>
            )}
             <div className="p-4 border-t border-border-light dark:border-border-dark flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  Showing <span className="font-bold text-slate-800 dark:text-slate-200">1-{filteredData.length}</span> of <span className="font-bold text-slate-800 dark:text-slate-200">{careerData.length}</span> projects
                </span>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1.5 text-sm rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-400 disabled:opacity-50 cursor-not-allowed shadow-sm" disabled>
                    <span className="material-symbols-outlined text-[16px]">chevron_left</span>
                  </button>
                  <button className="px-3 py-1.5 text-sm font-medium rounded-lg bg-primary text-white shadow-sm ring-2 ring-primary ring-offset-2 dark:ring-offset-slate-900">1</button>
                  <button className="px-3 py-1.5 text-sm rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 shadow-sm transition-colors">
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  </button>
                </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
