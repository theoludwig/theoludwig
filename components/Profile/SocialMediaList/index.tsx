import { SocialMediaItem } from './SocialMediaItem'
import { TwitterIcon } from './SocialMediaIcons/TwitterIcon'
import { GitHubIcon } from './SocialMediaIcons/GitHubIcon'
import { GitLabIcon } from './SocialMediaIcons/GitLabIcon'
import { YouTubeIcon } from './SocialMediaIcons/YouTubeIcon'
import { TwitchIcon } from './SocialMediaIcons/TwitchIcon'
import { EmailIcon } from './SocialMediaIcons/EmailIcon'
import { NPMIcon } from './SocialMediaIcons/NPMIcon'

export const SocialMediaList: React.FC = () => {
  return (
    <ul className='social-media-list m-0 mt-2 list-none py-4 text-center'>
      <SocialMediaItem link='https://github.com/Divlo' ariaLabel='GitHub'>
        <GitHubIcon />
      </SocialMediaItem>
      <SocialMediaItem link='https://gitlab.com/Divlo' ariaLabel='GitLab'>
        <GitLabIcon />
      </SocialMediaItem>
      <SocialMediaItem link='https://www.npmjs.com/~divlo' ariaLabel='NPM'>
        <NPMIcon />
      </SocialMediaItem>
      <SocialMediaItem link='https://twitter.com/Divlo_FR' ariaLabel='Twitter'>
        <TwitterIcon />
      </SocialMediaItem>
      <SocialMediaItem
        link='https://www.youtube.com/c/Divlo'
        ariaLabel='YouTube'
      >
        <YouTubeIcon />
      </SocialMediaItem>
      <SocialMediaItem link='https://www.twitch.tv/divlo' ariaLabel='Twitch'>
        <TwitchIcon />
      </SocialMediaItem>
      <SocialMediaItem link='mailto:contact@divlo.fr' ariaLabel='Email'>
        <EmailIcon />
      </SocialMediaItem>
    </ul>
  )
}
