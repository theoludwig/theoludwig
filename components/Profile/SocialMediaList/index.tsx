import { SocialMediaItem } from './SocialMediaItem'
import { TwitterIcon } from './SocialMediaIcons/TwitterIcon'
import { GitHubIcon } from './SocialMediaIcons/GitHubIcon'
import { YouTubeIcon } from './SocialMediaIcons/YouTubeIcon'
import { TwitchIcon } from './SocialMediaIcons/TwitchIcon'
import { EmailIcon } from './SocialMediaIcons/EmailIcon'

export const SocialMediaList: React.FC = () => {
  return (
    <ul className='social-media-list m-0 p-0 list-none text-center mt-2 px-0 py-4'>
      <SocialMediaItem link='https://twitter.com/Divlo_FR' ariaLabel='Twitter'>
        <TwitterIcon />
      </SocialMediaItem>
      <SocialMediaItem link='https://github.com/Divlo' ariaLabel='GitHub'>
        <GitHubIcon />
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
