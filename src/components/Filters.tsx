interface FiltersProps {
  globalFilter: string;
  setGlobalFilter: (filter: string) => void;
}

export function Filters({ globalFilter, setGlobalFilter }: FiltersProps) {
  return (
    <div className="card-surface p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-full max-w-md">
          <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-medium-gray text-[20px]">search</span>
          </span>
          <input
            className="block w-full pl-11 pr-4 py-2.5 border border-light-gray-border rounded-xl bg-white text-deep-charcoal placeholder-medium-gray/50 focus:ring-1 focus:ring-primary/30 focus:border-primary/50 text-sm"
            placeholder="Search Projects..."
            type="text"
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
          />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button className="inline-flex items-center px-4 py-2 border border-light-gray-border text-[10px] font-bold uppercase tracking-widest rounded-xl text-medium-gray bg-white hover:bg-silver-bg transition-colors">
          <span className="material-symbols-outlined text-[18px] mr-2">filter_list</span>
          Filter
        </button>
        <button className="inline-flex items-center px-6 py-2 border border-light-gray-border text-[10px] font-bold uppercase tracking-widest rounded-xl text-medium-gray bg-white hover:border-medium-gray transition-all">
          <span className="material-symbols-outlined text-[18px] mr-2">picture_as_pdf</span>
          Export
        </button>
      </div>
    </div>
  );
}
