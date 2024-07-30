import { useTranslations } from "next-intl"
import { Section, SectionTitle } from "../design/Section/Section"
import { SkillItem } from "./SkillItem"
import { SkillsSection } from "./SkillsSection"

export interface SkillsProps {}

export const Skills: React.FC<SkillsProps> = () => {
  const t = useTranslations()

  return (
    <Section verticalSpacing horizontalSpacing id="skills">
      <SectionTitle>{t("home.skills.title")}</SectionTitle>

      <SkillsSection title={t("home.skills.programming-languages")}>
        <SkillItem skillName="TypeScript" />
        <SkillItem skillName="Python" />
        <SkillItem skillName="C/C++" />
        <SkillItem skillName="PHP" />
      </SkillsSection>

      <SkillsSection title={t("home.skills.frontend")}>
        <SkillItem skillName="HTML" />
        <SkillItem skillName="CSS" />
        <SkillItem skillName="Tailwind CSS" />
        <SkillItem skillName="React.js (+ Next.js)" />
      </SkillsSection>

      <SkillsSection title={t("home.skills.backend")}>
        <SkillItem skillName="Laravel" />
        <SkillItem skillName="Node.js" />
        <SkillItem skillName="Fastify" />
        <SkillItem skillName="PostgreSQL" />
      </SkillsSection>

      <SkillsSection title={t("home.skills.software-tools")}>
        <SkillItem skillName="GNU/Linux" />
        <SkillItem skillName="Arch Linux" />
        <SkillItem skillName="Visual Studio Code" />
        <SkillItem skillName="Git" />
        <SkillItem skillName="Docker" />
      </SkillsSection>
    </Section>
  )
}
