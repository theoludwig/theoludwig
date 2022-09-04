import useTranslation from 'next-translate/useTranslation'

import type { InterestParagraphProps } from './InterestParagraph'
import { InterestParagraph } from './InterestParagraph'
import { InterestsList } from './InterestsList'

export const Interests: React.FC = () => {
  const { t } = useTranslation()

  const paragraphs: InterestParagraphProps[] = t(
    'home:interests.paragraphs',
    {},
    {
      returnObjects: true
    }
  )

  return (
    <div className='max-w-full'>
      {paragraphs.map((paragraph, index) => {
        return <InterestParagraph key={index} {...paragraph} />
      })}
      <InterestsList />
    </div>
  )
}
