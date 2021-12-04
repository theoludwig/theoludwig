import { GetStaticProps, NextPage } from 'next'
import useTranslation from 'next-translate/useTranslation'

import { ErrorPage } from 'components/ErrorPage'
import { Head } from 'components/Head'
import { Header } from 'components/Header'
import { Footer, FooterProps } from 'components/Footer'
import { getDefaultDescription } from 'utils/getDefaultDescription'

interface Error500Props extends FooterProps {
  description: string
}

const Error500: NextPage<Error500Props> = (props) => {
  const { t } = useTranslation()
  const { version, description } = props

  return (
    <>
      <Head title='500 | Divlo' description={description} />

      <Header showLanguage />
      <main className='flex flex-col md:mx-auto md:max-w-4xl lg:max-w-7xl'>
        <ErrorPage statusCode={500} message={t('errors:server-error')} />
      </main>
      <Footer version={version} />
    </>
  )
}

export const getStaticProps: GetStaticProps<FooterProps> = async () => {
  const { readPackage } = await import('read-pkg')
  const { version } = await readPackage()
  const description = getDefaultDescription()
  return { props: { version, description } }
}

export default Error500
