interface ProfileItemProps {
  title: string
  value: string
  link?: string
}

export const ProfileItem: React.FC<ProfileItemProps> = props => {
  const { title, value, link } = props

  return (
    <>
      <li className='profile-list__item'>
        <strong className='profile-list__item-title'>{title}</strong>
        <span className='profile-list__item-info'>
          {link != null ? (
            <a className='profile-list__link' href={link}>
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
            color: #d4d4d5;
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
            color: #84898e;
          }
          .profile-list__link {
            color: #84898e;
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
