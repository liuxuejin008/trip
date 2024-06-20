import { useTranslation } from 'react-i18next'
import './index.scss'

export default function Loading() {
  const { t } = useTranslation()
  const loadingDot = Array.from({ length: 5 }).map((_, index) => index)

  return (
    <div className="fixed left-0 top-0 z-50 w-screen h-screen flex flex-col items-center justify-center bg-dark">
      <h2 className="text-48 text-white font-semibold">{t('title')}</h2>
      <p className="text-24 text-white font-semibold">{t('description')}</p>
      <div className="loading-dot flex items-center gap-8 mt-16">
        {loadingDot.map((index => <div className="w-16 h-16 rounded-full scale-0 bg-red-600" key={index}></div>))}
      </div>
    </div>
  )
}