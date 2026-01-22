
interface SkillsDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SkillsDetailModal = ({ isOpen, onClose }: SkillsDetailModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm transition-opacity" onClick={onClose}>
      <div 
        className="w-full sm:max-w-md h-full bg-white dark:bg-[#0d141c] shadow-2xl pointer-events-auto flex flex-col animate-slide-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white/90 dark:bg-[#0d141c]/90 backdrop-blur-md px-6 py-4 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
          <h2 className="font-bold text-lg dark:text-white text-[#111418]">Full Skill Proficiency</h2>
          <button 
            onClick={onClose}
            className="size-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto hide-scrollbar px-6 space-y-8 py-6">
          <section>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary rounded-full"></span>
              Language & Script
            </h2>
            <div className="grid grid-cols-1 gap-3">
              <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-50 dark:bg-slate-700 flex items-center justify-center text-xl">
                    <i className="fa-brands fa-js text-[#F7DF1E]"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">ES6+ JavaScript</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Advanced Proficiency</div>
                  </div>
                </div>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-200 dark:bg-slate-600"></div>
                </div>
              </div>
              <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-50 dark:bg-slate-700 flex items-center justify-center text-xl">
                    <span className="font-bold text-blue-600 dark:text-blue-400 text-sm">jQ</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">jQuery</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Expert Proficiency</div>
                  </div>
                </div>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
              </div>
              <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-50 dark:bg-slate-700 flex items-center justify-center text-xl">
                    <i className="fa-brands fa-react text-[#61DAFB]"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">React.js</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Intermediate</div>
                  </div>
                </div>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-200 dark:bg-slate-600"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-200 dark:bg-slate-600"></div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary rounded-full"></span>
              Publishing
            </h2>
            <div className="grid grid-cols-1 gap-3">
              <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-50 dark:bg-slate-700 flex items-center justify-center text-xl">
                    <i className="fa-solid fa-universal-access text-slate-600 dark:text-slate-300"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">Web Accessibility</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Expert Proficiency</div>
                  </div>
                </div>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
              </div>
              <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-50 dark:bg-slate-700 flex items-center justify-center text-xl">
                    <i className="fa-solid fa-mobile-screen text-slate-600 dark:text-slate-300"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">Responsive Web</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Expert Proficiency</div>
                  </div>
                </div>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary rounded-full"></span>
              Design & Tools
            </h2>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-surface-light dark:bg-surface-dark p-3 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col gap-2">
                <div className="flex justify-between items-start">
                  <i className="fa-brands fa-figma text-2xl text-[#F24E1E]"></i>
                  <div className="flex gap-0.5 mt-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  </div>
                </div>
                <div className="font-medium text-sm text-slate-900 dark:text-white">Figma</div>
              </div>
              <div className="bg-surface-light dark:bg-surface-dark p-3 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col gap-2">
                <div className="flex justify-between items-start">
                  <i className="fa-brands fa-git-alt text-2xl text-[#F05032]"></i>
                  <div className="flex gap-0.5 mt-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  </div>
                </div>
                <div className="font-medium text-sm text-slate-900 dark:text-white">Git</div>
              </div>
              <div className="bg-surface-light dark:bg-surface-dark p-3 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col gap-2">
                <div className="flex justify-between items-start">
                  <div className="text-xl font-bold text-[#31A8FF] dark:text-[#31A8FF]">Ps</div>
                  <div className="flex gap-0.5 mt-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  </div>
                </div>
                <div className="font-medium text-sm text-slate-900 dark:text-white">Photoshop</div>
              </div>
              <div className="bg-surface-light dark:bg-surface-dark p-3 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col gap-2">
                <div className="flex justify-between items-start">
                  <div className="text-xl font-bold text-[#FF9A00] dark:text-[#FF9A00]">Ai</div>
                  <div className="flex gap-0.5 mt-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  </div>
                </div>
                <div className="font-medium text-sm text-slate-900 dark:text-white">Illustrator</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
