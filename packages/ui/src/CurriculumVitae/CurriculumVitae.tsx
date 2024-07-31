import { CurriculumVitaeAbout } from "./CurriculumVitaeAbout"
import { CurriculumVitaeEducation } from "./CurriculumVitaeEducation"
import { CurriculumVitaeInterests } from "./CurriculumVitaeInterests"
import { CurriculumVitaeProfile } from "./CurriculumVitaeProfile"
import { CurriculumVitaeSkills } from "./CurriculumVitaeSkills"
import { CurriculumVitaeWork } from "./CurriculumVitaeWork"

export interface CurriculumVitaeProps {}

export const CurriculumVitae: React.FC<CurriculumVitaeProps> = () => {
  return (
    <main className="curriculum-vitae mx-auto px-4 text-sm">
      <div className="-mx-4 p-2">
        <section className="col-md-3 card-wrapper relative">
          <CurriculumVitaeProfile />

          <div className="card background-card">
            <div className="background-details">
              <CurriculumVitaeAbout />

              <hr />

              <section className="flex">
                <CurriculumVitaeEducation />
                <CurriculumVitaeSkills />
              </section>

              <hr />

              <section className="flex">
                <CurriculumVitaeWork />
                <CurriculumVitaeInterests />
              </section>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
