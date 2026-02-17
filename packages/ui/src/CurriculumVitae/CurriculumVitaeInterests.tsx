import { useTranslations } from "next-intl"
import { FaHeart } from "react-icons/fa"
import { CurriculumVitaeSection } from "./CurriculumVitaeSection.tsx"

export interface CurriculumVitaeInterestsProps {}

export const CurriculumVitaeInterests: React.FC<CurriculumVitaeInterestsProps> = () => {
  const t = useTranslations()

  const interests = [
    t.rich("curriculum-vitae.interests.open-source", {
      strong: (children) => {
        return <strong>{children}</strong>
      },
      "link-github": (children) => {
        return (
          <a href="https://github.com/theoludwig" target="_blank" className="font-semibold">
            {children}
          </a>
        )
      },
      "link-leon": (children) => {
        return (
          <a href="https://github.com/leon-ai/leon" target="_blank" className="font-semibold">
            {children}
          </a>
        )
      },
      "link-markdownlint": (children) => {
        return (
          <a
            href="https://www.npmjs.com/package/markdownlint-rule-relative-links"
            target="_blank"
            className="font-semibold"
          >
            {children}
          </a>
        )
      },
    }),
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
