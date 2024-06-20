import { useLocation } from 'react-router-dom'
import cs from 'classnames'
import { useTranslation } from 'react-i18next'

export default function Menu() {
  const { t } = useTranslation()
  const location = useLocation()
  const fullPath = (path: string) => `/user/${path}`
  const isActive = (path: string) => fullPath(path) === location.pathname
  const menuList = [
    {
      label: t('savedTour'),
      path: '',
    },
    {
      label: t('recentSearch'),
      path: 'search',
    },
    {
      label: t('setting'),
      path: 'settings'
    }
  ]

  return (
    <ul className="w-[200px] bg-white h-[898px] px-10 box-border flex-shrink-0 pt-7">
      {menuList.map((item) => (
        <li className="mb-9 text-24 font-semibold" key={item.label}>
          <a href={fullPath(item.path)} className={cs('block w-full hover:text-primary-light', isActive(item.path) && 'text-primary-light underline')}>{item.label}</a>
        </li>
      ))}
    </ul>
  )
}
