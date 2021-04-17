import { GetStaticProps } from 'next'
import useTranslation from 'next-translate/useTranslation'

import { ErrorPage } from 'components/ErrorPage'
import Head from 'components/Head'

const Error500: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <Head title='Divlo - 500' />

      <ErrorPage statusCode={500} message={t('errors:serverError')} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} }
}

export default Error500
