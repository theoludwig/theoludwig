export interface SocialMediaItemProps extends React.PropsWithChildren {
  link: string
  ariaLabel: string
}

export const SocialMediaItem: React.FC<SocialMediaItemProps> = (props) => {
  const { link, ariaLabel, children } = props

  return (
    <li className="mx-4 my-1 inline-block">
      <a
        href={link}
        aria-label={ariaLabel}
        target="_blank"
        className="relative inline-block bg-transparent transition-all duration-300 ease-in-out hover:scale-110"
      >
        {children}
      </a>
    </li>
  )
}
