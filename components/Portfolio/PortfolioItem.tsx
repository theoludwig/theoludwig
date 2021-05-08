import { ShadowContainer } from 'components/design/ShadowContainer'
import Image from 'next/image'

export interface PortfolioItemProps {
  title: string
  description: string
  link: string
  image: string
}

export const PortfolioItem: React.FC<PortfolioItemProps> = (props) => {
  const { title, description, link, image } = props

  return (
    <ShadowContainer className='cursor-pointer relative items-center sm:ml-10'>
      <a
        className='group inline-flex justify-center'
        target='_blank'
        rel='noopener noreferrer'
        href={link}
        aria-label={title}
      >
        <div className='flex justify-center'>
          <Image
            className='transition-opacity duration-500 group-hover:opacity-20 dark:group-hover:opacity-5'
            width={300}
            height={300}
            src={image}
            alt={title}
          />
        </div>
        <div className='opacity-0 transition-opacity duration-500 h-auto absolute text-center overflow-hidden bottom-0 group-hover:opacity-100'>
          <h3 className='text-yellow text-xl font-semibold my-6 dark:text-yellow-dark'>
            {title}
          </h3>
          <p className='my-6'>{description}</p>
        </div>
      </a>
    </ShadowContainer>
  )
}
