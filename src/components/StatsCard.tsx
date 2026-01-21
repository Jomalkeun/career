interface StatsCardProps {
  icon: string;
  label: string;
  value: string;
  accent: 'sky' | 'charcoal' | 'gold';
}

export function StatsCard({ icon, label, value, accent }: StatsCardProps) {
  const accentClasses = {
    sky: 'hover:border-sky-blue group-hover:text-sky-blue',
    charcoal: 'hover:border-soft-charcoal group-hover:text-soft-charcoal',
    gold: 'hover:border-soft-gold group-hover:text-soft-gold',
  };

  return (
    <div className={`card-surface p-6 flex flex-col items-center justify-center group transition-colors ${accentClasses[accent]}`}>
      <span className="material-symbols-outlined text-medium-gray group-hover:text-inherit text-3xl mb-2 transition-all">
        {icon}
      </span>
      <div className="text-3xl font-bold text-deep-charcoal tracking-tight">{value}</div>
      <div className="text-[9px] uppercase tracking-widest text-medium-gray font-bold mt-1">{label}</div>
    </div>
  );
}
