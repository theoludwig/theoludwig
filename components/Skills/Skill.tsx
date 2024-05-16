import Image from "next/image"

import { getTheme } from "@/theme/theme.server"

import type { SkillName } from "./skills"
import { skills } from "./skills"

export interface SkillComponentProps {
  skill: SkillName
}

export const SkillComponent = (props: SkillComponentProps): JSX.Element => {
  const { skill } = props

  const skillProperties = skills[skill]

  const theme = getTheme()

  const getImage = (): string => {
    if (typeof skillProperties.image === "string") {
      return skillProperties.image
    }
    if (theme === "light") {
      return skillProperties.image.light
    }
    return skillProperties.image.dark
  }

  return (
    <li>
      <a
        href={skillProperties.link}
        className="mx-2 flex max-w-xl flex-col items-center justify-center text-center text-primary hover:underline dark:text-primary-dark"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className="inline size-16"
          quality={100}
          width={64}
          height={64}
          alt={skill}
          src={getImage()}
        />
        <p className="mt-1 font-semibold">{skill}</p>
      </a>
    </li>
  )
}
