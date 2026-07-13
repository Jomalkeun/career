import type { RoleCode } from "../types";
import { formatRole } from "../constants/roles";

interface RoleBadgesProps {
  roles: RoleCode[];
  compact?: boolean;
}

export const RoleBadges = ({ roles, compact = false }: RoleBadgesProps) => (
  <div className="flex flex-wrap gap-1.5">
    {roles.map((role) => (
      <span
        key={role}
        className={`inline-flex items-center rounded-full font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 ${
          compact ? "px-2 py-0.5 text-[10px]" : "px-2.5 py-0.5 text-xs"
        }`}
      >
        {formatRole(role)}
      </span>
    ))}
  </div>
);
