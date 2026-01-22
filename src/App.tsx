import { Header } from './components/Header';
import { ProfileCard } from './components/ProfileCard';
import { StatsCard } from './components/StatsCard';
import { SkillsCard } from './components/SkillsCard';
import { Filters } from './components/Filters';
import { ProjectsTable } from './components/ProjectsTable';
import { useMemo, useState } from 'react';
import { careerData } from './data/mockData';
import type { Career } from './types';
import { getCoreRowModel, getPaginationRowModel, useReactTable, getFilteredRowModel } from '@tanstack/react-table';
import type { ColumnDef } from '@tanstack/react-table';

function App() {
  const [pagination, setPagination] = useState({
    pageIndex: 0, //initial page index
    pageSize: 5, //default page size
  });
  const [globalFilter, setGlobalFilter] = useState('');

  const columns = useMemo<ColumnDef<Career>[]>(
    () => [
      {
        accessorKey: 'projectName',
        header: 'Project Name',
        cell: (info) => {
          const { original } = info.row;
          return (
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-white border border-light-gray-border flex items-center justify-center mr-4 group-hover:border-primary transition-colors">
                <span className="material-symbols-outlined text-xl text-medium-gray group-hover:text-primary">
                  {original.icon || 'dashboard'}
                </span>
              </div>
              <div>
                <div className="text-sm font-bold text-deep-charcoal tracking-tight">{original.projectName}</div>
                <div className="text-[9px] font-bold text-medium-gray uppercase">{original.projectType}</div>
              </div>
            </div>
          );
        }
      },
      {
        accessorKey: 'duration',
        header: 'Duration',
        cell: (info) => {
            const { original } = info.row;
            return (
                <div>
                    <div className="text-xs font-medium text-deep-charcoal">{original.duration}</div>
                    <div className="text-[9px] text-medium-gray">{original.durationInMonths} Mos</div>
                </div>
            )
        }
      },
      {
        accessorKey: 'client',
        header: 'Client',
      },
      {
        accessorKey: 'company',
        header: 'Company',
        cell: (info) => (
            <span className="px-2 py-0.5 inline-flex text-[9px] font-bold uppercase tracking-widest rounded bg-silver-bg text-medium-gray border border-light-gray-border">
                {info.getValue() as string}
            </span>
        )
      },
      {
        accessorKey: 'role',
        header: 'Role',
        cell: (info) => {
            const { original } = info.row;
            return (
                <div className="flex items-center gap-2 text-xs text-medium-gray">
                    <span className={`w-1.5 h-1.5 rounded-full ${original.roleType === 'lead' ? 'bg-sky-blue' : 'bg-light-gray-border'}`}></span>
                    {info.getValue() as string}
                </div>
            )
        }
      },
      {
        accessorKey: 'osEnv',
        header: 'OS/Env',
        cell: info => <div className="text-[9px] font-bold text-medium-gray/60 uppercase tracking-widest">{info.getValue() as string}</div>
      },
      {
        accessorKey: 'techStack',
        header: 'Tech Stack',
        cell: (info) => (
          <div className="flex flex-wrap gap-2">
            {(info.getValue() as string[]).map((tech) => (
              <span key={tech} className="px-2 py-0.5 rounded text-[8px] font-bold bg-white border border-light-gray-border text-medium-gray uppercase">
                {tech}
              </span>
            ))}
          </div>
        ),
      },
    ],
    []
  );

  const table = useReactTable({
    data: careerData,
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
    <div className="font-display antialiased">
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
        <section className="space-y-6">
          <Filters globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
          <ProjectsTable table={table} />
        </section>
      </main>
    </div>
  );
}

export default App;
