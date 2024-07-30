import { useTranslations } from "next-intl"
import { Button } from "../design/Button/Button"
import { Typography } from "../design/Typography/Typography"

export interface AboutDescriptionProps {}

export const AboutDescription: React.FC<AboutDescriptionProps> = () => {
  const t = useTranslations()

  return (
    <div className="dark:text-gray my-6 max-w-md text-center text-black">
      <Typography as="p" variant="text1" className="my-6">
        {t.rich("home.about.description")}
      </Typography>

      <Button href="/curriculum-vitae/index.html" variant="outline">
        Curriculum vitæ ({t("locales.fr-FR")})
      </Button>
    </div>
  )
}
