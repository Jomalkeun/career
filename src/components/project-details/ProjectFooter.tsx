
export const ProjectFooter = () => {
  return (
    <div className="sticky bottom-0 bg-white dark:bg-[#0d141c] border-t border-gray-100 dark:border-gray-800 p-6 grid grid-cols-2 gap-3">
      <a className="flex items-center justify-center gap-2 h-12 bg-primary text-white font-bold rounded-xl shadow-md hover:bg-primary/90 transition-all" href="#">
        <span className="material-symbols-outlined text-[20px]">language</span>
        <span>Live Demo</span>
      </a>
      <a className="flex items-center justify-center gap-2 h-12 bg-gray-100 dark:bg-gray-800 text-[#111418] dark:text-white font-bold rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all" href="#">
        <span className="material-symbols-outlined text-[20px]">code</span>
        <span>GitHub</span>
      </a>
    </div>
  );
};
