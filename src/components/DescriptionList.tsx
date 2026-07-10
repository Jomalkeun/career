interface DescriptionListProps {
  description?: string[] | string;
  compact?: boolean;
}

export const DescriptionList = ({ description, compact = false }: DescriptionListProps) => {
  const items = (Array.isArray(description) ? description : [description]).filter(
    (item): item is string => Boolean(item?.trim()),
  );

  if (items.length === 0) return null;

  return (
    <ul className={compact ? "space-y-1" : "space-y-1.5"}>
      {items.map((item, index) => (
        <li key={`${item}-${index}`} className="flex items-start gap-2 leading-relaxed">
          <span className="mt-[0.65em] h-1 w-1 shrink-0 rounded-full bg-slate-400 dark:bg-slate-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};
