import { ShadowContainer } from '@/components/design/ShadowContainer'
import { GitHubIcon } from '@/components/Profile/SocialMediaList/SocialMediaIcons/GitHubIcon'

export interface RepositoryProps {
  name: string
  description: string
  href: string
}

export const Repository = (props: RepositoryProps): JSX.Element => {
  const { name, description, href } = props

  return (
    <ShadowContainer className='relative !mb-4 max-h-32 cursor-pointer p-6 transition-transform duration-200 ease-in-out hover:-translate-y-2'>
      <a href={href} target='_blank' rel='noopener noreferrer'>
        <div className='flex'>
          <GitHubIcon className='mr-2 h-6' />
          <span className='text-yellow dark:text-yellow-dark'>{name}</span>
        </div>
        <p className='my-4'>{description}</p>
      </a>
    </ShadowContainer>
  )
}
