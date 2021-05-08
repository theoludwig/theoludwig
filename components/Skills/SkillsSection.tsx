import { ShadowContainer } from 'components/design/ShadowContainer'

export interface SkillsSectionProps {
  title: string
  children: React.ReactNode
}

export const SkillsSection: React.FC<SkillsSectionProps> = (props) => {
  const { title, children } = props

  return (
    <ShadowContainer>
      <div className='w-full px-4 mx-auto'>
        <div className='flex flex-wrap px-4 py-6'>
          <div className='flex-1'>
            <div className='mb-8 border-b border-gray-600 dark:border-opacity-10 dark:border-white'>
              <h3 className='text-yellow font-semibold text-xl my-3 dark:text-yellow-dark'>
                {title}
              </h3>
            </div>
            <div className='flex justify-around flex-wrap'>{children}</div>
          </div>
        </div>
      </div>
    </ShadowContainer>
  )
}
