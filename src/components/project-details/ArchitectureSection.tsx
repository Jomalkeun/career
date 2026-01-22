
export const ArchitectureSection = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900/50 p-5 rounded-2xl border border-gray-100 dark:border-gray-800">
      <h3 className="text-xs font-bold text-[#637588] dark:text-gray-400 uppercase tracking-widest mb-3">Architecture & Challenges</h3>
      <p className="text-sm text-[#3e4d5b] dark:text-gray-300 leading-relaxed mb-3">
        The primary hurdle was maintaining strict financial compliance while scaling real-time transaction processing. We transitioned from a monolithic event-bus to an AWS EventBridge driven architecture.
      </p>
      <p className="text-sm text-[#3e4d5b] dark:text-gray-300 leading-relaxed">
        This allowed us to decouple critical services, ensuring that data consistency was maintained even during peak traffic periods of 10,000+ requests per second.
      </p>
    </section>
  );
};
