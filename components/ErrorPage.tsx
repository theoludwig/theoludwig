import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'

import type { FooterProps } from './Footer'
import { Footer } from './Footer'
import { Header } from './Header'

export interface ErrorPageProps extends FooterProps {
  statusCode: number
  message: string
}

export const ErrorPage: React.FC<ErrorPageProps> = (props) => {
  const { message, statusCode, version } = props
  const { t } = useTranslation()

  return (
    <>
      <div className='flex h-screen flex-col pt-0'>
        <Header showLanguage />
        <main className='flex min-w-full flex-1 flex-col items-center justify-center'>
          <h1 className='my-6 text-4xl font-semibold'>
            {t('errors:error')}{' '}
            <span
              className='text-yellow dark:text-yellow-dark'
              data-cy='status-code'
            >
              {statusCode}
            </span>
          </h1>
          <p className='text-center text-lg'>
            {message}{' '}
            <Link
              href='/'
              className='text-yellow hover:underline dark:text-yellow-dark'
            >
              {t('errors:return-to-home-page')}
            </Link>
          </p>
        </main>
        <Footer version={version} />
      </div>
    </>
  )
}
