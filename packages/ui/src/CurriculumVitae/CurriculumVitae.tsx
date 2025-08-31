import { CurriculumVitaeEducation } from "./CurriculumVitaeEducation.tsx"
import { CurriculumVitaeInterests } from "./CurriculumVitaeInterests.tsx"
import { CurriculumVitaeProfile } from "./CurriculumVitaeProfile.tsx"
import { CurriculumVitaeSkills } from "./CurriculumVitaeSkills.tsx"
import { CurriculumVitaeWork } from "./CurriculumVitaeWork.tsx"

export interface CurriculumVitaeProps {}

export const CurriculumVitae: React.FC<CurriculumVitaeProps> = () => {
  return (
    <main className="curriculum-vitae mx-auto px-4 text-sm">
      <div className="-mx-4 p-2">
        <section className="col-md-3 card-wrapper relative">
          <CurriculumVitaeProfile />

          <div className="card background-card">
            <div className="background-details">
              <section className="flex justify-between">
                <CurriculumVitaeEducation />
                <CurriculumVitaeSkills />
              </section>

              <hr />

              <section className="flex justify-between">
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
