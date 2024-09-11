import { useTranslations } from "next-intl"
import { Button } from "../../Design/Button/Button.tsx"
import { Typography } from "../../Design/Typography/Typography.tsx"

export interface AboutDescriptionProps {}

export const AboutDescription: React.FC<AboutDescriptionProps> = () => {
  const t = useTranslations()

  return (
    <div className="dark:text-gray my-6 max-w-md text-center text-black">
      <Typography as="p" variant="text1" className="my-6">
        {t.rich("home.about.description")}
      </Typography>

      <Button href="/curriculum-vitae" variant="outline">
        Curriculum vitæ
      </Button>
    </div>
  )
}
