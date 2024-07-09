import { Overview } from './Overview'
// import Footer from '@/components/Footer'
import { Card } from './Card'
import ICON_DOWNLOAD from './images/download.png'
import ICON_SHARE from './images/share.png'
import { useCopy } from '@/utils/copy'
import IMAGE_LOGO from '@/assets/images/logo.png'
import { Toaster } from '@/components/Toast/toaster'

function Button({ children, onClick, href }: { children: React.ReactNode, href?: string, onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void }) {
  return (
    <a href={href} onClick={onClick} style={{ background: 'linear-gradient( 335deg, #88FEFD 0%, #4892FA 52%, #BC05E2 100%), rgba(255,255,255,0.3)' }} className="flex items-center justify-center rounded-[41px] w-[159px] h-[41px] gap-3 text-white text-18 font-semibold cursor-pointer">
      {children}
    </a>
  )
}
export default function Detail() {
  const { onCopy } = useCopy()

  function handleCopy(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    onCopy()
  }

  const activeClassName = 'relative after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:bg-white'

  return (
    <>
      <header className="absolute flex justify-center top-0 w-screen z-50">
        <div className="flex justify-between w-[937px] h-[76px] items-center">
          <a href="/">
            <img src={IMAGE_LOGO} className="h-5" alt="logo" />
          </a>
          <nav className="flex items-center text-white text-16 font-semibold hover:opacity-80 gap-7">
            <a className={activeClassName} href="/">首页</a>
            <a href="/">实验室</a>
            <a href='/'>联系我们</a>
          </nav>
        </div>
      </header>
      <Overview />
      <div className="bg-[rgb(236,239,242)] flex flex-col items-center gap-28 pt-9 pb-24">
        <Card index={1} />
        <Card index={2} />
        <Card index={3} />

        <div className="flex justify-center gap-10">
          <Button href="#">
            <img src={ICON_DOWNLOAD} />
            下载行程
          </Button>
          <Button onClick={handleCopy}>
            <img src={ICON_SHARE} />
            分享行程
          </Button>
        </div>
      </div>
      <Toaster />
      {/* <Footer /> */}
    </>

  )
}