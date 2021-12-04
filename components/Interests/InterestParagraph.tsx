import htmlParser from 'html-react-parser'

export interface InterestParagraphProps {
  title: string
  description: string
}

export const InterestParagraph: React.FC<InterestParagraphProps> = (props) => {
  const { title, description } = props

  return (
    <>
      <p className='my-6 text-center text-gray dark:text-gray-dark'>
        <strong className='text-lg font-semibold text-yellow dark:text-yellow-dark'>
          {title}
        </strong>
        <br />
        <span>{htmlParser(description)}</span>
      </p>
    </>
  )
}
