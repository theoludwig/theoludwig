import { useTranslations } from "next-intl"
import { FaToolbox } from "react-icons/fa"
import { CurriculumVitaeSection } from "./CurriculumVitaeSection"

export interface CurriculumVitaeSkillsProps {}

export const CurriculumVitaeSkills: React.FC<
  CurriculumVitaeSkillsProps
> = () => {
  const t = useTranslations()

  return (
    <CurriculumVitaeSection
      id="skills"
      title={t("home.skills.title")}
      icon={<FaToolbox size={24} />}
    >
      <p>Test</p>
    </CurriculumVitaeSection>
  )
}
