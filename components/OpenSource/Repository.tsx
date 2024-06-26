import { ShadowContainer } from "@/components/design/ShadowContainer"
import { GitHubIcon } from "@/components/Profile/SocialMediaList/SocialMediaIcons/GitHubIcon"

export interface RepositoryProps {
  name: string
  description: string
  href: string
}

export const Repository = (props: RepositoryProps): JSX.Element => {
  const { name, description, href } = props

  return (
    <li>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <ShadowContainer className="relative !mb-4 max-h-32 cursor-pointer p-6 transition-all duration-300 ease-in-out hover:scale-[1.03]">
          <h3 className="flex">
            <GitHubIcon className="mr-2 h-6" />
            <span className="font-semibold text-primary dark:text-primary-dark">
              {name}
            </span>
          </h3>
          <p className="my-4">{description}</p>
        </ShadowContainer>
      </a>
    </li>
  )
}
