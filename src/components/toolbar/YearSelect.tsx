
import { useState, useRef, useEffect } from 'react';

interface YearSelectProps {
    years: string[];
    selectedYear: string | null;
    onChange: (year: string | null) => void;
}

export const YearSelect = ({ years, selectedYear, onChange }: YearSelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (year: string | null) => {
        onChange(year);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center gap-2 pl-3 pr-2 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all h-[38px] min-w-[120px] focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
                <span className="material-symbols-outlined text-[18px] text-slate-400">
                    calendar_today
                </span>
                <span className="flex-1 text-left">{selectedYear || 'All Years'}</span>
                <span className={`material-symbols-outlined text-[20px] text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                    arrow_drop_down
                </span>
            </button>

            {isOpen && (
                <div className="absolute left-0 mt-2 w-full min-w-[140px] rounded-lg bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 z-50 overflow-hidden transform origin-top animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="py-1 max-h-60 overflow-y-auto custom-scrollbar">
                        <button
                            onClick={() => handleSelect(null)}
                            className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors ${!selectedYear ? 'text-primary font-semibold bg-primary/5' : 'text-slate-600 dark:text-slate-300'}`}
                        >
                            All Years
                        </button>
                        {years.map((year) => (
                            <button
                                key={year}
                                onClick={() => handleSelect(year)}
                                className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors ${selectedYear === year ? 'text-primary font-semibold bg-primary/5' : 'text-slate-600 dark:text-slate-300'}`}
                            >
                                {year}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
