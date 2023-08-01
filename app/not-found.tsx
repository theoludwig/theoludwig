import Link from 'next/link'

import { getI18n } from '@/i18n/i18n.server'

const NotFound = (): JSX.Element => {
  const i18n = getI18n()

  return (
    <main className='flex flex-col flex-1 items-center justify-center'>
      <h1 className='my-6 text-4xl font-semibold'>
        {i18n.translate('errors.error')}{' '}
        <span
          className='text-yellow dark:text-yellow-dark'
          data-cy='status-code'
        >
          404
        </span>
      </h1>
      <p className='text-center text-lg'>
        {i18n.translate('errors.not-found')}{' '}
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

export default NotFound
