import Image from 'next/image'

import { skills } from './skills'

export interface SkillProps {
  skill: keyof typeof skills
}

export const Skill: React.FC<SkillProps> = props => {
  const { skill } = props
  const skillProperties = skills[skill]

  return (
    <>
      <a
        href={skillProperties.link}
        className='skills-link'
        target='_blank'
        rel='noopener noreferrer'
      >
        <div className='skills-content text-center'>
          <Image
            width={60}
            height={60}
            alt={skill}
            src={skillProperties.image}
          />
          <p className='skills-text'>{skill}</p>
        </div>
      </a>

      <style jsx>{`
        .skills-link {
          max-width: 120px;
          margin: 0px 10px 0 10px;
        }
        .skills-text {
          margin-top: 5px;
        }
      `}
      </style>
    </>
  )
}
