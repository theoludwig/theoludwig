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
    return `https://github.com/Divlo/Divlo/releases/tag/v${version}`
  }, [version])

  return (
    <footer className='flex flex-col items-center justify-center border-t-2 border-gray-600 bg-white py-6 text-lg dark:border-gray-400 dark:bg-black'>
      <p>
        <Link
          href='/'
          className='text-yellow hover:underline dark:text-yellow-dark'
        >
          Divlo
        </Link>{' '}
        | {t('common:all-rights-reserved')}
      </p>
      <p className='mt-1'>
        Version{' '}
        <a
          data-cy='version-link'
          className='text-yellow hover:underline dark:text-yellow-dark'
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
