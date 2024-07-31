import { classNames } from "@repo/config-tailwind/classNames"
import type { VariantProps } from "cva"
import { cva } from "cva"

const typographyVariants = cva({
  variants: {
    variant: {
      h1: "text-primary dark:text-primary-dark text-4xl font-semibold",
      h2: "text-primary dark:text-primary-dark text-3xl font-semibold",
      h3: "text-primary dark:text-primary-dark text-2xl font-semibold",
      h4: "text-primary dark:text-primary-dark text-xl font-semibold",
      h5: "text-primary dark:text-primary-dark text-xl font-medium",
      h6: "text-primary dark:text-primary-dark text-lg font-medium",
      text1: "break-words text-base",
      text2: "break-words text-sm",
    },
  },
})

export type TypographyProps<Component extends React.ElementType = "p"> = {
  as?: Component
} & React.ComponentPropsWithoutRef<Component> &
  VariantProps<typeof typographyVariants>

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
    <ComponentAs
      className={classNames(typographyVariants({ variant }), className)}
      {...rest}
    >
      {children}
    </ComponentAs>
  )
}
