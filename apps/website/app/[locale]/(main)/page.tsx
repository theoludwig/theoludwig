import { About } from "@repo/ui/Home/About"
import { Interests } from "@repo/ui/Home/Interests"
import { OpenSource } from "@repo/ui/Home/OpenSource"
import { Portfolio } from "@repo/ui/Home/Portfolio"
import { Skills } from "@repo/ui/Home/Skills"
import { MainLayout } from "@repo/ui/Layout/MainLayout"
import { RevealFade } from "@repo/ui/Layout/Section"

const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <About />

      <RevealFade>
        <Portfolio />
      </RevealFade>

      <RevealFade>
        <Interests />
      </RevealFade>

      <RevealFade>
        <OpenSource />
      </RevealFade>

      <RevealFade>
        <Skills />
      </RevealFade>
    </MainLayout>
  )
}

export default HomePage
