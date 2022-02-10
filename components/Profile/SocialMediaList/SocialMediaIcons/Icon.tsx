import classNames from 'classnames'

export const Icon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  const { children, className, ...rest } = props

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      className={classNames(
        'h-8 w-8 fill-current text-black dark:text-white',
        className
      )}
      {...rest}
    >
      {children}
    </svg>
  )
}
