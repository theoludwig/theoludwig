import { ErrorNotFound } from "@repo/ui/Errors/ErrorNotFound"

/**
 * Note that `app/[locale]/[...rest]/page.tsx` is necessary for this page to render.
 */
const NotFound: React.FC = () => {
  return <ErrorNotFound />
}

export default NotFound
