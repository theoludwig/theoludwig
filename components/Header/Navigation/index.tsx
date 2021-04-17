import classNames from 'classnames'
import useTranslation from 'next-translate/useTranslation'

import { NavigationLink } from './NavigationLink'

type NavigationComponent = React.FC<{ isActive: boolean }>

export const Navigation: NavigationComponent = props => {
  const { t } = useTranslation()

  return (
    <>
      <nav className='Header__navbar'>
        <ul
          className={classNames('navbar__list', {
            'navbar__list-active': props.isActive
          })}
        >
          <NavigationLink path='/'>{t('common:home')}</NavigationLink>
          <NavigationLink path='/setup'>Setup</NavigationLink>
        </ul>
      </nav>

      <style jsx>
        {`
          @media (min-width: 992px) {
            .Header__navbar {
              display: flex;
              flex-basis: auto;
            }
          }
          .Header__navbar {
            flex-basis: 100%;
            flex-grow: 1;
            align-items: center;
          }
          .navbar__list {
            display: flex;
            flex-direction: row;
            margin-left: auto;
          }
          .navbar__list.navbar__list-active {
            margin: 0 !important;
            display: flex;
          }
          @media (max-width: 992px) {
            .navbar__list {
              display: none;
              flex-direction: column;
              align-items: center;
              padding-left: 0;
              list-style: none;
            }
          }
        `}
      </style>
    </>
  )
}
