import { useTranslations } from "next-intl"
import { FaToolbox } from "react-icons/fa"
import {
  SKILL_CATEGORIES,
  SKILL_NAMES_BY_CATEGORY,
} from "../Home/Skills/skills"
import { CurriculumVitaeSection } from "./CurriculumVitaeSection"

export interface CurriculumVitaeSkillsProps {}

export const CurriculumVitaeSkills: React.FC<
  CurriculumVitaeSkillsProps
> = () => {
  const t = useTranslations()

  const skills = [
    ...SKILL_CATEGORIES.map((category) => {
      const skillNames = SKILL_NAMES_BY_CATEGORY[category]
      return {
        category,
        skillNames,
      }
    }),
    {
      category: "others",
      skillNames: [t("locales.en-US"), t("home.skills.driving-license")],
    },
  ] as const

  return (
    <CurriculumVitaeSection
      id="skills"
      title={t("home.skills.title")}
      icon={<FaToolbox size={24} />}
    >
      <ul className="list-unstyled m-0">
        {skills.map(({ category, skillNames }) => {
          return (
            <li key={category} className="card card-nested relative">
              <div className="skill-info">
                <strong>{t(`home.skills.${category}`)}</strong>

                <div className="labels mt-2">
                  {skillNames.map((skillName) => {
                    return (
                      <p key={skillName} className="label label-keyword">
                        {skillName}
                      </p>
                    )
                  })}
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </CurriculumVitaeSection>
  )
}
