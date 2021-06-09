import htmlParser from 'html-react-parser'

export interface InterestParagraphProps {
  title: string
  description: string
}

export const InterestParagraph: React.FC<InterestParagraphProps> = (props) => {
  const { title, description } = props

  return (
    <>
      <p className='text-center my-6 text-gray dark:text-gray-dark'>
        <strong className='text-yellow font-medium text-lg dark:text-yellow-dark'>
          {title}
        </strong>
        <br />
        <span>{htmlParser(description)}</span>
      </p>
    </>
  )
}
