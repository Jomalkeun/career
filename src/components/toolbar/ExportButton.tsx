
export const ExportButton = () => {
  return (
    <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-blue-600 text-white rounded-lg shadow-sm transition-all active:scale-[0.98] group ml-2">
      <span className="material-symbols-outlined text-[18px] group-hover:animate-bounce">
        download
      </span>
      <span className="text-sm font-bold">Export PDF</span>
    </button>
  );
};
