import { ShadowContainer } from "@/components/design/ShadowContainer"
import { SectionHeading } from "@/components/design/Section/SectionHeading"

type SectionProps = React.ComponentPropsWithRef<"section"> & {
  heading?: string
  description?: string
  isMain?: boolean
  withoutShadowContainer?: boolean
}

export const Section = (props: SectionProps): JSX.Element => {
  const {
    children,
    heading,
    description,
    isMain = false,
    withoutShadowContainer = false,
    ...rest
  } = props

  if (isMain) {
    return (
      <div className="w-full px-3">
        <ShadowContainer style={{ marginTop: 50 }}>
          <section {...rest}>
            {heading != null ? (
              <SectionHeading>{heading}</SectionHeading>
            ) : null}
            <div className="w-full px-3">{children}</div>
          </section>
        </ShadowContainer>
      </div>
    )
  }

  if (withoutShadowContainer) {
    return (
      <section {...rest}>
        {heading != null ? <SectionHeading>{heading}</SectionHeading> : null}
        <div className="w-full px-3">{children}</div>
      </section>
    )
  }

  return (
    <section {...rest}>
      {heading != null ? (
        <SectionHeading
          style={{ ...(description != null ? { margin: 0 } : {}) }}
        >
          {heading}
        </SectionHeading>
      ) : null}
      {description != null ? (
        <p style={{ marginTop: 7 }} className="text-center">
          {description}
        </p>
      ) : null}
      <div className="w-full px-3">
        <ShadowContainer>
          <div className="w-full px-16 py-4 leading-8">{children}</div>
        </ShadowContainer>
      </div>
    </section>
  )
}
