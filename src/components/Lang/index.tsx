import { useState } from 'react'
import { i18n, languageList, setLang as _setLang } from '@/i18n'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/Dropdown'
import ICON_LANG from '@/assets/images/lang.png'


export function Lang() {
  const [lang, setLang] = useState(i18n.language)
  const onClick = (nextLang: string) => {
    i18n.changeLanguage(nextLang)
    _setLang(nextLang)
    setLang(nextLang)
  }

  const currentLang = languageList.find(item => item.value === lang)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 !outline-none">
        <img src={ICON_LANG} />
        {currentLang?.label}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {languageList.map(lang => <DropdownMenuItem onClick={() => onClick(lang.value)} key={lang.value} >{lang.label}</DropdownMenuItem>)}
      </DropdownMenuContent>
    </DropdownMenu>

  )
}