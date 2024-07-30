import type { LocaleProps } from "@repo/i18n/config"
import { About } from "@repo/ui/About"
import { RevealFade } from "@repo/ui/design/Section"
import { Interests } from "@repo/ui/Interests"
import { MainLayout } from "@repo/ui/MainLayout"
import { OpenSource } from "@repo/ui/OpenSource"
import { Portfolio } from "@repo/ui/Portfolio"
import { Skills } from "@repo/ui/Skills"
import { unstable_setRequestLocale } from "next-intl/server"

interface HomePageProps extends LocaleProps {}

const HomePage: React.FC<HomePageProps> = (props) => {
  const { params } = props

  // Enable static rendering
  unstable_setRequestLocale(params.locale)

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
