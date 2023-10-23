interface SocialMediaItemProps extends React.PropsWithChildren {
  link: string
  ariaLabel: string
}

export const SocialMediaItem = (props: SocialMediaItemProps): JSX.Element => {
  const { link, ariaLabel, children } = props

  return (
    <li className="mx-4 my-1 inline-block">
      <a
        href={link}
        aria-label={ariaLabel}
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-block bg-transparent"
      >
        {children}
      </a>
    </li>
  )
}
