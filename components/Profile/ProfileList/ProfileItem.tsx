interface ProfileItemProps {
  title: string
  value: string
  link?: string
}

export const ProfileItem: React.FC<ProfileItemProps> = (props) => {
  const { title, value, link } = props

  return (
    <li className='mb-3 before:table after:clear-both after:table'>
      <strong className='float-left block w-28 text-sm font-bold text-black dark:text-white'>
        {title}
      </strong>
      <span className='ml-0 mb-4 block text-sm font-normal text-gray dark:text-gray-dark sm:mb-0 sm:ml-32'>
        {link != null ? (
          <a
            className='text-gray hover:underline dark:text-gray-dark'
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
