interface ProfileItemProps {
  title: string
  value: string
  link?: string
}

export const ProfileItem: React.FC<ProfileItemProps> = (props) => {
  const { title, value, link } = props

  return (
    <li className='mb-3 after:clear-both after:table before:table'>
      <strong className='uppercase text-xs float-left font-bold w-28 block text-black dark:text-white'>
        {title}
      </strong>
      <span className='profile-list__item-info block text-sm font-normal ml-0 mb-4 sm:mb-0 sm:ml-32 text-gray dark:text-gray-dark'>
        {link != null ? (
          <a
            className='text-gray dark:text-gray-dark hover:underline'
            href={link}
          >
            {value}
          </a>
        ) : (
          value
        )}
      </span>
    </li>
  )
}
