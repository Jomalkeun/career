import clsx from "clsx";
import type { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "secondary";
  className?: string;
  onClick?: () => void;
  active?: boolean;
}

export const Badge = ({ className, variant = "default", active, onClick, ...props }: BadgeProps) => {
  const baseStyles = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";
  
  const variants = {
    default: "bg-blue-100 text-blue-800 hover:bg-blue-200",
    secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200",
    outline: "border border-gray-200 text-gray-800",
  };

  const activeStyles = active ? "ring-2 ring-blue-500 ring-offset-1 bg-blue-200" : "";
  const cursorStyles = onClick ? "cursor-pointer" : "cursor-default";

  return (
    <span
      className={twMerge(clsx(baseStyles, variants[variant], activeStyles, cursorStyles, className))}
      onClick={onClick}
      {...props}
    />
  );
};
