import type { LocaleProps } from "@repo/i18n/config"
import { CurriculumVitae } from "@repo/ui/CurriculumVitae"
import { unstable_setRequestLocale } from "next-intl/server"

interface CurriculumVitaeProps extends LocaleProps {}

const CurriculumVitaePage: React.FC<CurriculumVitaeProps> = (props) => {
  const { params } = props

  // Enable static rendering
  unstable_setRequestLocale(params.locale)

  return <CurriculumVitae />
}

export default CurriculumVitaePage
