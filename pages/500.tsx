import type { GetStaticProps, NextPage } from 'next'
import useTranslation from 'next-translate/useTranslation'

import { ErrorPage } from 'components/ErrorPage'
import { Head } from 'components/Head'
import type { FooterProps } from 'components/Footer'

interface Error500Props extends FooterProps {}

const Error500: NextPage<Error500Props> = (props) => {
  const { t } = useTranslation()
  const { version } = props

  return (
    <>
      <Head title='500 | Théo LUDWIG (Divlo)' />
      <ErrorPage
        statusCode={500}
        message={t('errors:server-error')}
        version={version}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps<Error500Props> = async () => {
  const { readPackage } = await import('read-pkg')
  const { version } = await readPackage()
  return { props: { version } }
}

export default Error500
