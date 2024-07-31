"use client"

import Image from "next/image"
import { useMemo } from "react"
import { Link } from "../../Design/Link/Link"
import { useTheme } from "../../Layout/Header/SwitchTheme"
import type { SkillName } from "./skills"
import { skills } from "./skills"

export interface SkillItemProps {
  skillName: SkillName
}

export const SkillItem: React.FC<SkillItemProps> = (props) => {
  const { skillName } = props

  const skill = skills[skillName]

  const { theme } = useTheme()

  const skillImage = useMemo(() => {
    if (typeof skill.image === "string") {
      return skill.image
    }
    if (theme === "light") {
      return skill.image.light
    }
    return skill.image.dark
  }, [skill.image, theme])

  return (
    <li>
      <Link
        href={skill.link}
        className="mx-2 max-w-xl flex-col items-center justify-center text-center"
        target="_blank"
        isExternal={false}
      >
        <Image
          className="inline size-16"
          quality={100}
          width={64}
          height={64}
          alt={`Logo of ${skillName}`}
          src={skillImage}
        />
        <p className="mt-1 font-semibold">{skillName}</p>
      </Link>
    </li>
  )
}
