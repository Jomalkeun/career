import { ProfileCard } from './ProfileCard';
import { SkillsCard } from './SkillsCard';
import { CareerStats } from './CareerStats';

export const ProfileSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      <div className="lg:col-span-4">
        <ProfileCard />
      </div>
      <div className="lg:col-span-2 flex flex-col h-full">
        <CareerStats />
      </div>
      <div className="lg:col-span-6 flex flex-col h-full">
        <SkillsCard />
      </div>
    </section>
  );
};
