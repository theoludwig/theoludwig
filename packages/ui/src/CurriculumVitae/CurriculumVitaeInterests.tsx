import { useTranslations } from "next-intl"
import { FaHeart } from "react-icons/fa"
import { CurriculumVitaeSection } from "./CurriculumVitaeSection"

export interface CurriculumVitaeInterestsProps {}

export const CurriculumVitaeInterests: React.FC<
  CurriculumVitaeInterestsProps
> = () => {
  const t = useTranslations()

  const interests = [
    t("curriculum-vitae.interests.open-source"),
    t("curriculum-vitae.interests.high-tech"),
  ]

  return (
    <CurriculumVitaeSection
      id="interests"
      title={t("home.interests.title")}
      icon={<FaHeart size={24} />}
    >
      <ul className="list-unstyled m-0">
        {interests.map((interest) => {
          return (
            <li key={interest} className="card card-nested">
              <p>
                <strong>{interest}</strong>
              </p>
            </li>
          )
        })}
      </ul>
    </CurriculumVitaeSection>
  )
}
