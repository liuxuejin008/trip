import { useState } from 'react'
import { i18n, languageList, setLang as _setLang } from '@/i18n'
import cs from 'classnames'

export function Lang() {
  const [lang, setLang] = useState(i18n.language)
  const toggleLang = () => {
    const nextLang = lang === 'en' ? 'zh' : 'en'
    i18n.changeLanguage(nextLang)
    _setLang(nextLang)
    setLang(nextLang)
  }

  return (
    <button onClick={toggleLang} className="flex-none transition-all duration-200 m-0 border-none p-0 w-8 h-8 inline-flex items-center justify-center bg-transparent rounded-md cursor-pointer">
      <div className="cursor-pointer transition-all duration-200">
        <div className="cursor-pointer relative w-[1.2em] h-[1.2em]">
          {
            languageList.map(item => {
              const className = item.value === lang ? '-left-[5%] top-0 z-10 scale-[.7] origin-top-left bg-[rgba(0,0,0,0.88)]' : '-right-[5%] bottom-0 z-0 scale-50 origin-bottom-right'
              return (
                <span key={item.value} className={cs('cursor-pointer absolute leading-none text-[1.2em] border text-white border-white', className)}>
                  {item.label}
                </span>
              )
            })
          }
        </div>
      </div>
    </button>
  )
}