import { useMemo } from 'react';
import { StatsCard } from './StatsCard';
import { careerData } from '../data/careerData';

export const CareerStats = () => {
  const stats = useMemo(() => {
    // 1. Years Experience Calculation
    const startDate = new Date(2013, 1); // 2013-02
    const today = new Date();
    let years = today.getFullYear() - startDate.getFullYear();
    const monthDiff = today.getMonth() - startDate.getMonth();
    if (monthDiff < 0) {
      years--;
    }
    const yearsExp = `${years + 1}+`;

    // 2. Project Count Calculation
    const projectCount = `${careerData.length}+`;

    return { yearsExp, projectCount };
  }, []);

  return (
    <div className="grid grid-cols-1 gap-6 h-full">
      <StatsCard icon="history" label="Years Experience" value={stats.yearsExp} accent="sky" />
      <StatsCard icon="emoji_events" label="Projects Delivered" value={stats.projectCount} accent="charcoal" />
    </div>
  );
};
