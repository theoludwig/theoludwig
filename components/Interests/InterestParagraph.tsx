import htmlParser from 'html-react-parser'

export interface InterestParagraphProps {
  title: string
  description: string
}

export const InterestParagraph: React.FC<InterestParagraphProps> = (props) => {
  const { title, description } = props

  return (
    <>
      <p className='text-center'>
        <strong className='important'>{title}</strong>
        <br />
        <span className='paragraph-color'>{htmlParser(description)}</span>
      </p>
    </>
  )
}
