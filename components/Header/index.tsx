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
    <header className='bg-white sticky top-0 z-50 flex w-full justify-between px-6 py-2 border-b-2 border-gray-600 dark:border-gray-400 dark:bg-black'>
      <Link href='/'>
        <a>
          <div className='flex items-center justify-center'>
            <Image
              width={60}
              height={60}
              src='/images/divlo_icon_small.png'
              alt='Divlo'
            />
            <strong className='ml-1 font-headline font-semibold hidden xs:block text-yellow dark:text-yellow-dark'>
              Divlo
            </strong>
          </div>
        </a>
      </Link>
      <div className='flex justify-between'>
        <div className='flex flex-col justify-center items-center px-6'>
          <Link href='/blog'>
            <a className='text-yellow dark:text-yellow-dark hover:underline'>
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
