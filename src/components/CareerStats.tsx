import { StatsCard } from './StatsCard';

export const CareerStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <StatsCard icon="history" label="Years Experience" value="15+" accent="sky" />
      <StatsCard icon="folder_open" label="Projects Delivered" value="80+" accent="charcoal" />
      <StatsCard icon="emoji_events" label="Industry Awards" value="12" accent="gold" />
    </div>
  );
};
