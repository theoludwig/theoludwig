import useTranslation from 'next-translate/useTranslation'

import { PortfolioItem, PortfolioItemProps } from './PortfolioItem'

export const Portfolio: React.FC = () => {
  const { t } = useTranslation('home')

  const items: PortfolioItemProps[] = t('home:portfolio.items', {}, {
    returnObjects: true
  })

  return (
    <>
      <div className='container-fluid'>
        <div className='row justify-content-center'>
          {items.map((item, index) => {
            return <PortfolioItem key={index} {...item} />
          })}
        </div>
      </div>
    </>
  )
}
