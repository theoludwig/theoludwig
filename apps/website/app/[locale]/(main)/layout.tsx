import "@repo/config-tailwind/styles.css"
import type { Locale } from "@repo/utils/constants"
import { Footer } from "@repo/ui/Layout/Footer"
import { Header } from "@repo/ui/Layout/Header"
import { ThemeProvider } from "@repo/ui/Layout/Header/SwitchTheme"
import { VERSION } from "@repo/utils/constants"
import { setRequestLocale } from "next-intl/server"

interface MainLayoutProps extends React.PropsWithChildren {
  params: Promise<{
    locale: string
  }>
}

const MainLayout: React.FC<MainLayoutProps> = async (props) => {
  const { children, params } = props

  const { locale } = await params
  // Enable static rendering
  setRequestLocale(locale as Locale)

  return (
    <ThemeProvider>
      <Header />
      {children}
      <Footer version={VERSION} />
    </ThemeProvider>
  )
}

export default MainLayout
