import { useTranslations } from "next-intl"
import { FaUser } from "react-icons/fa"
import { CurriculumVitaeSection } from "./CurriculumVitaeSection.tsx"

export interface CurriculumVitaeAboutProps {}

export const CurriculumVitaeAbout: React.FC<CurriculumVitaeAboutProps> = () => {
  const t = useTranslations()

  return (
    <CurriculumVitaeSection
      id="about"
      title={t("curriculum-vitae.about.title")}
      icon={<FaUser size={24} />}
    >
      <p>
        {t.rich("curriculum-vitae.about.description", {
          br: () => {
            return <br />
          },
        })}
      </p>
    </CurriculumVitaeSection>
  )
}
