import { MainLayout } from "@repo/ui/MainLayout"
import { Spinner } from "@repo/ui/design/Spinner"

const Loading: React.FC = () => {
  return (
    <MainLayout center>
      <Spinner size={50} />
    </MainLayout>
  )
}

export default Loading
