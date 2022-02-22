import Link from 'next/link'
import Image from 'next/image'

import { Language } from './Language'
import { SwitchTheme } from './SwitchTheme'

export interface HeaderProps {
  showLanguage?: boolean
}

export const Header: React.FC<HeaderProps> = (props) => {
  const { showLanguage = false } = props

  return (
    <header className='sticky top-0 z-50 flex w-full justify-between border-b-2 border-gray-600 bg-white px-6 py-2 dark:border-gray-400 dark:bg-black'>
      <Link href='/'>
        <a>
          <div className='flex items-center justify-center'>
            <Image
              quality={100}
              width={60}
              height={60}
              src='/images/divlo_icon_small.png'
              alt='Divlo'
            />
            <strong className='ml-1 hidden font-headline font-semibold text-yellow dark:text-yellow-dark xs:block'>
              Divlo
            </strong>
          </div>
        </a>
      </Link>
      <div className='flex justify-between'>
        <div className='flex flex-col items-center justify-center px-6'>
          <Link href='/blog'>
            <a
              data-cy='header-blog-link'
              className='text-yellow hover:underline dark:text-yellow-dark'
            >
              Blog
            </a>
          </Link>
        </div>
        {showLanguage && <Language />}
        <SwitchTheme />
      </div>
    </header>
  )
}
