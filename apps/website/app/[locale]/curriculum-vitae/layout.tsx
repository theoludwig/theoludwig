import "@repo/config-tailwind/styles.css"
import { ThemeProvider } from "@repo/ui/Layout/Header/SwitchTheme"

interface CurriculumVitaeLayoutProps extends React.PropsWithChildren {}

const CurriculumVitaeLayout: React.FC<CurriculumVitaeLayoutProps> = (props) => {
  const { children } = props

  return <ThemeProvider forcedTheme="light">{children}</ThemeProvider>
}

export default CurriculumVitaeLayout
