import classNames from "clsx"

export const Icon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  const { children, className, ...rest } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classNames(
        "size-8 fill-current text-black dark:text-white",
        className,
      )}
      {...rest}
    >
      {children}
    </svg>
  )
}
