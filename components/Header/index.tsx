import Link from 'next/link'
import Image from 'next/image'

import { Language } from './Language'
import { SwitchTheme } from './SwitchTheme'

export const Header: React.FC = () => {
  return (
    <>
      <header className='header'>
        <div className='container'>
          <nav className='navbar navbar-fixed-top'>
            <Link href='/'>
              <a className='navbar__brand-link'>
                <div className='navbar__brand'>
                  <Image
                    width={60}
                    height={60}
                    src='/images/divlo_icon_small.png'
                    alt='Divlo'
                  />
                  <strong className='navbar__brand-title'>Divlo</strong>
                </div>
              </a>
            </Link>
            <div className='navbar__buttons'>
              <Language />
              <SwitchTheme />
            </div>
          </nav>
        </div>
      </header>

      <style jsx>
        {`
          .header {
            background-color: var(--color-background);
            border-bottom: var(--border-header-footer);
            padding: 0.5rem 1rem;
            position: fixed;
            width: 100%;
            top: 0;
            left: 0;
            right: 0;
            z-index: 100;
            height: var(--header-height);
          }
          .container {
            max-width: 1280px;
            width: 100%;
            margin: auto;
          }
          .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .navbar-fixed-top {
            position: sticky;
            top: 0;
            z-index: 200;
          }
          .navbar__brand-link {
            color: var(--color-text-1);
            text-decoration: none;
            font-size: 16px;
          }
          .navbar__brand {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .navbar__brand-title {
            font-weight: 600;
            margin-left: 10px;
          }
          .navbar__buttons {
            display: flex;
            justify-content: space-between;
          }
          @media (max-width: 320px) {
            .navbar__brand-title {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}
