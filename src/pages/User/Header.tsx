import { useTranslation } from 'react-i18next'

export default function Header() {
  const { t } = useTranslation()

  return (
    <header className="w-screen box-border flex items-center justify-between h-[112px] bg-dark text-white text-16 font-medium pl-9 pr-6">
      <div>{t('title')}/{t('accountCenter')}</div>
      <a className="text-white" href="/">{t('backToHome')}</a>
    </header>
  )
}
