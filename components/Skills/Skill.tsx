'use client'

import { useState, useEffect, useMemo } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'

import type { SkillName } from './skills'
import { skills } from './skills'

export interface SkillComponentProps {
  skill: SkillName
}

export const SkillComponent: React.FC<SkillComponentProps> = (props) => {
  const { skill } = props

  const skillProperties = skills[skill]
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const image = useMemo(() => {
    if (typeof skillProperties.image === 'string') {
      return skillProperties.image
    }
    if (!mounted) {
      return skillProperties.image.dark
    }
    if (theme === 'light') {
      return skillProperties.image.light
    }
    return skillProperties.image.dark
  }, [skillProperties, theme, mounted])

  if (!mounted) {
    return null
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
          src={image}
        />
        <p className='mt-1'>{skill}</p>
      </div>
    </a>
  )
}
