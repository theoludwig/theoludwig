import type { GetStaticProps, NextPage } from 'next'
import useTranslation from 'next-translate/useTranslation'

import { ErrorPage } from 'components/ErrorPage'
import { Head } from 'components/Head'
import type { FooterProps } from 'components/Footer'

interface Error404Props extends FooterProps {}

const Error404: NextPage<Error404Props> = (props) => {
  const { t } = useTranslation()
  const { version } = props

  return (
    <>
      <Head title='404 | Divlo' />
      <ErrorPage
        statusCode={404}
        message={t('errors:not-found')}
        version={version}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps<Error404Props> = async () => {
  const { readPackage } = await import('read-pkg')
  const { version } = await readPackage()
  return { props: { version } }
}

export default Error404
