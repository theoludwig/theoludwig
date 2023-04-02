type SectionHeadingProps = React.ComponentPropsWithRef<'h2'>

export const SectionHeading: React.FC<SectionHeadingProps> = (props) => {
  const { children, ...rest } = props

  return (
    <h2 {...rest} className='mb-3 mt-1 text-center text-4xl font-semibold'>
      {children}
    </h2>
  )
}
