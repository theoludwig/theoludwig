import Image from 'next/image'

import { skills } from './skills'

export interface SkillProps {
  skill: keyof typeof skills
}

export const Skill: React.FC<SkillProps> = (props) => {
  const { skill } = props
  const skillProperties = skills[skill]

  return (
    <a
      href={skillProperties.link}
      className='mx-2 max-w-xl text-yellow hover:underline'
      target='_blank'
      rel='noopener noreferrer'
    >
      <div className='text-center'>
        <Image width={60} height={60} alt={skill} src={skillProperties.image} />
        <p className='mt-1'>{skill}</p>
      </div>
    </a>
  )
}
