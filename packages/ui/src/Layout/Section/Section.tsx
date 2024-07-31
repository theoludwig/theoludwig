import { classNames } from "@repo/config-tailwind/classNames"
import type { TypographyProps } from "../../Design/Typography/Typography"
import { Typography } from "../../Design/Typography/Typography"

export * from "./RevealFade"

export interface SectionProps
  extends React.ComponentPropsWithoutRef<"section"> {
  verticalSpacing?: boolean
  horizontalSpacing?: boolean
}

export const Section: React.FC<SectionProps> = (props) => {
  const {
    className,
    verticalSpacing = false,
    horizontalSpacing = false,
    ...rest
  } = props

  return (
    <section
      className={classNames(
        {
          "my-12": verticalSpacing,
          "mx-6": horizontalSpacing,
        },
        className,
      )}
      {...rest}
    />
  )
}

export interface SectionTitleProps extends TypographyProps<"h2"> {}

export const SectionTitle: React.FC<SectionTitleProps> = (props) => {
  const { className, ...rest } = props

  return (
    <Typography
      as="h2"
      variant="h2"
      className={classNames("mb-4 text-center", className)}
      {...rest}
    />
  )
}

export interface SectionDescriptionProps extends TypographyProps<"p"> {}

export const SectionDescription: React.FC<SectionDescriptionProps> = (
  props,
) => {
  const { className, ...rest } = props

  return (
    <Typography
      as="p"
      variant="text1"
      className={classNames("mb-4 text-center", className)}
      {...rest}
    />
  )
}

export interface SectionContentProps
  extends React.ComponentPropsWithoutRef<"div"> {
  shadowContainer?: boolean
}

export const SectionContent: React.FC<SectionContentProps> = (props) => {
  const { className, shadowContainer = false, ...rest } = props

  return (
    <div
      className={classNames(
        "size-full max-w-full break-words px-6 py-4 sm:px-16",
        {
          "shadow-light dark:shadow-dark max-w-full rounded-2xl border border-solid border-black":
            shadowContainer,
        },
        className,
      )}
      {...rest}
    />
  )
}
