import { GetStaticProps, NextPage } from 'next'
import useTranslation from 'next-translate/useTranslation'

import { ErrorPage } from 'components/ErrorPage'
import { Head } from 'components/Head'
import { Header } from 'components/Header'
import { Footer, FooterProps } from 'components/Footer'
import { getAge } from 'utils/getAge'

interface Error404Props extends FooterProps {
  description: string
}

const Error404: NextPage<Error404Props> = (props) => {
  const { t } = useTranslation()
  const { version, description } = props

  return (
    <>
      <Head title='404 | Divlo' description={description} />

      <Header showLanguage />
      <main className='flex flex-col md:mx-auto md:max-w-4xl lg:max-w-7xl'>
        <ErrorPage statusCode={404} message={t('errors:not-found')} />
      </main>
      <Footer version={version} />
    </>
  )
}

export const getStaticProps: GetStaticProps<FooterProps> = async () => {
  const { readPackage } = await import('read-pkg')
  const { version } = await readPackage()
  const birthDate = new Date('2003-03-31')
  const age = getAge(birthDate)
  const description = `I'm Divlo, I'm ${age} years old, I'm from France - Developer Full Stack Junior • Passionate about High-Tech`
  return { props: { version, description } }
}

export default Error404
