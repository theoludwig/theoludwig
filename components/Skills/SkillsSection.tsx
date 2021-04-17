import { ShadowContainer } from 'components/design/ShadowContainer'

export interface SkillsSectionProps {
  title: string
  children: React.ReactNode
}

export const SkillsSection: React.FC<SkillsSectionProps> = props => {
  const { title, children } = props

  return (
    <>
      <ShadowContainer>
        <div className='container-fluid'>
          <div className='row row-padding'>
            <div className='col-24'>
              <div className='skills-header'>
                <h3 className='important'>{title}</h3>
              </div>
              <div className='skills-body'>{children}</div>
            </div>
          </div>
        </div>
      </ShadowContainer>

      <style jsx>{`
        .skills-header {
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          margin-bottom: 15px;
        }
        .skills-header > h3 {
          margin-bottom: 15px;
        }
        .skills-body {
          display: flex;
          justify-content: space-around;
          flex-flow: row wrap;
          padding-top: 1.5rem;
        }
      `}
      </style>
    </>
  )
}
