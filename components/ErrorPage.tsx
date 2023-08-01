import Link from 'next/link'

import { getI18n } from '@/i18n/i18n.server'

export interface ErrorPageProps {
  statusCode: number
  message: string
}

export const ErrorPage = (props: ErrorPageProps): JSX.Element => {
  const { message, statusCode } = props
  const i18n = getI18n()

  return (
    <main className='flex flex-col flex-1 items-center justify-center'>
      <h1 className='my-6 text-4xl font-semibold'>
        {i18n.translate('errors.error')}{' '}
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
          {i18n.translate('errors.return-to-home-page')}
        </Link>
      </p>
    </main>
  )
}
