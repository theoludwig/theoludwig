import useTranslation from 'next-translate/useTranslation'

import { SkillComponent } from './Skill'
import { SkillsSection } from './SkillsSection'

export const Skills: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <SkillsSection title={t('home:skills.languages')}>
        <SkillComponent skill='JavaScript' />
        <SkillComponent skill='TypeScript' />
        <SkillComponent skill='Python' />
        <SkillComponent skill='C/C++' />
      </SkillsSection>

      <SkillsSection title='Front-end'>
        <SkillComponent skill='HTML' />
        <SkillComponent skill='CSS' />
        <SkillComponent skill='Tailwind CSS' />
        <SkillComponent skill='React.js (+ Next.js)' />
      </SkillsSection>

      <SkillsSection title='Back-end'>
        <SkillComponent skill='Node.js' />
        <SkillComponent skill='Fastify' />
        <SkillComponent skill='Prisma' />
        <SkillComponent skill='PostgreSQL' />
        <SkillComponent skill='MySQL' />
      </SkillsSection>

      <SkillsSection title={t('home:skills.softwareTools')}>
        <SkillComponent skill='Ubuntu' />
        <SkillComponent skill='Hyper' />
        <SkillComponent skill='Visual Studio Code' />
        <SkillComponent skill='Git' />
        <SkillComponent skill='Docker' />
      </SkillsSection>
    </>
  )
}
