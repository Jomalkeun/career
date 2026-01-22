
interface ContributionListProps {
  description?: string;
}

export const ContributionList = ({ description = "" }: ContributionListProps) => {
  return (
    <section>
      <h3 className="text-xs font-bold text-[#637588] dark:text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
        <span className="material-symbols-outlined text-sm">terminal</span> Core Contribution
      </h3>
      <ul className="space-y-3">
         <li className="flex gap-3">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
            <p className="text-sm text-[#3e4d5b] dark:text-gray-300 leading-relaxed">
                {description}
            </p>
        </li>
         {/* Mock contributions since data structure doesn't support array of contributions yet */}
         <li className="flex gap-3">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
          <p className="text-sm text-[#3e4d5b] dark:text-gray-300 leading-relaxed">Engineered the micro-frontend architecture allowing 5 independent teams to deploy concurrently.</p>
        </li>
        <li className="flex gap-3">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
          <p className="text-sm text-[#3e4d5b] dark:text-gray-300 leading-relaxed">Reduced average API latency by 40% through strategic implementation of Redis caching layers.</p>
        </li>
      </ul>
    </section>
  );
};
