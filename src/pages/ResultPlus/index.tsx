import Header from '@/components/Header'
import Overview from './Overview'
import Actions from './Actions'

export default function Result() {
  return (
    <>
      <Header />
      <Overview />
      <div className="h-[1500px] bg-primary-light-1">
        <Actions />
      </div>
    </>
  )
}
