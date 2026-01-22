import { useState, useEffect } from 'react';

export function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-light-gray-border dark:border-slate-800 px-6 py-4 flex justify-center items-center transition-colors duration-300">
      <div className="w-full max-w-[1440px] flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-deep-charcoal dark:bg-slate-800 flex items-center justify-center text-white font-bold text-lg">
            J
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-deep-charcoal dark:text-white text-xl tracking-tight leading-none">Jo Malk Eun</span>
            <span className="text-[10px] text-medium-gray dark:text-slate-400 font-semibold tracking-widest uppercase">Portfolio Dashboard</span>
          </div>
        </div>
  
        <div className="flex items-center gap-4">
          <button className="p-2.5 md:px-6 md:py-2.5 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:shadow-glow-sapphire transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px]">download</span>
            <span className="hidden md:inline">Download CV</span>
          </button>
          <button className="p-2 rounded-full text-medium-gray hover:bg-deep-charcoal/5 transition-colors" onClick={toggleTheme}>
            <span className="material-symbols-outlined text-xl">{isDarkMode ? 'light_mode' : 'dark_mode'}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
