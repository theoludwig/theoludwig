import { getI18n } from '@/i18n/i18n.server'

import { SkillComponent } from './Skill'
import { SkillsSection } from './SkillsSection'

export const Skills = (): JSX.Element => {
  const i18n = getI18n()

  return (
    <>
      <SkillsSection title={i18n.translate('home.skills.languages')}>
        <SkillComponent skill='TypeScript' />
        <SkillComponent skill='Python' />
        <SkillComponent skill='C/C++' />
        <SkillComponent skill='PHP' />
      </SkillsSection>

      <SkillsSection title='Frontend'>
        <SkillComponent skill='HTML' />
        <SkillComponent skill='CSS' />
        <SkillComponent skill='Tailwind CSS' />
        <SkillComponent skill='React.js (+ Next.js)' />
      </SkillsSection>

      <SkillsSection title='Backend'>
        <SkillComponent skill='Laravel' />
        <SkillComponent skill='Node.js' />
        <SkillComponent skill='Fastify' />
        <SkillComponent skill='PostgreSQL' />
      </SkillsSection>

      <SkillsSection title={i18n.translate('home.skills.software-tools')}>
        <SkillComponent skill='GNU/Linux' />
        <SkillComponent skill='Arch Linux' />
        <SkillComponent skill='Visual Studio Code' />
        <SkillComponent skill='Git' />
        <SkillComponent skill='Docker' />
      </SkillsSection>
    </>
  )
}
