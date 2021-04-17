import Image from 'next/image'

export interface PortfolioItemProps {
  title: string
  description: string
  link: string
  image: string
}

export const PortfolioItem: React.FC<PortfolioItemProps> = props => {
  const { title, description, link, image } = props

  return (
    <>
      <div className='col-sm-24 col-md-10 col-xl-7 portfolio-grid'>
        <a
          className='portfolio-link'
          target='_blank'
          rel='noopener noreferrer'
          href={link}
          aria-label={title}
        >
          <div className='portfolio-figure'>
            <Image width={300} height={300} src={image} alt={title} />
          </div>
          <div className='portfolio-caption'>
            <h3 className='portfolio-title important'>{title}</h3>
            <p className='portfolio-description'>{description}</p>
          </div>
        </a>
      </div>

      <style jsx global>
        {`
        .portfolio-figure img[alt='${title}'] {
          max-height: 300px;
          max-width: 300px;
          transition: opacity 0.5s ease;
        }
        .portfolio-grid:hover img[alt='${title}'] {
          opacity: 0.05;
        }
      `}
      </style>

      <style jsx>
        {`
          .portfolio-grid {
            display: flex;
            align-items: center;
            position: relative;
            flex-direction: column;
            word-wrap: break-word;
            box-shadow: 0px 0px 6px 6px rgba(0, 0, 0, 0.25);
            border: 1px solid black;
            border-radius: 1rem;
            margin: 0 0 50px 0;
            cursor: pointer;
          }
          /* col-md */
          @media (min-width: 768px) {
            .portfolio-grid {
              margin: 0 30px 50px 30px;
            }
          }
          /* col-xl */
          @media (min-width: 1200px) {
            .portfolio-grid {
              margin: 0 20px 50px 20px;
            }
          }
          .portfolio-figure {
            display: flex;
            justify-content: center;
          }
          .portfolio-caption {
            transition: opacity 0.5s ease;
            opacity: 0;
            height: 0;
            overflow: hidden;
          }
          .portfolio-description {
            font-size: 16px;
          }
          .portfolio-grid:hover .portfolio-caption {
            opacity: 1;
            height: auto;
            position: absolute;
            bottom: 0;
            text-align: center;
            width: 80%;
          }
          .portfolio-grid:hover .portfolio-link {
            color: var(--text-color);
            display: flex;
            justify-content: center;
          }
        `}
      </style>
    </>
  )
}
