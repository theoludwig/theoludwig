import classNames from 'classnames'

type ShadowContainerProps = React.ComponentPropsWithRef<'div'>

export const ShadowContainer: React.FC<ShadowContainerProps> = (props) => {
  const { children, className, ...rest } = props

  return (
    <>
      <div
        className={classNames(
          'shadow-container mb-12 h-full max-w-full break-words',
          className
        )}
        {...rest}
      >
        {children}
      </div>

      <style jsx>
        {`
          .shadow-container {
            box-shadow: 0px 0px 6px 6px rgba(0, 0, 0, 0.25);
            border: 1px solid black;
            border-radius: 1rem;
          }
        `}
      </style>
    </>
  )
}
