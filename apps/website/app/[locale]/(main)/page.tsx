import type { LocaleProps } from "@repo/i18n/routing"
import { About } from "@repo/ui/Home/About"
import { Interests } from "@repo/ui/Home/Interests"
import { OpenSource } from "@repo/ui/Home/OpenSource"
import { Portfolio } from "@repo/ui/Home/Portfolio"
import { Skills } from "@repo/ui/Home/Skills"
import { MainLayout } from "@repo/ui/Layout/MainLayout"
import { RevealFade } from "@repo/ui/Layout/Section"
import { setRequestLocale } from "next-intl/server"

interface HomePageProps extends LocaleProps {}

const HomePage: React.FC<HomePageProps> = async (props) => {
  const { params } = props

  const { locale } = await params
  // Enable static rendering
  setRequestLocale(locale)

  return (
    <MainLayout>
      <About />

      <RevealFade>
        <Interests />
      </RevealFade>

      <RevealFade>
        <Skills />
      </RevealFade>

      <RevealFade>
        <Portfolio />
      </RevealFade>

      <RevealFade>
        <OpenSource />
      </RevealFade>
    </MainLayout>
  )
}

export default HomePage
