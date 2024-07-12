import './index.css'
export function Loading() {
  return (
    <div className='absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center gap-8'>
      <div className='max-h-[10px]'><div className='loading' /></div>
      <div>Loading...</div>
    </div>
  )
}