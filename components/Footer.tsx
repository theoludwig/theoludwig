import { useMemo } from 'react'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

export interface FooterProps {
  version: string
}

export const Footer: React.FC<FooterProps> = (props) => {
  const { t } = useTranslation()
  const { version } = props

  const versionLink = useMemo(() => {
    if (version !== '0.0.0-development') {
      return `https://github.com/Divlo/Divlo/releases/tag/v${version}`
    }
    return 'https://github.com/Divlo/Divlo/tree/develop'
  }, [version])

  return (
    <footer className='bg-white flex flex-col items-center justify-center py-6 text-lg border-t-2 border-gray-600 dark:border-gray-400 dark:bg-black'>
      <p>
        <Link href='/'>
          <a className='hover:underline text-yellow dark:text-yellow-dark'>
            Divlo
          </a>
        </Link>{' '}
        | {t('common:allRightsReserved')}
      </p>
      <p className='mt-1'>
        Version{' '}
        <a
          className='hover:underline text-yellow dark:text-yellow-dark'
          href={versionLink}
          target='_blank'
          rel='noopener noreferrer'
        >
          {version}
        </a>
      </p>
    </footer>
  )
}
