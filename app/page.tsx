import { RevealFade } from "@/components/design/RevealFade"
import { Section } from "@/components/design/Section"
import { Interests } from "@/components/Interests"
import { Portfolio } from "@/components/Portfolio"
import { Profile } from "@/components/Profile"
import { SocialMediaList } from "@/components/Profile/SocialMediaList"
import { Skills } from "@/components/Skills"
import { OpenSource } from "@/components/OpenSource"
import { getI18n } from "@/i18n/i18n.server"

const HomePage = (): JSX.Element => {
  const i18n = getI18n()

  return (
    <main className="flex flex-col md:mx-auto md:max-w-4xl lg:max-w-7xl">
      <Section isMain id="about">
        <Profile />
        <SocialMediaList />
      </Section>

      <RevealFade>
        <Section
          id="interests"
          heading={i18n.translate("home.interests.title")}
        >
          <Interests />
        </Section>
      </RevealFade>

      <RevealFade>
        <Section
          id="skills"
          heading={i18n.translate("home.skills.title")}
          withoutShadowContainer
        >
          <Skills />
        </Section>
      </RevealFade>

      <RevealFade>
        <Section
          id="portfolio"
          heading={i18n.translate("home.portfolio.title")}
          withoutShadowContainer
        >
          <Portfolio />
        </Section>
      </RevealFade>

      <RevealFade>
        <Section id="open-source" heading="Open source" withoutShadowContainer>
          <OpenSource />
        </Section>
      </RevealFade>
    </main>
  )
}

export default HomePage
