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
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-light-gray-border px-6 py-4 flex justify-center items-center">
      <div className="w-full max-w-[1440px] flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-deep-charcoal flex items-center justify-center text-white font-bold text-lg">
            JS
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-deep-charcoal text-xl tracking-tight leading-none">Jane Smith</span>
            <span className="text-[10px] text-medium-gray font-semibold tracking-widest uppercase">Portfolio Dashboard</span>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-medium-gray">
          <a className="hover:text-deep-charcoal transition-colors" href="#">Overview</a>
          <a className="text-deep-charcoal border-b-2 border-primary pb-1" href="#">Projects</a>
          <a className="hover:text-deep-charcoal transition-colors" href="#">Skills</a>
          <a className="hover:text-deep-charcoal transition-colors" href="#">Experience</a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="px-6 py-2.5 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:shadow-glow-sapphire transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px]">download</span>
            Download CV
          </button>
          <button className="p-2 rounded-full text-medium-gray hover:bg-deep-charcoal/5 transition-colors" onClick={toggleTheme}>
            <span className="material-symbols-outlined text-xl">{isDarkMode ? 'light_mode' : 'dark_mode'}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
