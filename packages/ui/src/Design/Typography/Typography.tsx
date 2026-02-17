import { classNames } from "@repo/config-tailwind/classNames"

const TYPOGRAPHY_VARIANTS = ["h1", "h2", "h3", "h4", "h5", "h6", "text1", "text2"] as const
type TypographyVariant = (typeof TYPOGRAPHY_VARIANTS)[number]

const typographyVariants = (options?: { variant?: TypographyVariant }): string => {
  const { variant = "text1" } = options ?? {}
  return classNames({
    "text-4xl font-semibold text-primary dark:text-primary-dark": variant === "h1",
    "text-3xl font-semibold text-primary dark:text-primary-dark": variant === "h2",
    "text-2xl font-semibold text-primary dark:text-primary-dark": variant === "h3",
    "text-xl font-semibold text-primary dark:text-primary-dark": variant === "h4",
    "text-xl font-medium text-primary dark:text-primary-dark": variant === "h5",
    "text-lg font-medium text-primary dark:text-primary-dark": variant === "h6",
    "text-base wrap-break-word": variant === "text1",
    "text-sm wrap-break-word": variant === "text2",
  })
}

export type TypographyProps<Component extends React.ElementType = "p"> = {
  as?: Component
} & React.ComponentPropsWithoutRef<Component> & {
    variant?: TypographyVariant
  }

/**
 * Typography and styling abstraction component used to ensure consistency and standardize text throughout your application.
 * @param props
 * @returns
 */
export const Typography = <Component extends React.ElementType = "p">(
  props: TypographyProps<Component>,
): React.ReactNode => {
  const { variant = "text1", as = "p", children, className, ...rest } = props

  const ComponentAs = as

  return (
    <ComponentAs className={classNames(typographyVariants({ variant }), className)} {...rest}>
      {children}
    </ComponentAs>
  )
}
