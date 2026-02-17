import { useTranslations } from "next-intl"
import { Link } from "../../Design/Link/Link.tsx"
import { Typography } from "../../Design/Typography/Typography.tsx"
import { MainLayout } from "../../Layout/MainLayout/MainLayout.tsx"
import { Section } from "../../Layout/Section/Section.tsx"

export interface ErrorNotFoundProps {}

export const ErrorNotFound: React.FC<ErrorNotFoundProps> = () => {
  const t = useTranslations()

  return (
    <MainLayout center>
      <Section horizontalSpacing>
        <Typography variant="h1" as="h1">
          {t("errors.error")} 404 - {t("errors.not-found")}
        </Typography>

        <Typography variant="text1" as="p" className="mt-4">
          {t("errors.page-doesnt-exist")} <Link href="/">{t("errors.return-to-home-page")}</Link>
        </Typography>
      </Section>
    </MainLayout>
  )
}
