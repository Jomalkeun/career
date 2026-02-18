
interface ContributionListProps {
  description?: string[] | string;
}

export const ContributionList = ({ description = "" }: ContributionListProps) => {
  const descriptions = Array.isArray(description) 
    ? description.filter(desc => desc && desc.trim() !== "") 
    : description && description.trim() !== "" ? [description] : [];

  if (descriptions.length === 0) {
    return null;
  }

  return (
    <section>
      <h3 className="text-xs font-bold text-[#637588] dark:text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
        <span className="material-symbols-outlined text-sm">terminal</span> Core Contribution
      </h3>
      <ul className="space-y-3">
        {descriptions.map((desc, index) => (
          <li key={index} className="flex gap-3">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
            <p className="text-sm text-[#3e4d5b] dark:text-gray-300 leading-relaxed">
              {desc}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};
