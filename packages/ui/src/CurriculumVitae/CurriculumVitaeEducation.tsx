import { useTranslations } from "next-intl"
import { FaGraduationCap } from "react-icons/fa"
import { CurriculumVitaeSection } from "./CurriculumVitaeSection.tsx"

export interface CurriculumVitaeEducationProps {}

export const CurriculumVitaeEducation: React.FC<CurriculumVitaeEducationProps> = () => {
  const t = useTranslations()

  const educations = [
    {
      years: t("curriculum-vitae.education.cnam.years.2024-2027.title"),
      studyType: t("curriculum-vitae.education.cnam.study-type"),
      institution: t("curriculum-vitae.education.cnam.institution"),
      // score: t("curriculum-vitae.education.cnam.years.2024-2027.description"),
      courses: [],
    },
    {
      years: t("curriculum-vitae.education.iut.years.title"),
      studyType: t("curriculum-vitae.education.iut.study-type"),
      institution: t("curriculum-vitae.education.iut.institution"),
      courses: [
        {
          year: t("curriculum-vitae.education.iut.years.2021-2022.description"),
          title: t("curriculum-vitae.education.iut.years.2021-2022.title"),
          courses: [
            t("curriculum-vitae.education.iut.years.2021-2022.courses.java"),
            t("curriculum-vitae.education.iut.years.2021-2022.courses.systems-c"),
            // t(
            //   "curriculum-vitae.education.iut.years.2021-2022.courses.windows-forms",
            // ),
            t.rich("curriculum-vitae.education.iut.years.2021-2022.courses.sql", {
              strong: (children) => {
                return <strong>{children}</strong>
              },
            }),
          ],
        },
        {
          year: t("curriculum-vitae.education.iut.years.2022-2023.description"),
          title: t("curriculum-vitae.education.iut.years.2022-2023.title"),
          courses: [
            t("curriculum-vitae.education.iut.years.2022-2023.courses.web"),
            t.rich("curriculum-vitae.education.iut.years.2022-2023.courses.tests", {
              strong: (children) => {
                return <strong>{children}</strong>
              },
            }),
            t.rich("curriculum-vitae.education.iut.years.2022-2023.courses.clean-code", {
              strong: (children) => {
                return <strong>{children}</strong>
              },
            }),
            // t("curriculum-vitae.education.iut.years.2022-2023.courses.sql-security"),
            t.rich("curriculum-vitae.education.iut.years.2022-2023.courses.systems-c", {
              strong: (children) => {
                return <strong>{children}</strong>
              },
            }),
          ],
        },
        {
          year: t("curriculum-vitae.education.iut.years.2023-2024.description"),
          title: t("curriculum-vitae.education.iut.years.2023-2024.title"),
          courses: [
            t.rich("curriculum-vitae.education.iut.years.2023-2024.courses.web", {
              strong: (children) => {
                return <strong>{children}</strong>
              },
            }),
            t("curriculum-vitae.education.iut.years.2023-2024.courses.ci-cd"),
            t("curriculum-vitae.education.iut.years.2023-2024.courses.complexity-algorithms"),
            t("curriculum-vitae.education.iut.years.2023-2024.courses.no-sql"),
          ],
        },
      ],
    },
    // {
    //   years: t("curriculum-vitae.education.lycee.years.2019-2021.title"),
    //   studyType: t("curriculum-vitae.education.lycee.study-type"),
    //   institution: t("curriculum-vitae.education.lycee.institution"),
    //   score: t("curriculum-vitae.education.lycee.score"),
    //   courses: [],
    // },
  ]

  return (
    <CurriculumVitaeSection
      id="education"
      title={t("curriculum-vitae.education.title")}
      icon={<FaGraduationCap size={24} />}
    >
      <ul className="list-unstyled m-0">
        {educations.map((education) => {
          return (
            <li key={education.years} className="card card-nested">
              <p className="relative m-0">
                <strong>{education.studyType}</strong>
              </p>

              {/* {education.score != null ? (
                <p className="relative m-0">
                  <strong>{education.score}</strong>
                </p>
              ) : (
                <></>
              )} */}

              <p className="text-muted m-0">{education.institution}</p>

              <p className="text-muted m-0">
                <small>{education.years}</small>
              </p>

              {education.courses.length > 0 ? (
                <ul className="list-none">
                  {education.courses.map(({ year, title, courses }) => {
                    return (
                      <li key={year}>
                        <span className="font-medium">{year}</span>
                        <span> ({title})</span>
                        <ul
                          style={{
                            paddingInlineStart: 20,
                          }}
                        >
                          {courses.map((course, index) => {
                            return <li key={index}>{course}</li>
                          })}
                        </ul>
                      </li>
                    )
                  })}
                </ul>
              ) : (
                <></>
              )}
            </li>
          )
        })}
      </ul>
    </CurriculumVitaeSection>
  )
}
