import { useTranslations } from "next-intl"
import { FaHeart } from "react-icons/fa"
import { CurriculumVitaeSection } from "./CurriculumVitaeSection"

export interface CurriculumVitaeInterestsProps {}

export const CurriculumVitaeInterests: React.FC<
  CurriculumVitaeInterestsProps
> = () => {
  const t = useTranslations()

  return (
    <CurriculumVitaeSection
      id="interests"
      title={t("home.interests.title")}
      icon={<FaHeart size={24} />}
    >
      <p>Test</p>
    </CurriculumVitaeSection>
  )
}
