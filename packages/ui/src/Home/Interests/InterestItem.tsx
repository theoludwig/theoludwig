import { Typography } from "../../Design/Typography/Typography.tsx"

export interface InterestItemProps {
  title: string
  description: React.ReactNode
}

export const InterestItem: React.FC<InterestItemProps> = (props) => {
  const { title, description } = props

  return (
    <div className="my-6 text-center">
      <Typography as="h3" variant="h4">
        {title}
      </Typography>

      <Typography as="p" variant="text1" className="my-2 text-black dark:text-gray-lighter">
        {description}
      </Typography>
    </div>
  )
}
