import useTranslation from 'next-translate/useTranslation'

import { Skill } from './Skill'
import { SkillsSection } from './SkillsSection'

export const Skills: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <SkillsSection title={t('home:skills.languages')}>
        <Skill skill='JavaScript' />
        <Skill skill='TypeScript' />
        <Skill skill='Python' />
        <Skill skill='Dart' />
      </SkillsSection>

      <SkillsSection title='Front-end'>
        <Skill skill='HTML' />
        <Skill skill='CSS' />
        <Skill skill='SASS' />
        <Skill skill='React.js (+ Next.js)' />
        <Skill skill='Flutter' />
      </SkillsSection>

      <SkillsSection title='Back-end'>
        <Skill skill='Node.js' />
        <Skill skill='Strapi' />
        <Skill skill='MySQL' />
      </SkillsSection>

      <SkillsSection title={t('home:skills.softwareTools')}>
        <Skill skill='Ubuntu' />
        <Skill skill='Hyper' />
        <Skill skill='Visual Studio Code' />
        <Skill skill='Git' />
        <Skill skill='Docker' />
      </SkillsSection>
    </>
  )
}
