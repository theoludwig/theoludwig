import { Section, SectionContent } from "../../Layout/Section/Section.tsx"
import { AboutDescription } from "./AboutDescription.tsx"
import { AboutIntroduction } from "./AboutIntroduction.tsx"
import { AboutList } from "./AboutList/AboutList.tsx"
import { AboutLogo } from "./AboutLogo.tsx"
import { SocialMediaList } from "./SocialMediaList/SocialMediaList.tsx"

export interface AboutProps {}

export const About: React.FC<AboutProps> = () => {
  return (
    <Section verticalSpacing horizontalSpacing id="about">
      <SectionContent shadowContainer>
        <div className="flex flex-col items-center justify-center md:flex-row md:pt-10">
          <AboutLogo />
          <div>
            <AboutIntroduction />
            <AboutList />
            <AboutDescription />
          </div>
        </div>

        <SocialMediaList />
      </SectionContent>
    </Section>
  )
}
