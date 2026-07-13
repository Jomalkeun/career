import type { EmploymentType } from '../types';

interface EmploymentBadgeProps {
  type: EmploymentType;
  compact?: boolean;
}

export const EmploymentBadge = ({ type, compact = false }: EmploymentBadgeProps) => (
  <span className={`inline-flex rounded-full font-semibold ${
    compact ? 'px-2 py-0.5 text-[10px]' : 'px-2.5 py-0.5 text-xs'
  } ${
    type === '정규직'
      ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300'
      : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300'
  }`}>
    {type}
  </span>
);
