import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames'

type NavigationLinkComponent = React.FC<{ path: string }>

export const NavigationLink: NavigationLinkComponent = props => {
  const { pathname } = useRouter()
  const isCurrentPage = pathname === props.path

  return (
    <>
      <li className='navbar-item'>
        <Link href={props.path}>
          <a
            className={classNames('navbar-link', {
              'navbar-link-active': isCurrentPage
            })}
          >
            {props.children}
          </a>
        </Link>
      </li>

      <style jsx>
        {`
          .navbar-link {
            display: block;
            padding: 0.5rem 1rem;
          }
          .navbar-link:hover {
            text-decoration: none;
            color: rgba(255, 255, 255, 0.75);
          }
          .navbar-link,
          .navbar-link-active {
            color: rgba(255, 255, 255, 0.5);
          }
          .navbar-link-active,
          .navbar-link-active:hover {
            color: var(--text-color);
          }
          .navbar-item {
            list-style: none;
          }
          .navbar-link {
            font-size: 16px;
            padding: 0.5rem;
          }
        `}
      </style>
    </>
  )
}
