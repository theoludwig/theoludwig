import type { LocaleProps } from "@repo/i18n/config"
import { unstable_setRequestLocale } from "next-intl/server"

interface CurriculumVitaeProps extends LocaleProps {}

const CurriculumVitaePage: React.FC<CurriculumVitaeProps> = (props) => {
  const { params } = props

  // Enable static rendering
  unstable_setRequestLocale(params.locale)

  return (
    <main>
      <h1>CurriculumVitae</h1>
    </main>
  )
}

export default CurriculumVitaePage
