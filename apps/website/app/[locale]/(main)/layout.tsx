import "@repo/config-tailwind/styles.css"
import type { LocaleProps } from "@repo/i18n/routing"
import { Footer } from "@repo/ui/Layout/Footer"
import { Header } from "@repo/ui/Layout/Header"
import { ThemeProvider } from "@repo/ui/Layout/Header/SwitchTheme"
import { VERSION } from "@repo/utils/constants"
import { setRequestLocale } from "next-intl/server"

interface MainLayoutProps extends React.PropsWithChildren, LocaleProps {}

const MainLayout: React.FC<MainLayoutProps> = async (props) => {
  const { children, params } = props

  const { locale } = await params
  // Enable static rendering
  setRequestLocale(locale)

  return (
    <ThemeProvider>
      <Header />
      {children}
      <Footer version={VERSION} />
    </ThemeProvider>
  )
}

export default MainLayout
