import useTranslation from 'next-translate/useTranslation'

import type { PortfolioItemProps } from './PortfolioItem'
import { PortfolioItem } from './PortfolioItem'

export const Portfolio: React.FC = () => {
  const { t } = useTranslation('home')

  const items: PortfolioItemProps[] = t(
    'home:portfolio.items',
    {},
    {
      returnObjects: true
    }
  )

  return (
    <div className='flex w-full flex-wrap justify-center px-3'>
      {items.map((item, index) => {
        return <PortfolioItem key={index} {...item} />
      })}
    </div>
  )
}
