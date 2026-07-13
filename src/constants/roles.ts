import type { RoleCode } from "../types";

export const ROLE_DEFINITIONS: ReadonlyArray<{
  code: RoleCode;
  label: string;
}> = [
  { code: "PM", label: "" },
  { code: "PL", label: "" },
  { code: "A", label: "분석" },
  { code: "P", label: "설계" },
  { code: "D", label: "개발" },
  { code: "O", label: "운영" },
  { code: "E", label: "교육" },
  { code: "W", label: "웹디자인" },
  { code: "SE", label: "서버관리네트웍" },
];

const roleLabelMap = Object.fromEntries(
  ROLE_DEFINITIONS.map(({ code, label }) => [code, label]),
) as Record<RoleCode, string>;

export const formatRole = (code: RoleCode) =>
  roleLabelMap[code] ? `${code} ${roleLabelMap[code]}` : code;

export const formatRoles = (roles: RoleCode[]) => roles.map(formatRole).join(", ");
