import DateRangePicker from '@/components/DateRangePicker'
import IMAGE_BG from '@/assets/images/home_bg.png'
import IconGo from '@/components/Icons/Go'

function AddressInput() {
  return (
    <div className="relative mt-6">
      <input placeholder="去哪里?" className="bg-dark-light-4 text-dark-light border-none outline-none w-[396px] h-[77px] rounded-36 text-36 font-medium box-border px-11 placeholder:text-dark-light" />
      {/* todo icon */}
      <i className="absolute w-[62px] cursor-pointer bg-primary flex items-center justify-center h-[62px] rounded-full top-1/2 -translate-y-1/2 right-2.5">
        <IconGo className="w-[52px] text-warn-light" />
      </i>
    </div>
  )
}

function Shared () {
  return (
    <div className="h-10 mt-7"></div>
  )
}

function ProfileButton () {
  return (
    <button className="bg-primary-light text-white flex items-center justify-center w-[150px] h-[60px] rounded-30 shadow-button font-medium text-24 outline-none mt-11 hover:bg-primary transition-bg">个人中心</button>
  )
}

export default function Home() {
  return (
    // todo background image
    <div style={{backgroundImage: `url(${IMAGE_BG})`}} className="relative w-screen h-screen bg-cover bg-center flex flex-col justify-center items-center before:flex-1 bg-dark after:absolute after:top-0 after:left-0 after:w-screen after:h-screen after:bg-dark-77">
      <div className="flex-[2] flex flex-col flex-shrink-0 items-center justify-center text-white z-10">
        <h1 className="font-semibold text-48">游攻略</h1>
        <p className="font-semibold text-24 mt-5">AI 帮你制作旅行攻略</p>
        <AddressInput />
        <p className="font-semibold text-36 mt-11">旅程日期</p>
        <DateRangePicker className="mt-5" />
        <ProfileButton />
        {/* <div className="text-18 mt-11 hover:underline">现在登录</div> */}
        {/* <Shared /> */}
      </div>
    </div>
  )
}