import classNames from 'classnames'

type ShadowContainerProps = React.ComponentPropsWithRef<'div'>

export const ShadowContainer: React.FC<ShadowContainerProps> = (props) => {
  const { children, className, ...rest } = props

  return (
    <div
      className={classNames(
        'mb-12 h-full max-w-full break-words rounded-2xl border border-solid border-[#000] shadow-light dark:shadow-dark ',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}
