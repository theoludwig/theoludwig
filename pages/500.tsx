import { GetStaticProps } from 'next'
import useTranslation from 'next-translate/useTranslation'
import readPackageJSON from 'read-pkg'

import { ErrorPage } from 'components/ErrorPage'
import { Head } from 'components/Head'
import { Header } from 'components/Header'
import { Footer, FooterProps } from 'components/Footer'

const Error500: React.FC<FooterProps> = (props) => {
  const { t } = useTranslation()
  const { version } = props

  return (
    <>
      <Head title='Divlo - 500' />

      <Header />
      <main className='flex flex-col md:mx-auto md:max-w-4xl lg:max-w-7xl'>
        <ErrorPage statusCode={500} message={t('errors:serverError')} />
      </main>
      <Footer version={version} />
    </>
  )
}

export const getStaticProps: GetStaticProps<FooterProps> = async () => {
  const { version } = await readPackageJSON()
  return { props: { version } }
}

export default Error500
