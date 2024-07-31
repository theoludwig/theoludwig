"use client"

import { BIRTH_DATE, BIRTH_DATE_STRING } from "@repo/utils/constants"
import { getAge } from "@repo/utils/dates"
import { useTranslations } from "next-intl"
import { useMemo } from "react"

export interface BirthDateProps {}

export const BirthDate: React.FC<BirthDateProps> = () => {
  const t = useTranslations()

  const age = useMemo(() => {
    return getAge(BIRTH_DATE)
  }, [])

  return t("home.about.birth-date.value", {
    age,
    birthDate: BIRTH_DATE_STRING,
  })
}
