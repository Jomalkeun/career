
import { Modal } from './common/Modal';
import { ProjectOverview } from './project-details/ProjectOverview';
import { TechStackList } from './project-details/TechStackList';
import { ContributionList } from './project-details/ContributionList';
import { ArchitectureSection } from './project-details/ArchitectureSection';
import { ProjectScreenshot } from './project-details/ProjectScreenshot';
import { ProjectFooter } from './project-details/ProjectFooter';
import type { Career } from '../types';

interface ProjectDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Career | null;
}

export const ProjectDetailsModal = ({ isOpen, onClose, project }: ProjectDetailsModalProps) => {
  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Project Details">
      <div className="flex flex-col h-full">
         <div className="flex-1 overflow-y-auto hide-scrollbar">
            <ProjectScreenshot />
            <div className="p-6 space-y-8">
                <ProjectOverview project={project} />
                <TechStackList techStack={project.techStack} />
                <ContributionList description={project.description} />
                <ArchitectureSection />
            </div>
         </div>
         <ProjectFooter />
      </div>
    </Modal>
  );
};
