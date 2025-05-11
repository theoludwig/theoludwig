import Image from "next/image"
import { Typography } from "../../Design/Typography/Typography.tsx"
import { SectionContent } from "../../Layout/Section/Section.tsx"

export interface PortfolioProject {
  id: string
  title: string
  description: string
  image: string
  link: string
}

export interface PortfolioItemProps {
  portfolioProject: PortfolioProject
}

export const PortfolioItem: React.FC<PortfolioItemProps> = (props) => {
  const { portfolioProject } = props
  const { title, description, link, image } = portfolioProject

  return (
    <li>
      <a
        className="group inline-flex justify-center"
        target="_blank"
        href={link}
        aria-label={title}
      >
        <SectionContent
          className="relative cursor-pointer items-center p-0 sm:p-0"
          shadowContainer
        >
          <div className="flex justify-center">
            <Image
              quality={100}
              className="size-[300px] rounded-xl transition-opacity duration-500 group-hover:opacity-20 dark:group-hover:opacity-5"
              width={300}
              height={300}
              src={image}
              alt={title}
            />
          </div>
          <div className="absolute bottom-0 h-auto overflow-hidden text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <Typography variant="h4" as="h3" className="my-6">
              {title}
            </Typography>
            <p className="mx-4 my-6 font-semibold">{description}</p>
          </div>
        </SectionContent>
      </a>
    </li>
  )
}
