import Image from "next/image"

import { ShadowContainer } from "@/components/design/ShadowContainer"

export interface PortfolioItemProps {
  title: string
  description: string
  link: string
  image: string
}

export const PortfolioItem = (props: PortfolioItemProps): JSX.Element => {
  const { title, description, link, image } = props

  return (
    <ShadowContainer className="relative cursor-pointer items-center sm:ml-10">
      <a
        className="group inline-flex justify-center"
        target="_blank"
        rel="noopener noreferrer"
        href={link}
        aria-label={title}
      >
        <div className="flex justify-center">
          <Image
            quality={100}
            className="h-auto w-auto transition-opacity duration-500 group-hover:opacity-20 dark:group-hover:opacity-5"
            width={300}
            height={300}
            src={image}
            alt={title}
          />
        </div>
        <div className="absolute bottom-0 h-auto overflow-hidden text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <h3 className="my-6 text-xl font-semibold text-yellow dark:text-yellow-dark">
            {title}
          </h3>
          <p className="my-6">{description}</p>
        </div>
      </a>
    </ShadowContainer>
  )
}
