
export function SkillsCard() {
  return (
    <div className="card-surface p-8 flex-1">
      <h2 className="text-[10px] font-bold text-medium-gray mb-8 flex items-center gap-3 uppercase tracking-widest">
        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
        Tech Stack Proficiency
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
        <div className="space-y-3">
          <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-medium-gray">
            <span>Frontend (React, Vue, TS)</span>
            <span className="text-deep-charcoal">95%</span>
          </div>
          <div className="w-full bg-silver-bg rounded-full h-1.5 border border-light-gray-border overflow-hidden">
            <div className="bg-sky-blue h-full rounded-full" style={{ width: '95%' }}></div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-medium-gray">
            <span>UI/UX Design (Figma)</span>
            <span className="text-deep-charcoal">85%</span>
          </div>
          <div className="w-full bg-silver-bg rounded-full h-1.5 border border-light-gray-border overflow-hidden">
            <div className="bg-soft-charcoal h-full rounded-full" style={{ width: '85%' }}></div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-medium-gray">
            <span>Backend (Node, SQL)</span>
            <span className="text-deep-charcoal">60%</span>
          </div>
          <div className="w-full bg-silver-bg rounded-full h-1.5 border border-light-gray-border overflow-hidden">
            <div className="bg-primary h-full rounded-full" style={{ width: '60%' }}></div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-medium-gray">
            <span>DevOps &amp; Optimization</span>
            <span className="text-deep-charcoal">90%</span>
          </div>
          <div className="w-full bg-silver-bg rounded-full h-1.5 border border-light-gray-border overflow-hidden">
            <div className="bg-soft-gold h-full rounded-full" style={{ width: '90%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
