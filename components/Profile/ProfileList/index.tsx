"use client"

import { useMemo } from "react"

import { useI18n } from "@/i18n/i18n.client"
import { BIRTH_DATE, BIRTH_DATE_STRING, getAge } from "@/utils/getAge"
import type { CookiesStore } from "@/utils/constants"
import { useIsMounted } from "@/hooks/useIsMounted"

import { ProfileItem } from "./ProfileItem"

export interface ProfileListProps {
  cookiesStore: CookiesStore
}

export const ProfileList = (props: ProfileListProps): JSX.Element => {
  const { cookiesStore } = props

  const i18n = useI18n(cookiesStore)

  const age = useMemo(() => {
    return getAge(BIRTH_DATE)
  }, [])

  const { isMounted } = useIsMounted()

  return (
    <ul className="m-0 list-none p-0">
      <ProfileItem
        title={i18n.translate("home.about.pronouns")}
        value={i18n.translate("home.about.pronouns-value")}
      />
      <ProfileItem
        title={i18n.translate("home.about.birth-date")}
        value={
          isMounted
            ? `${BIRTH_DATE_STRING} (${age} ${i18n.translate(
                "home.about.years-old",
              )})`
            : BIRTH_DATE_STRING
        }
      />

      <ProfileItem
        title={i18n.translate("home.about.nationality")}
        value="Alsace, France"
      />
      <ProfileItem
        title="Email"
        value="contact@theoludwig.fr"
        link="mailto:contact@theoludwig.fr"
      />
    </ul>
  )
}
