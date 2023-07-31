import { useMemo } from 'react'

interface FooterVersionProps {
  version: string
}

export const FooterVersion = (props: FooterVersionProps): JSX.Element => {
  const { version } = props

  const versionLink = useMemo(() => {
    return `https://github.com/theoludwig/theoludwig/releases/tag/v${version}`
  }, [version])

  return (
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
  )
}
