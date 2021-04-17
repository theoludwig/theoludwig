import { GetStaticProps } from 'next'
import useTranslation from 'next-translate/useTranslation'

import { Section } from 'components/design/Section'
import Head from 'components/Head'
import { Setup } from 'components/Setup'

const SetupPage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <Head title={t('setup:title')} description={t('setup:description')} />

      <Section
        id='setup'
        style={{ marginTop: 60 }}
        description={t('setup:description')}
        heading={t('setup:title')}
      >
        <Setup />
      </Section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} }
}

export default SetupPage
