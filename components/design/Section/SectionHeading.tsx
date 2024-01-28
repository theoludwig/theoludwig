type SectionHeadingProps = React.ComponentPropsWithRef<"h2">

export const SectionHeading = (props: SectionHeadingProps): JSX.Element => {
  const { children, ...rest } = props

  return (
    <h2
      {...rest}
      className="mb-3 mt-1 text-center text-4xl font-semibold text-yellow dark:text-yellow-dark"
    >
      {children}
    </h2>
  )
}
