import { ShadowContainer } from 'components/design/ShadowContainer'
import { GitHubIcon } from 'components/Profile/SocialMediaList/SocialMediaIcons/GitHubIcon'

export interface RepositoryProps {
  name: string
  description: string
  href: string
}

export const Repository: React.FC<RepositoryProps> = (props) => {
  const { name, description, href } = props

  return (
    <ShadowContainer className='cursor-pointer relative p-6 !mb-4 max-h-32 transition-transform duration-200 ease-in-out hover:-translate-y-2'>
      <a href={href} target='_blank' rel='noopener noreferrer'>
        <div className='flex'>
          <GitHubIcon className='h-6 mr-2' />
          <span className='text-yellow dark:text-yellow-dark hover:underline'>
            {name}
          </span>
        </div>
        <p className='my-4'>{description}</p>
      </a>
    </ShadowContainer>
  )
}
