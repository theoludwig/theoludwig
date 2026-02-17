import { classNames } from "@repo/config-tailwind/classNames"

export interface SpinnerProps {
  size?: number
  className?: string
}

/**
 * Spinner provide a visual cue that an action is processing.
 * @param props
 * @returns
 */
export const Spinner: React.FC<SpinnerProps> = (props) => {
  const { size = 50, className } = props

  return (
    <div
      style={{
        width: size,
        height: size,
      }}
      className={classNames(
        "flex animate-spin rounded-full border-2 border-current border-t-transparent text-primary dark:text-primary-dark",
        className,
      )}
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}
