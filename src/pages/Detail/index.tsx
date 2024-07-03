import { Overview } from './Overview'
import Footer from '@/components/Footer'
import { Card } from './Card'
import ICON_DOWNLOAD from './images/download.png'
import ICON_SHARE from './images/share.png'

function Button({children}: {children: React.ReactNode}) {
  return (
    <button style={{background: 'linear-gradient( 335deg, #88FEFD 0%, #4892FA 52%, #BC05E2 100%), rgba(255,255,255,0.3)'}} className="flex items-center justify-center rounded-[41px] w-[159px] h-[41px] gap-3 text-white text-18 font-semibold">
      {children}
    </button>
  )
}
export default function Detail() {
  return (
    <>
      <Overview />
      <div className="bg-[rgb(236,239,242)] flex flex-col items-center gap-28 pt-9 pb-24">
        <Card index={1} />
        <Card index={2} />
        <Card index={3} />

        <div className="flex justify-center gap-10">
          <Button>
            <img src={ICON_DOWNLOAD} />
            下载行程
          </Button>
          <Button>
            <img src={ICON_SHARE} />
            分享行程
          </Button>
        </div>
      </div>
      <Footer />
    </>
    
  )
}