import { useTranslations } from "next-intl"
import { FaHeart } from "react-icons/fa"
import { CurriculumVitaeSection } from "./CurriculumVitaeSection.tsx"

export interface CurriculumVitaeInterestsProps {}

export const CurriculumVitaeInterests: React.FC<
  CurriculumVitaeInterestsProps
> = () => {
  const t = useTranslations()

  const interests = [
    <strong key="open-source">
      {t("curriculum-vitae.interests.open-source")}
    </strong>,
    t.rich("curriculum-vitae.interests.fusey", {
      link: (children) => {
        return (
          <a href="https://fusey.gg" target="_blank" className="font-semibold">
            {children}
          </a>
        )
      },
      strong: (children) => {
        return <strong>{children}</strong>
      },
    }),
  ]

  return (
    <CurriculumVitaeSection
      id="interests"
      title={t("curriculum-vitae.interests.title")}
      icon={<FaHeart size={24} />}
    >
      <ul className="list-unstyled m-0">
        {interests.map((interest, index) => {
          return (
            <li key={index} className="card card-nested max-w-2xl">
              <p>{interest}</p>
            </li>
          )
        })}
      </ul>
    </CurriculumVitaeSection>
  )
}
