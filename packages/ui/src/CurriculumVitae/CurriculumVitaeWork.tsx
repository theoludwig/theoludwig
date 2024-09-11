import { useTranslations } from "next-intl"
import { MdWork } from "react-icons/md"
import { CurriculumVitaeSection } from "./CurriculumVitaeSection.tsx"

export interface CurriculumVitaeWorkProps {}

export const CurriculumVitaeWork: React.FC<CurriculumVitaeWorkProps> = () => {
  const t = useTranslations()

  const workExperiences = [
    {
      summary: t("curriculum-vitae.work.ircad.summary"),
      website: "https://ircad.fr/",
      name: "IRCAD",
      location: "1 Place de l'Hôpital, FR-67000 Strasbourg",
      position: t("curriculum-vitae.work.ircad.position"),
      dates: "28/08/2023 - 02/09/2024",
      duration: t("curriculum-vitae.work.ircad.duration"),
    },
    {
      summary: t("curriculum-vitae.work.numerize.summary"),
      website: "https://numerize.com/",
      name: "Numerize",
      location: "4 Rue Sophie Germain, FR-67720 Hœrdt",
      position: t("curriculum-vitae.work.numerize.position"),
      dates: "11/04/2023 - 26/07/2023",
      duration: t("curriculum-vitae.work.numerize.duration"),
    },
  ]

  return (
    <CurriculumVitaeSection
      id="work-experience"
      title={t("curriculum-vitae.work.title")}
      icon={<MdWork size={24} />}
    >
      <ul className="list-unstyled m-0">
        {workExperiences.map((workExperience) => {
          return (
            <li key={workExperience.name} className="card card-nested">
              <p className="relative m-0">
                <strong>
                  <a href={workExperience.website} target="_blank">
                    {workExperience.name}
                  </a>
                </strong>
              </p>

              <p className="relative m-0">
                <strong>{workExperience.position}</strong>
              </p>

              <p className="text-muted">
                <small>
                  <span className="space-right">
                    {workExperience.dates} ({workExperience.duration})
                  </span>
                </small>
              </p>
              <div className="mt-2">
                <p>{workExperience.summary}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </CurriculumVitaeSection>
  )
}
