import { SocialMediaItem } from "./SocialMediaItem"
import { TwitterIcon } from "./SocialMediaIcons/TwitterIcon"
import { GitHubIcon } from "./SocialMediaIcons/GitHubIcon"
import { GitLabIcon } from "./SocialMediaIcons/GitLabIcon"
import { YouTubeIcon } from "./SocialMediaIcons/YouTubeIcon"
import { TwitchIcon } from "./SocialMediaIcons/TwitchIcon"
import { EmailIcon } from "./SocialMediaIcons/EmailIcon"
import { NPMIcon } from "./SocialMediaIcons/NPMIcon"

export const SocialMediaList = (): JSX.Element => {
  return (
    <ul className="social-media-list m-0 mt-2 list-none py-4 text-center">
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
