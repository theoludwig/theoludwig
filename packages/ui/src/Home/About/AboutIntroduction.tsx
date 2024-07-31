import { useTranslations } from "next-intl"
import { Typography } from "../../Design/Typography/Typography"

export interface AboutIntroductionProps {}

export const AboutIntroduction: React.FC<AboutIntroductionProps> = () => {
  const t = useTranslations()

  return (
    <div className="border-b border-black dark:border-white">
      <Typography as="h1" variant="h1">
        {t("meta.title")}
      </Typography>

      <Typography as="h2" variant="text1" className="my-3">
        {t("meta.description")}
      </Typography>
    </div>
  )
}
