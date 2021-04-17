import setLanguage from 'next-translate/setLanguage'

interface LanguageButtonProps {
  lang: string
}

export const LanguageButton: React.FC<LanguageButtonProps> = (props) => {
  return (
    <>
      <span
        onClick={async () => await setLanguage(props.lang)}
        className='important'
      >
        {props.children}
      </span>

      <style jsx>
        {`
          span {
            cursor: pointer;
          }
          span:hover {
            text-decoration: underline;
          }
        `}
      </style>
    </>
  )
}
