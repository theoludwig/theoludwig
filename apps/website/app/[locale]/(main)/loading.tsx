import { Spinner } from "@repo/ui/Design/Spinner"
import { MainLayout } from "@repo/ui/Layout/MainLayout"

const Loading: React.FC = () => {
  return (
    <MainLayout center>
      <Spinner size={50} />
    </MainLayout>
  )
}

export default Loading
