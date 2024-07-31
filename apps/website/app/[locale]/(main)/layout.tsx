import "@repo/config-tailwind/styles.css"
import type { LocaleProps } from "@repo/i18n/config"
import { Footer } from "@repo/ui/Layout/Footer"
import { Header } from "@repo/ui/Layout/Header"
import { ThemeProvider } from "@repo/ui/Layout/Header/SwitchTheme"
import { VERSION } from "@repo/utils/constants"
import { unstable_setRequestLocale } from "next-intl/server"

interface MainLayoutProps extends React.PropsWithChildren, LocaleProps {}

const MainLayout: React.FC<MainLayoutProps> = async (props) => {
  const { children, params } = props

  // Enable static rendering
  unstable_setRequestLocale(params.locale)

  return (
    <ThemeProvider>
      <Header />
      {children}
      <Footer version={VERSION} />
    </ThemeProvider>
  )
}

export default MainLayout
