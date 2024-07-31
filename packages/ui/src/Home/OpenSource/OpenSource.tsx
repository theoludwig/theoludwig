import { useTranslations } from "next-intl"
import {
  Section,
  SectionDescription,
  SectionTitle,
} from "../../Layout/Section/Section"
import { Repository } from "./Repository"

export interface OpenSourceProps {}

export const OpenSource: React.FC<OpenSourceProps> = () => {
  const t = useTranslations()

  return (
    <Section verticalSpacing horizontalSpacing id="open-source">
      <SectionTitle>{t("home.open-source.title")}</SectionTitle>
      <SectionDescription>
        {t("home.open-source.description")}
      </SectionDescription>

      <div className="flex max-w-full flex-col items-center">
        <ul className="grid list-none grid-cols-1 gap-6 md:w-10/12 md:grid-cols-2">
          <Repository
            name="nodejs/node"
            description="Node.js JavaScript runtime ✨🐢🚀✨"
            href="https://github.com/nodejs/node/commits?author=theoludwig"
          />
          <Repository
            name="standard/standard"
            description="🌟 JavaScript Style Guide, with linter & automatic code fixer"
            href="https://github.com/standard/standard/commits?author=theoludwig"
          />
          <Repository
            name="DefinitelyTyped/DefinitelyTyped"
            description="High quality TypeScript type definitions."
            href="https://github.com/DefinitelyTyped/DefinitelyTyped/commits?author=theoludwig"
          />
          <Repository
            name="vercel/next.js"
            description="The React Framework"
            href="https://github.com/vercel/next.js/commits?author=theoludwig"
          />
        </ul>
      </div>
    </Section>
  )
}
