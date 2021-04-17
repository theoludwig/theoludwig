import { useState } from 'react'

import { HamburgerIcon } from './HamburgerIcon'
import { BrandLogo } from './BrandLogo'
import { Navigation } from './Navigation'

export const Header: React.FC = () => {
  const [isActive, setIsActive] = useState(false)

  const handleToggleNavbar = (): void => {
    setIsActive(!isActive)
  }

  return (
    <>
      <header className='Header'>
        <div className='container'>
          <BrandLogo />
          <HamburgerIcon
            isActive={isActive}
            handleToggleNavbar={handleToggleNavbar}
          />
          <Navigation isActive={isActive} />
        </div>
      </header>

      <style jsx>
        {`
          .Header {
            position: fixed;
            width: 100%;
            top: 0;
            left: 0;
            right: 0;
            z-index: 100;

            display: flex;
            flex-flow: row wrap;
            align-items: center;
            justify-content: space-between;
            padding: 0.5rem 1rem;

            border-bottom: var(--border-header-footer);
            background-color: var(--color-background);
          }
          @media (min-width: 992px) {
            .Header {
              display: flex;
              flex-basis: auto;
              flex-flow: row nowrap;
              justify-content: flex-start;
            }
          }
          .Header > .container {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
          }
          @media (min-width: 992px) {
            .Header > .container {
              flex-wrap: nowrap;
            }
          }
        `}
      </style>
    </>
  )
}
