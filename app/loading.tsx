import { Loader } from '@/components/Loader/Loader'

const Loading = (): JSX.Element => {
  return (
    <main className='flex flex-col flex-1 items-center justify-center'>
      <Loader />
    </main>
  )
}

export default Loading
