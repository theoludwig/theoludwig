import { useTranslations } from "next-intl"
import { MainLayout } from "../../MainLayout/MainLayout"
import { Link } from "../../design/Link/Link"
import { Section } from "../../design/Section/Section"
import { Typography } from "../../design/Typography/Typography"

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
          {t("errors.page-doesnt-exist")}{" "}
          <Link href="/">{t("errors.return-to-home-page")}</Link>
        </Typography>
      </Section>
    </MainLayout>
  )
}
