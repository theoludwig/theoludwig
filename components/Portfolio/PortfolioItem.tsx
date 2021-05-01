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
    <ShadowContainer className='cursor-pointer relative items-center'>
      <a
        className='portfolio-link inline-flex justify-center'
        target='_blank'
        rel='noopener noreferrer'
        href={link}
        aria-label={title}
      >
        <div className='portfolio-figure flex justify-center'>
          <Image width={300} height={300} src={image} alt={title} />
        </div>
        <div className='portfolio-caption h-auto absolute text-center overflow-hidden bottom-0'>
          <h3 className='portfolio-title text-yellow text-xl font-semibold my-6'>
            {title}
          </h3>
          <p className='portfolio-description my-6'>{description}</p>
        </div>
      </a>

      <style jsx global>
        {`
          .portfolio-figure img[alt='${title}'] {
            max-height: 300px;
            max-width: 300px;
            transition: opacity 0.5s ease;
          }
          .portfolio-link:hover img[alt='${title}'] {
            opacity: 0.05;
          }
        `}
      </style>
      <style jsx>
        {`
          .portfolio-caption {
            transition: opacity 0.5s ease;
            opacity: 0;
            width: 80%;
          }
          .portfolio-link:hover .portfolio-caption {
            opacity: 1;
          }
        `}
      </style>
    </ShadowContainer>
  )
}
