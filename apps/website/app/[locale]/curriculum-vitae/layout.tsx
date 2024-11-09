import "@repo/config-tailwind/styles.css"
import type { LocaleProps } from "@repo/i18n/routing"
import { ThemeProvider } from "@repo/ui/Layout/Header/SwitchTheme"
import { setRequestLocale } from "next-intl/server"

interface CurriculumVitaeLayoutProps
  extends React.PropsWithChildren,
    LocaleProps {}

const CurriculumVitaeLayout: React.FC<CurriculumVitaeLayoutProps> = async (
  props,
) => {
  const { children, params } = props

  const { locale } = await params
  // Enable static rendering
  setRequestLocale(locale)

  return <ThemeProvider forcedTheme="light">{children}</ThemeProvider>
}

export default CurriculumVitaeLayout
