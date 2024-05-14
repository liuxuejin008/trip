import Header from '@/components/Header'
import Summarize from './Summarize'
import TripCard from './TripCard'
import Footer from '@/components/Footer'
import IconStar from '@/components/Icons/Star2'

export default function Detail() {
  return (
    <>
      <Header />
      <div className="bg-primary-light-1 min-h-screen flex flex-col items-center gap-20 pb-20">
        <Summarize />
        <TripCard day='01' />
        <TripCard day='02' />
        <TripCard day='03' />
        <button className="w-[184px] h-16 flex items-center justify-center text-white rounded-32 bg-primary-light-2 hover:opacity-85">
          <IconStar className="w-6 h-6 mr-2"/>
          收藏行程
        </button>
      </div>
      <Footer />
    </>
  )
}