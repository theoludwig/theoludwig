import "@repo/config-tailwind/styles.css"
import { Footer } from "@repo/ui/Layout/Footer"
import { Header } from "@repo/ui/Layout/Header"
import { ThemeProvider } from "@repo/ui/Layout/Header/SwitchTheme"
import { VERSION } from "@repo/utils/constants"

interface MainLayoutProps extends React.PropsWithChildren {}

const MainLayout: React.FC<MainLayoutProps> = (props) => {
  const { children } = props

  return (
    <ThemeProvider>
      <Header />
      {children}
      <Footer version={VERSION} />
    </ThemeProvider>
  )
}

export default MainLayout
