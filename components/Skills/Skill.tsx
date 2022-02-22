import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useMemo } from 'react'

import { skills } from './skills'

export interface SkillComponentProps {
  skill: string
}

export const SkillComponent: React.FC<SkillComponentProps> = (props) => {
  const { skill } = props
  const skillProperties = skills[skill]
  const { theme } = useTheme()

  const image = useMemo(() => {
    if (typeof skillProperties.image !== 'string') {
      return skillProperties.image[theme ?? 'light']
    }
    return skillProperties.image
  }, [skillProperties, theme])

  return (
    <a
      href={skillProperties.link}
      className='mx-2 max-w-xl text-yellow hover:underline dark:text-yellow-dark'
      target='_blank'
      rel='noopener noreferrer'
    >
      <div className='text-center'>
        <Image quality={100} width={60} height={60} alt={skill} src={image} />
        <p className='mt-1'>{skill}</p>
      </div>
    </a>
  )
}
