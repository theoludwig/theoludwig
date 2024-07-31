export interface CurriculumVitaeSectionProps extends React.PropsWithChildren {
  id: string
  icon: React.ReactNode
  title: string
}

export const CurriculumVitaeSection: React.FC<CurriculumVitaeSectionProps> = (
  props,
) => {
  const { id, icon, title, children } = props

  return (
    <section className="detail" id={id}>
      <div className="icon">{icon}</div>

      <div className="info">
        <h2 className="h4 font-semibold uppercase">{title}</h2>

        <div className="content">{children}</div>
      </div>
    </section>
  )
}
