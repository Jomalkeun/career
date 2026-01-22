import { Modal } from './common/Modal';
import { SkillSection } from './skills/SkillSection';
import { SkillItem } from './skills/SkillItem';
import { SkillGridItem } from './skills/SkillGridItem';

interface SkillsDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SkillsDetailModal = ({ isOpen, onClose }: SkillsDetailModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Full Skill Proficiency">
      <div className="px-6 space-y-8 py-6">
        <SkillSection title="Language & Script">
          <SkillItem 
            name="ES6+ JavaScript" 
            proficiency="Advanced Proficiency" 
            iconClass="fa-brands fa-js" 
            iconColor="#F7DF1E" 
            level={4} 
          />
          <SkillItem 
            name="jQuery" 
            proficiency="Expert Proficiency" 
            iconText="jQ" 
            iconColor="#2563EB" // blue-600
            level={5} 
          />
          <SkillItem 
            name="React.js" 
            proficiency="Intermediate" 
            iconClass="fa-brands fa-react" 
            iconColor="#61DAFB" 
            level={3} 
          />
        </SkillSection>

        <SkillSection title="Publishing">
          <SkillItem 
            name="Web Accessibility" 
            proficiency="Expert Proficiency" 
            iconClass="fa-solid fa-universal-access" 
            iconColor="inherit" // slate-600 in dark/light handled by parent class usually, but let's check
            level={5} 
          />
          <SkillItem 
            name="Responsive Web" 
            proficiency="Expert Proficiency" 
            iconClass="fa-solid fa-mobile-screen" 
            iconColor="inherit"
            level={5} 
          />
        </SkillSection>

        <SkillSection title="Design & Tools" gridCols={2}>
          <SkillGridItem 
            name="Figma" 
            iconClass="fa-brands fa-figma" 
            iconColor="#F24E1E" 
            level={3} 
          />
          <SkillGridItem 
            name="Git" 
            iconClass="fa-brands fa-git-alt" 
            iconColor="#F05032" 
            level={4} 
          />
          <SkillGridItem 
            name="Photoshop" 
            iconText="Ps" 
            iconColor="#31A8FF" 
            level={4} 
          />
          <SkillGridItem 
            name="Illustrator" 
            iconText="Ai" 
            iconColor="#FF9A00" 
            level={3} 
          />
        </SkillSection>
      </div>
    </Modal>
  );
};
