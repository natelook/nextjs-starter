import { trpc } from 'src/lib/trpc'

export default function HomePage() {
  const status = trpc.hello.useQuery({ text: 'online' })
  if (!status.data) {
    return <div>Loading...</div>
  }
  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='text-center'>
        <h1 className='text-3xl uppercase font-bold'>Home page</h1>
        <p className='uppercase'>API Status {status.data.status}</p>
      </div>
    </div>
  )
}
