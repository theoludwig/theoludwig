import Image from 'next/image'

import { Tooltip } from 'components/design/Tooltip'
import { LanguageButton } from './LanguageButton'

interface LanguageFlagProps {
  imageLink: string
  title: string
  lang: string
}

export const LanguageFlag: React.FC<LanguageFlagProps> = (props) => {
  const { lang, title, imageLink } = props

  return (
    <>
      <div className='LanguageFlag'>
        <LanguageButton lang={lang}>
          <Tooltip title={title}>
            <Image alt={title} src={imageLink} width={31} height={31} />
          </Tooltip>
        </LanguageButton>
      </div>

      <style jsx>
        {`
          .LanguageFlag {
            margin-right: 7px;
          }
          @media (max-width: 700px) {
            .LanguageFlag {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}
