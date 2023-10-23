import classNames from "clsx"

export interface LoaderProps {
  width?: number
  height?: number
  className?: string
}

export const Loader = (props: LoaderProps): JSX.Element => {
  const { width = 50, height = 50, className } = props

  return (
    <div
      style={{
        width,
        height,
      }}
      className={classNames(
        "animate-spin inline-block border-[3px] border-current border-t-transparent text-yellow dark:text-yellow-dark rounded-full",
        className,
      )}
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}
