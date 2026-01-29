import { Modal } from './common/Modal';
import { SkillSection } from './skills/SkillSection';
import { SkillItem } from './skills/SkillItem';
import { SkillGridItem } from './skills/SkillGridItem';
import { getCategories, getSkillsByCategory, getProficiencyText } from '../data/skillsData';

interface SkillsDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SkillsDetailModal = ({ isOpen, onClose }: SkillsDetailModalProps) => {
  const categories = getCategories();

  // Determine if a category should use grid layout (2 columns)
  const gridCategories = ['Design & Tools', 'Project Management', 'CMS'];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Full Skill Proficiency">
      <div className="px-6 space-y-8 py-6">
        {categories.map((category) => {
          const skills = getSkillsByCategory(category);
          const useGrid = gridCategories.includes(category);

          return (
            <SkillSection
              key={category}
              title={category}
              gridCols={useGrid ? 2 : undefined}
            >
              {skills.map((skill) => {
                const commonProps = {
                  name: skill.name,
                  level: skill.level,
                  ...(skill.icon && { icon: skill.icon }),
                  ...(skill.iconText && { iconText: skill.iconText }),
                  iconColor: skill.color,
                };

                // Use SkillGridItem for grid layouts, SkillItem for list layouts
                if (useGrid) {
                  return (
                    <SkillGridItem
                      key={skill.name}
                      {...commonProps}
                    />
                  );
                } else {
                  return (
                    <SkillItem
                      key={skill.name}
                      proficiency={getProficiencyText(skill.level)}
                      {...commonProps}
                    />
                  );
                }
              })}
            </SkillSection>
          );
        })}
      </div>
    </Modal>
  );
};
