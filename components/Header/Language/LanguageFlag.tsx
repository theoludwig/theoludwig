import Image from 'next/image'

export interface LanguageFlagProps {
  language: string
}

export const LanguageFlag: React.FC<LanguageFlagProps> = (props) => {
  const { language } = props

  return (
    <>
      <Image
        quality={100}
        width={35}
        height={35}
        src={`/images/languages/${language}.svg`}
        alt={language}
      />
      <p data-cy='language-flag-text' className='mx-2 text-base'>
        {language.toUpperCase()}
      </p>
    </>
  )
}
