type SectionHeadingProps = React.ComponentPropsWithRef<'h2'>

export const SectionHeading: React.FC<SectionHeadingProps> = (props) => {
  const { children, ...rest } = props

  return (
    <h2 {...rest} className='mt-1 mb-3 text-center text-4xl font-semibold'>
      {children}
    </h2>
  )
}
