import Image from 'next/image'

import { getTheme } from '@/theme/theme.server'

import type { SkillName } from './skills'
import { skills } from './skills'

export interface SkillComponentProps {
  skill: SkillName
}

export const SkillComponent = (props: SkillComponentProps): JSX.Element => {
  const { skill } = props

  const skillProperties = skills[skill]

  const theme = getTheme()

  const getImage = (): string => {
    if (typeof skillProperties.image === 'string') {
      return skillProperties.image
    }
    if (theme === 'light') {
      return skillProperties.image.light
    }
    return skillProperties.image.dark
  }

  return (
    <a
      href={skillProperties.link}
      className='mx-2 max-w-xl text-yellow hover:underline dark:text-yellow-dark'
      target='_blank'
      rel='noopener noreferrer'
    >
      <div className='text-center'>
        <Image
          className='inline h-16 w-16'
          quality={100}
          width={64}
          height={64}
          alt={skill}
          src={getImage()}
        />
        <p className='mt-1'>{skill}</p>
      </div>
    </a>
  )
}
