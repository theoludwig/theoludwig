import { getI18n } from '@/i18n/i18n.server'
import { ErrorPage } from '@/components/ErrorPage'

const NotFound = (): JSX.Element => {
  const i18n = getI18n()

  return (
    <ErrorPage statusCode={404} message={i18n.translate('errors.not-found')} />
  )
}

export default NotFound
