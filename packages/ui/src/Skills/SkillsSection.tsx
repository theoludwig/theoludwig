import { SectionContent } from "../design/Section/Section"
import { Typography } from "../design/Typography/Typography"

export interface SkillsSectionProps extends React.PropsWithChildren {
  title: string
}

export const SkillsSection: React.FC<SkillsSectionProps> = (props) => {
  const { title, children } = props

  return (
    <section className="mb-12">
      <SectionContent shadowContainer className="mx-auto w-full px-4 py-6">
        <Typography
          variant="h4"
          as="h3"
          className="mb-6 border-b border-black pb-3 dark:border-white"
        >
          {title}
        </Typography>
        <ul className="flex list-none flex-wrap justify-around">{children}</ul>
      </SectionContent>
    </section>
  )
}
