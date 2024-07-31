import { useTranslations } from "next-intl"
import { MdWork } from "react-icons/md"
import { CurriculumVitaeSection } from "./CurriculumVitaeSection"

export interface CurriculumVitaeWorkProps {}

export const CurriculumVitaeWork: React.FC<CurriculumVitaeWorkProps> = () => {
  const t = useTranslations()

  return (
    <CurriculumVitaeSection
      id="work-experience"
      title={t("curriculum-vitae.work.title")}
      icon={<MdWork size={24} />}
    >
      <p>Test</p>
    </CurriculumVitaeSection>
  )
}
