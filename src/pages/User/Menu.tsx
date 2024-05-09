import { useLocation } from 'react-router-dom'
import cs from 'classnames'

const menuList = [
  {
    label: '保存的行程',
    path: '',
  },
  {
    label: '最近搜索',
    path: 'search',
  },
  {
    label: '设置',
    path: 'settings'
  }
]
export default function Menu() {
  const location = useLocation()
  const fullPath = (path: string) => `/user/${path}`
  const isActive = (path: string) => fullPath(path) === location.pathname
  
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
