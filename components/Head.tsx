import NextHead from 'next/head'

interface HeadProps {
  title?: string
  image?: string
  description: string
  url?: string
}

export const Head: React.FC<HeadProps> = (props) => {
  const {
    title = 'Divlo',
    image = 'https://divlo.fr/images/icons/icon-96x96.png',
    description,
    url = 'https://divlo.fr/'
  } = props

  return (
    <NextHead>
      <title>{title}</title>
      <link rel='icon' type='image/png' href={image} />

      {/* Meta Tag */}
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='description' content={description} />
      <meta name='Language' content='fr, en' />
      <meta name='theme-color' content='#ffd800' />

      {/* Open Graph Metadata */}
      <meta property='og:title' content={title} />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={url} />
      <meta property='og:image' content={image} />
      <meta property='og:description' content={description} />
      <meta property='og:locale' content='fr_FR, en_US' />
      <meta property='og:site_name' content={title} />

      {/* Twitter card Metadata */}
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:image' content={image} />

      {/* Google Verification */}
      <meta
        name='google-site-verification'
        content='j9CQEbSuYydXytr6gdkTfam_xX_pU97NSpVH3Bq-6f4'
      />

      {/* PWA Data */}
      <link rel='manifest' href='/manifest.json' />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='mobile-web-app-capable' content='yes' />
      <link rel='apple-touch-icon' href={image} />
    </NextHead>
  )
}
