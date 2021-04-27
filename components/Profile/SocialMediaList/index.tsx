import { SocialMediaItem } from './SocialMediaItem'

export const SocialMediaList: React.FC = () => {
  return (
    <>
      <div className='row justify-content-center'>
        <ul className='social-media-list'>
          <SocialMediaItem
            socialMedia='Twitter'
            link='https://twitter.com/Divlo_FR'
          />
          <SocialMediaItem
            socialMedia='GitHub'
            link='https://github.com/Divlo'
          />
          <SocialMediaItem
            socialMedia='YouTube'
            link='https://www.youtube.com/c/Divlo'
          />
          <SocialMediaItem
            socialMedia='Twitch'
            link='https://www.twitch.tv/divlo'
          />
          <SocialMediaItem socialMedia='Email' link='mailto:contact@divlo.fr' />
        </ul>
      </div>

      <style jsx>
        {`
          .social-media-list {
            margin: 0;
            padding: 0;
            list-style: none;
            text-align: center;
            padding: 15px 0;
            margin-top: 10px;
          }
        `}
      </style>
    </>
  )
}
