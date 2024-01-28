import { ShadowContainer } from "@/components/design/ShadowContainer"

export interface SkillsSectionProps {
  title: string
  children: React.ReactNode
}

export const SkillsSection = (props: SkillsSectionProps): JSX.Element => {
  const { title, children } = props

  return (
    <ShadowContainer>
      <div className="mx-auto w-full px-4">
        <div className="flex flex-wrap px-4 py-6">
          <div className="flex-1">
            <div className="mb-8 border-b border-gray-600 dark:border-white/10">
              <h3 className="my-3 text-xl font-semibold text-yellow dark:text-yellow-dark">
                {title}
              </h3>
            </div>
            <div className="flex flex-wrap justify-around">{children}</div>
          </div>
        </div>
      </div>
    </ShadowContainer>
  )
}
