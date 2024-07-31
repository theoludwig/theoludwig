"use client"

import { BIRTH_DATE } from "@repo/utils/constants"
import { getAge, getISODate } from "@repo/utils/dates"
import { useTranslations } from "next-intl"
import { useMemo } from "react"
import { AboutItem } from "./AboutItem"

export interface AboutItemBirthDateProps {}

export const AboutItemBirthDate: React.FC<AboutItemBirthDateProps> = () => {
  const t = useTranslations()

  const age = useMemo(() => {
    return getAge(BIRTH_DATE)
  }, [])

  return (
    <AboutItem
      label={t("home.about.birth-date.label")}
      value={t("home.about.birth-date.value", {
        age,
        birthDate: getISODate(BIRTH_DATE),
      })}
    />
  )
}
