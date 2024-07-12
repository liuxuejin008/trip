import { useTranslation } from 'react-i18next'
import { Lang } from '../Lang'
import { useLocation } from 'react-router-dom'
import { useAuth } from '@/components/Auth/context'
import IMAGE_LOGO from '@/assets/images/logo.png'

export function Header() {
  const { t } = useTranslation()
  const location = useLocation()
  const { isLogin, login } = useAuth()
  const activeClassName = 'relative after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:bg-white'
  
  function onLogin () {
    login()
  }

  return (
    <>
      <header className="absolute flex justify-center top-0 w-screen z-50">
        <div className="flex justify-between w-[937px] h-[76px] items-center">
          <a href="/">
            <img src={IMAGE_LOGO} className="h-10" alt="logo" />
          </a>
          <nav className="flex items-center text-white text-16 font-semibold hover:opacity-80 gap-7">
            <a className={location.pathname === '/' ? activeClassName : ''} href="/">{t('home')}</a>
            <a href="/">{t('lab')}</a>
            <a href='/'>{t('contactUs')}</a>
            {!isLogin && <a className="cursor-pointer" onClick={onLogin}>{t('loginOrRegister')}</a>}
            <Lang />
          </nav>
        </div>
      </header>
    </>
  )
}