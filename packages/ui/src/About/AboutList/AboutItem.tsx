export interface AboutItemProps {
  label: string
  value: string
  link?: string
}

export const AboutItem: React.FC<AboutItemProps> = (props) => {
  const { label, value, link } = props

  return (
    <li className="flex items-center justify-between sm:justify-start">
      <strong className="w-24 text-sm text-black lg:w-32 dark:text-white">
        {label}
      </strong>
      <span className="dark:text-gray block text-sm font-normal text-black">
        {link != null ? (
          <a className="hover:underline" href={link}>
            {value}
          </a>
        ) : (
          value
        )}
      </span>
    </li>
  )
}
