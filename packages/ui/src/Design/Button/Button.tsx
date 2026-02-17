import { classNames } from "@repo/config-tailwind/classNames"
import { Link as NextLink } from "@repo/i18n/routing"

import { Spinner } from "../Spinner/Spinner.tsx"
import { Ripple } from "./Ripple.tsx"

const BUTTON_VARIANTS = ["solid", "outline"] as const
type ButtonVariant = (typeof BUTTON_VARIANTS)[number]

const BUTTON_SIZES = ["small", "medium", "large"] as const
type ButtonSize = (typeof BUTTON_SIZES)[number]

const buttonVariants = (options?: { variant?: ButtonVariant; size?: ButtonSize }): string => {
  const { variant = "solid", size = "medium" } = options ?? {}
  return classNames(
    "relative inline-flex items-center justify-center overflow-hidden rounded-md text-base font-semibold transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
    {
      "bg-primary text-white hover:bg-primary/80": variant === "solid",

      "border border-primary/60 bg-transparent text-primary hover:border-primary hover:bg-primary hover:text-white dark:border-primary-dark/60 dark:text-primary-dark dark:hover:border-primary-dark":
        variant === "outline",
    },
    {
      "h-9 rounded-md px-3": size === "small",
      "h-10 px-4 py-2": size === "medium",
      "h-11 rounded-md px-8": size === "large",
    },
  )
}

interface ButtonBaseProps {
  variant?: ButtonVariant
  size?: ButtonSize

  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  disabled?: boolean
  isLoading?: boolean
}

interface ButtonElementProps extends React.ComponentPropsWithoutRef<"button"> {}
interface LinkElementProps extends React.ComponentPropsWithoutRef<typeof NextLink> {}

export type ButtonLinkProps = ButtonBaseProps & LinkElementProps & { href: string }
export type ButtonButtonProps = ButtonBaseProps & ButtonElementProps & { href?: never }

export type ButtonProps = ButtonButtonProps | ButtonLinkProps

/**
 * Buttons allow users to take actions, and make choices, with a single click.
 * @param props
 * @returns
 */
export const Button: React.FC<ButtonProps> = (props) => {
  const rippleColor = props.variant === "outline" ? "rgb(30, 64, 175)" : "rgb(229, 231, 235)"

  if (typeof props.href === "string") {
    const { variant, size, leftIcon, rightIcon, className, children, ...rest } = props

    return (
      <NextLink className={classNames(buttonVariants({ variant, size }), className)} {...rest}>
        {leftIcon != null ? <span className="mr-2">{leftIcon}</span> : null}
        <span>{children}</span>
        {rightIcon != null ? <span className="ml-2">{rightIcon}</span> : null}

        <Ripple color={rippleColor} />
      </NextLink>
    )
  }

  const {
    variant,
    size,
    leftIcon,
    rightIcon,
    className,
    isLoading = false,
    disabled = false,
    children,
    ...rest
  } = props

  const isDisabled = disabled || isLoading

  const leftIconElement = isLoading ? (
    <Spinner size={18} className="text-inherit dark:text-inherit" />
  ) : (
    leftIcon
  )

  return (
    <button
      className={classNames(buttonVariants({ variant, size }), className)}
      disabled={isDisabled}
      {...rest}
    >
      {leftIconElement != null ? <span className="mr-2">{leftIconElement}</span> : null}
      <span>{children}</span>
      {rightIcon != null && !isLoading ? <span className="ml-2">{rightIcon}</span> : null}

      <Ripple color={rippleColor} />
    </button>
  )
}
