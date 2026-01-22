import { useMemo } from 'react';
import type { ColumnDef } from '@tanstack/react-table';
import type { Career } from '../types';

export const useCareerColumns = () => {
  return useMemo<ColumnDef<Career>[]>(
    () => [
      {
        accessorKey: "period",
        header: "Period",
        cell: (info) => <span className="whitespace-nowrap font-medium text-gray-700">{info.getValue() as string}</span>,
      },
      {
        accessorKey: "company",
        header: "Company",
        cell: (info) => <span className="font-bold text-gray-900">{info.getValue() as string}</span>,
      },
      {
        accessorKey: "role",
        header: "Role",
        cell: (info) => <span className="text-blue-600">{info.getValue() as string}</span>,
      },
      {
        accessorKey: "category",
        header: "Category",
      },
      {
        accessorKey: "description",
        header: "Description",
        cell: (info) => <span className="text-gray-600 block min-w-[300px]">{info.getValue() as string}</span>,
      },
      {
        accessorKey: "techStack",
        header: "Tech Stack",
      },
    ],
    []
  );
};
