import { useTranslations } from "next-intl"
import { AboutItem } from "./AboutItem.tsx"
import { BirthDate } from "./BirthDate.tsx"

export interface AboutListProps {}

export const AboutList: React.FC<AboutListProps> = () => {
  const t = useTranslations()

  return (
    <ul className="my-6 list-none space-y-3">
      <AboutItem label={t("home.about.pronouns.label")} value={t("home.about.pronouns.value")} />
      <AboutItem label={t("home.about.birth-date.label")} value={<BirthDate />} />
      <AboutItem
        label={t("home.about.nationality.label")}
        value={t("home.about.nationality.value")}
      />
      <AboutItem
        label={t("home.about.email.label")}
        value={t("home.about.email.value", {
          email: "contact@theoludwig.fr",
        })}
        link="mailto:contact@theoludwig.fr"
      />
    </ul>
  )
}
