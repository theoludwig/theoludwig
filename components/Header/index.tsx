import { cookies } from 'next/headers'
import Link from 'next/link'
import Image from 'next/image'

import { getI18n } from '@/i18n/i18n.server'

import { Locales } from './Locales'
import { SwitchTheme } from './SwitchTheme'

export const Header = (): JSX.Element => {
  const cookiesStore = cookies()
  const i18n = getI18n()

  return (
    <header className='sticky top-0 z-50 flex w-full justify-between border-b-2 border-gray-600 bg-white px-6 py-2 dark:border-gray-400 dark:bg-black'>
      <Link href='/'>
        <div className='flex items-center justify-center'>
          <Image
            quality={100}
            width={60}
            height={60}
            src='/images/icon_small.png'
            alt='Théo LUDWIG'
            priority
          />
          <strong className='ml-1 hidden font-headline font-semibold text-yellow dark:text-yellow-dark xs:block'>
            Théo LUDWIG
          </strong>
        </div>
      </Link>
      <div className='flex justify-between'>
        <div className='flex flex-col items-center justify-center px-6'>
          <Link
            href='/blog'
            data-cy='header-blog-link'
            className='text-yellow hover:underline dark:text-yellow-dark'
          >
            Blog
          </Link>
        </div>
        <Locales
          currentLocale={i18n.locale}
          cookiesStore={cookiesStore.toString()}
        />
        <SwitchTheme cookiesStore={cookiesStore.toString()} />
      </div>
    </header>
  )
}
