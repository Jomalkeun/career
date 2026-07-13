import React from 'react';
import type { RoleCode } from '../../types';
import { ROLE_DEFINITIONS } from '../../constants/roles';

interface CareerFiltersProps {
  selectedRoles: RoleCode[];
  setSelectedRoles: (roles: RoleCode[]) => void;
  selectedPhases: string[];
  setSelectedPhases: (phases: string[]) => void;
  selectedSkills: string[];
  setSelectedSkills: (skills: string[]) => void;
  availablePhases: string[];
  availableSkills: string[];
}

export const CareerFilters: React.FC<CareerFiltersProps> = ({
  selectedRoles,
  setSelectedRoles,
  selectedPhases,
  setSelectedPhases,
  selectedSkills,
  setSelectedSkills,
  availablePhases,
  availableSkills,
}) => {
  const toggleSelection = <T extends string,>(
    current: T[],
    set: (v: T[]) => void,
    value: T
  ) => {
    if (current.includes(value)) {
      set(current.filter((item) => item !== value));
    } else {
      set([...current, value]);
    }
  };

  const FilterGroup = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">{title}</h4>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );

  const FilterPill = ({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) => (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors border ${
        selected
          ? 'bg-primary text-white border-primary dark:bg-primary dark:border-primary dark:text-white'
          : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-primary/50 dark:hover:border-primary/50 hover:text-primary dark:hover:text-primary'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="p-6 bg-slate-50 dark:bg-slate-900 border-b border-border-light dark:border-border-dark">
      <div className="max-w-5xl space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FilterGroup title="본인역할">
            {ROLE_DEFINITIONS.map(({ code, label }) => (
              <FilterPill
                key={code}
                label={label ? `${code} ${label}` : code}
                selected={selectedRoles.includes(code)}
                onClick={() => toggleSelection(selectedRoles, setSelectedRoles, code)}
              />
            ))}
          </FilterGroup>

          {availablePhases.length > 0 && (
            <FilterGroup title="Phase">
              {availablePhases.map((phase) => (
                <FilterPill
                  key={phase}
                  label={phase}
                  selected={selectedPhases.includes(phase)}
                  onClick={() => toggleSelection(selectedPhases, setSelectedPhases, phase)}
                />
              ))}
            </FilterGroup>
          )}
        </div>

        {availableSkills.length > 0 && (
          <FilterGroup title="Skills & Tools">
            <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto p-1 rounded-lg">
              {availableSkills.map((skill) => (
                <FilterPill
                  key={skill}
                  label={skill}
                  selected={selectedSkills.includes(skill)}
                  onClick={() => toggleSelection(selectedSkills, setSelectedSkills, skill)}
                />
              ))}
            </div>
          </FilterGroup>
        )}

        {/* Clear Filters Button */}
        {(selectedRoles.length > 0 || selectedPhases.length > 0 || selectedSkills.length > 0) && (
          <div className="pt-2">
            <button
              onClick={() => {
                setSelectedRoles([]);
                setSelectedPhases([]);
                setSelectedSkills([]);
              }}
              className="text-sm text-primary hover:text-primary/80 transition-colors flex items-center gap-1 font-medium"
            >
              <span className="material-symbols-outlined text-[18px]">clear_all</span>
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
