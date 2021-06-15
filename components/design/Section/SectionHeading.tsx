type SectionHeadingProps = React.ComponentPropsWithRef<'h2'>

export const SectionHeading: React.FC<SectionHeadingProps> = (props) => {
  const { children, ...rest } = props

  return (
    <h2 {...rest} className='text-4xl font-semibold text-center mt-1 mb-7'>
      {children}
    </h2>
  )
}
