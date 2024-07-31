import { EmailIcon } from "./SocialMediaIcons/EmailIcon"
import { GitHubIcon } from "./SocialMediaIcons/GitHubIcon"
import { GitLabIcon } from "./SocialMediaIcons/GitLabIcon"
import { NPMIcon } from "./SocialMediaIcons/NPMIcon"
import { TwitchIcon } from "./SocialMediaIcons/TwitchIcon"
import { TwitterIcon } from "./SocialMediaIcons/TwitterIcon"
import { YouTubeIcon } from "./SocialMediaIcons/YouTubeIcon"
import { SocialMediaItem } from "./SocialMediaItem"

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
