import IconLogo from '@/components/Icons/Logo'
import IconUser from '@/components/Icons/User'
import IconArrowDown from '@/components/Icons/ArrowDown'

import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="group fixed top-0 left-0 right-0 h-14 z-50 flex items-center justify-center bg-transparent border-b border-black/10">
      <div className="w-[1146px] flex justify-between items-center">
        <Link to="/">
          <IconLogo className="w-[81px] h-[26px] text-dark group-[.dark]:text-white" />
        </Link>
        <div className="flex items-center gap-2 cursor-pointer">
          <IconUser className="w-5 h-5 rounded-full bg-dark2 text-dark-light-7 group-[.dark]:text-white" />
          <span className="text-dark-light-6 text-14 group-[.dark]:text-white">131293875457</span>
          <IconArrowDown className="w-3.5 h-[15px] text-dark-light-6 group-[.dark]:text-white" />
        </div>
      </div>
    </header>
  )
}
