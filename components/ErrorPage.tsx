import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'

export interface ErrorPageProps {
  statusCode: number
  message: string
}

export const ErrorPage: React.FC<ErrorPageProps> = props => {
  const { message, statusCode } = props
  const { t } = useTranslation()

  return (
    <>
      <h1>
        {t('errors:error')} <span className='important'>{statusCode}</span>
      </h1>
      <p className='text-center'>
        {message} <Link href='/'>{t('errors:returnToHomePage')}</Link>
      </p>

      <style jsx global>{`
        .content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-width: 100vw;
          min-height: 100%;
        }
        #__next {
          padding-top: 0;
        }
      `}
      </style>
    </>
  )
}
