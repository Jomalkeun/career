import type { Table } from '@tanstack/react-table';
import type { Career } from '../types';
import { useState } from 'react';
import { ProjectDetailsModal } from './ProjectDetailsModal';
import { CareerTableHeader } from './CareerTableHeader';
import { CareerTableRow } from './CareerTableRow';

interface CareerTableProps {
  table: Table<Career>;
  showDescriptionAsRow: boolean;
}

export const CareerTable = ({ table, showDescriptionAsRow }: CareerTableProps) => {
  const [selectedProject, setSelectedProject] = useState<Career | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (project: Career) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <div className="flex-1 overflow-x-auto custom-scrollbar relative">
        <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700 text-sm">
          <CareerTableHeader table={table} />
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700 bg-white dark:bg-surface-dark">
            {table.getRowModel().rows.map((row) => (
              <CareerTableRow
                key={row.id}
                career={row.original}
                onOpenModal={handleOpenModal}
                showDescriptionAsRow={showDescriptionAsRow}
              />
            ))}
          </tbody>
        </table>
      </div>
      <ProjectDetailsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </>
  );
};
