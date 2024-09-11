import { EmailIcon } from "./SocialMediaIcons/EmailIcon.tsx"
import { GitHubIcon } from "./SocialMediaIcons/GitHubIcon.tsx"
import { GitLabIcon } from "./SocialMediaIcons/GitLabIcon.tsx"
import { NPMIcon } from "./SocialMediaIcons/NPMIcon.tsx"
import { TwitchIcon } from "./SocialMediaIcons/TwitchIcon.tsx"
import { TwitterIcon } from "./SocialMediaIcons/TwitterIcon.tsx"
import { YouTubeIcon } from "./SocialMediaIcons/YouTubeIcon.tsx"
import { SocialMediaItem } from "./SocialMediaItem.tsx"

export interface SocialMediaListProps {}

export const SocialMediaList: React.FC<SocialMediaListProps> = () => {
  return (
    <ul className="mt-6 list-none text-center">
      <SocialMediaItem link="https://github.com/theoludwig" ariaLabel="GitHub">
        <GitHubIcon />
      </SocialMediaItem>

      <SocialMediaItem link="https://gitlab.com/theoludwig" ariaLabel="GitLab">
        <GitLabIcon />
      </SocialMediaItem>

      <SocialMediaItem link="https://www.npmjs.com/~theoludwig" ariaLabel="npm">
        <NPMIcon />
      </SocialMediaItem>

      <SocialMediaItem
        link="https://twitter.com/theoludwig_"
        ariaLabel="Twitter"
      >
        <TwitterIcon />
      </SocialMediaItem>

      <SocialMediaItem
        link="https://www.youtube.com/@theo_ludwig"
        ariaLabel="YouTube"
      >
        <YouTubeIcon />
      </SocialMediaItem>

      <SocialMediaItem
        link="https://www.twitch.tv/theoludwig"
        ariaLabel="Twitch"
      >
        <TwitchIcon />
      </SocialMediaItem>

      <SocialMediaItem link="mailto:contact@theoludwig.fr" ariaLabel="Email">
        <EmailIcon />
      </SocialMediaItem>
    </ul>
  )
}
