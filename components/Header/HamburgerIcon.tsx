import classNames from 'classnames'

type HamburgerIconComponent = React.FC<{
  isActive: boolean
  handleToggleNavbar: () => void
}>

export const HamburgerIcon: HamburgerIconComponent = props => {
  return (
    <>
      <div
        onClick={props.handleToggleNavbar}
        className={classNames('Header__hamburger', {
          'Header__hamburger-active': props.isActive
        })}
      >
        <span />
      </div>

      <style jsx>
        {`
          .Header__hamburger {
            display: none;
            width: 56px;
            height: 40px;
            cursor: pointer;
            background-color: transparent;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 0.25rem;
            position: relative;
          }
          .Header__hamburger > span,
          .Header__hamburger > span::before,
          .Header__hamburger > span::after {
            position: absolute;
            width: 22px;
            height: 1.3px;
            background-color: rgba(255, 255, 255);
          }
          .Header__hamburger > span {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            transition: background-color 0.3s ease-in-out;
          }
          .Header__hamburger > span::before,
          .Header__hamburger > span::after {
            content: '';
            transition: transform 0.3s ease-in-out;
          }
          .Header__hamburger > span::before {
            transform: translateY(-8px);
          }
          .Header__hamburger > span::after {
            transform: translateY(8px);
          }
          .Header__hamburger-active span {
            background-color: transparent;
          }
          .Header__hamburger-active > span::before {
            transform: translateY(0px) rotateZ(45deg);
          }
          .Header__hamburger-active > span::after {
            transform: translateY(0px) rotateZ(-45deg);
          }
          /* Hamburger icon on Mobile */
          @media (max-width: 992px) {
            .Header__hamburger {
              display: flex;
            }
          }
        `}
      </style>
    </>
  )
}
