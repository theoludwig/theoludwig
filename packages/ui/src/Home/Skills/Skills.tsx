import { useTranslations } from "next-intl"
import { Section, SectionTitle } from "../../Layout/Section/Section.tsx"
import { SkillItem } from "./SkillItem.tsx"
import { SkillsSection } from "./SkillsSection.tsx"
import { SKILL_CATEGORIES, SKILL_NAMES_BY_CATEGORY } from "./skills.ts"

export interface SkillsProps {}

export const Skills: React.FC<SkillsProps> = () => {
  const t = useTranslations()

  return (
    <Section verticalSpacing horizontalSpacing id="skills">
      <SectionTitle>{t("home.skills.title")}</SectionTitle>

      {SKILL_CATEGORIES.map((category) => {
        const skillNames = SKILL_NAMES_BY_CATEGORY[category]

        return (
          <SkillsSection key={category} title={t(`home.skills.${category}`)}>
            {skillNames.map((skillName) => {
              return <SkillItem key={skillName} skillName={skillName} />
            })}
          </SkillsSection>
        )
      })}
    </Section>
  )
}
