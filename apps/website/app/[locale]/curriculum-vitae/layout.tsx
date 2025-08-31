import "@repo/config-tailwind/styles.css"
import type { Locale } from "@repo/utils/constants"
import { ThemeProvider } from "@repo/ui/Layout/Header/SwitchTheme"
import { setRequestLocale } from "next-intl/server"

interface CurriculumVitaeLayoutProps extends React.PropsWithChildren {
  params: Promise<{
    locale: string
  }>
}

const CurriculumVitaeLayout: React.FC<CurriculumVitaeLayoutProps> = async (
  props,
) => {
  const { children, params } = props

  const { locale } = await params
  // Enable static rendering
  setRequestLocale(locale as Locale)

  return <ThemeProvider forcedTheme="light">{children}</ThemeProvider>
}

export default CurriculumVitaeLayout
