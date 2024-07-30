import { GitHubIcon } from "../About/SocialMediaList/SocialMediaIcons/GitHubIcon"
import { SectionContent } from "../design/Section/Section"
import { Typography } from "../design/Typography/Typography"

export interface RepositoryProps {
  name: string
  description: string
  href: string
}

export const Repository: React.FC<RepositoryProps> = (props) => {
  const { name, description, href } = props

  return (
    <li>
      <a href={href} target="_blank">
        <SectionContent
          className="relative cursor-pointer p-6 transition-all duration-300 ease-in-out hover:scale-[1.03] sm:p-6"
          shadowContainer
        >
          <Typography as="h3" variant="text1" className="flex items-center">
            <GitHubIcon className="mr-2 h-6" />
            <span className="text-primary dark:text-primary-dark font-semibold">
              {name}
            </span>
          </Typography>
          <p className="mt-4">{description}</p>
        </SectionContent>
      </a>
    </li>
  )
}
