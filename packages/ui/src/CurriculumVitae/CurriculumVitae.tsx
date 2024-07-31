import { CurriculumVitaeAbout } from "./CurriculumVitaeAbout"
import { CurriculumVitaeEducation } from "./CurriculumVitaeEducation"
import { CurriculumVitaeInterests } from "./CurriculumVitaeInterests"
import { CurriculumVitaeProfile } from "./CurriculumVitaeProfile"
import { CurriculumVitaeSkills } from "./CurriculumVitaeSkills"
import { CurriculumVitaeWork } from "./CurriculumVitaeWork"

export interface CurriculumVitaeProps {}

export const CurriculumVitae: React.FC<CurriculumVitaeProps> = () => {
  return (
    <main className="curriculum-vitae container-fluid">
      <div className="row main clearfix">
        <section className="col-md-3 card-wrapper profile-card-wrapper affix">
          <CurriculumVitaeProfile />

          <div className="card background-card">
            <div className="background-details">
              <CurriculumVitaeAbout />

              <hr />

              <section className="section-separated">
                <CurriculumVitaeEducation />
                <CurriculumVitaeSkills />
              </section>

              <hr />

              <section className="section-separated">
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
