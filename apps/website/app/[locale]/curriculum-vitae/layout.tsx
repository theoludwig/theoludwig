import "@repo/config-tailwind/styles.css"
import type { LocaleProps } from "@repo/i18n/config"
import { ThemeProvider } from "@repo/ui/Layout/Header/SwitchTheme"
import { unstable_setRequestLocale } from "next-intl/server"

interface CurriculumVitaeLayoutProps
  extends React.PropsWithChildren,
    LocaleProps {}

const CurriculumVitaeLayout: React.FC<CurriculumVitaeLayoutProps> = async (
  props,
) => {
  const { children, params } = props

  // Enable static rendering
  unstable_setRequestLocale(params.locale)

  return <ThemeProvider forcedTheme="light">{children}</ThemeProvider>
}

export default CurriculumVitaeLayout
