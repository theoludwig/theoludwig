interface ProfileItemProps {
  title: string
  value: string
  link?: string
}

export const ProfileItem: React.FC<ProfileItemProps> = (props) => {
  const { title, value, link } = props

  return (
    <>
      <li className='profile-list__item'>
        <strong className='profile-list__item-title text-black dark:text-white'>
          {title}
        </strong>
        <span className='profile-list__item-info text-gray dark:text-gray-dark'>
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

      <style jsx>
        {`
          .profile-list__item {
            margin-bottom: 13px;
          }
          .profile-list__item::after,
          .profile-list__item::before {
            content: ' ';
            display: table;
          }
          .profile-list__item::after {
            clear: both;
          }
          .profile-list__item-title {
            display: block;
            width: 120px;
            float: left;
            font-size: 12px;
            font-weight: 700;
            line-height: 20px;
            text-transform: uppercase;
          }
          .profile-list__item-info {
            display: block;
            margin-left: 125px;
            font-size: 15px;
            font-weight: 400;
            line-height: 20px;
          }

          @media (max-width: 576px) {
            .profile-list__item-title {
              margin-bottom: 3px;
            }
            .profile-list__item-info {
              margin-left: 0;
              margin-bottom: 15px;
            }
            .profile-list__item-info,
            .profile-list__item-title {
              width: 100%;
              float: none;
              line-height: 1.2;
            }
          }
        `}
      </style>
    </>
  )
}
