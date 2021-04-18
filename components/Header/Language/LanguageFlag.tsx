import Image from 'next/image'

export interface LanguageFlagProps {
  language: string
}

export const LanguageFlag: React.FC<LanguageFlagProps> = (props) => {
  const { language } = props

  return (
    <>
      <Image
        width={35}
        height={35}
        src={`/images/languages/${language}.svg`}
        alt={language}
      />
      <p className='language-title'>{language.toUpperCase()}</p>

      <style jsx>
        {`
          .language-title {
            margin: 0 8px 0 10px;
            font-size: 16px;
            font-family: 'Arial', 'sans-serif';
          }
        `}
      </style>
    </>
  )
}
