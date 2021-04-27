type ShadowContainerProps = React.ComponentPropsWithRef<'div'>

export const ShadowContainer: React.FC<ShadowContainerProps> = (props) => {
  const { children, className, ...rest } = props

  return (
    <>
      <div
        className={`shadow-container ${className != null ? className : ''}`}
        {...rest}
      >
        {children}
      </div>

      <style jsx>
        {`
          .shadow-container {
            display: flex;
            flex-direction: column;
            word-wrap: break-word;
            box-shadow: 0px 0px 6px 6px rgba(0, 0, 0, 0.25);
            border: 1px solid black;
            border-radius: 1rem;
            height: 100%;
            max-width: 100%;
            margin-bottom: 50px;
          }
        `}
      </style>
    </>
  )
}
