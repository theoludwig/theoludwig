import { Section, SectionContent } from "../design/Section/Section"
import { AboutDescription } from "./AboutDescription"
import { AboutIntroduction } from "./AboutIntroduction"
import { AboutList } from "./AboutList/AboutList"
import { AboutLogo } from "./AboutLogo"
import { SocialMediaList } from "./SocialMediaList/SocialMediaList"

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
