import { useTranslations } from "next-intl"
import { FaGraduationCap } from "react-icons/fa"
import { CurriculumVitaeSection } from "./CurriculumVitaeSection"

export interface CurriculumVitaeEducationProps {}

export const CurriculumVitaeEducation: React.FC<
  CurriculumVitaeEducationProps
> = () => {
  const t = useTranslations()

  return (
    <CurriculumVitaeSection
      id="education"
      title={t("curriculum-vitae.education.title")}
      icon={<FaGraduationCap size={24} />}
    >
      <p>Test</p>
    </CurriculumVitaeSection>
  )
}
