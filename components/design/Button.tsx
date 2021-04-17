import { forwardRef } from 'react'

type ButtonProps = React.ComponentPropsWithRef<'button'>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { children, ...rest } = props

    return (
      <>
        <button ref={ref} {...rest} className='btn btn-dark'>
          {children}
        </button>

        <style jsx>
          {`
            .btn {
              cursor: pointer;
              border: 1px solid transparent;
              padding: 0.375rem 0.75rem;
              font-size: 1rem;
              line-height: 1.5;
              border-radius: 0.25rem;
              transition: color 0.15s ease-in-out,
                background-color 0.15s ease-in-out,
                border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
            }
            .btn-dark {
              color: #fff;
              background-color: #343a40;
              border-color: #343a40;
            }
            .btn-dark:hover {
              color: #fff;
              background-color: #23272b;
              border-color: #1d2124;
            }
          `}
        </style>
      </>
    )
  }
)
