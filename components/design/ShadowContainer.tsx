import classNames from 'clsx'

type ShadowContainerProps = React.ComponentPropsWithRef<'div'>

export const ShadowContainer = (props: ShadowContainerProps): JSX.Element => {
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
