interface SocialMediaItemProps {
  link: string
  ariaLabel: string
}

export const SocialMediaItem: React.FC<SocialMediaItemProps> = (props) => {
  const { link, ariaLabel, children } = props

  return (
    <li className='inline-block mx-4 my-1'>
      <a
        href={link}
        aria-label={ariaLabel}
        target='_blank'
        rel='noopener noreferrer'
        className='relative inline-block bg-transparent'
      >
        {children}
      </a>
    </li>
  )
}
