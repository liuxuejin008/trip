import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="w-screen bg-dark flex flex-col items-center h-[1350px]">
      <div className="mt-[140px] text-center">
        <div className="text-primary-light text-48 font-medium">{t('title')}</div>
        <div className="text-32 text-white mt-9">{t('description')}</div>
      </div>
      <a href="#" className="flex items-center hover:opacity-80 justify-center no-underline mt-[132px] w-[442px] h-[126px] bg-dark-light rounded-lg text-32 text-white font-medium">{t('contactUs')}</a>
      <hr className="w-[1154px] h-2.5 bg-dark-light mt-[130px] border-none" />
      <div className="flex w-[670px] justify-between mt-[98px]">
        <a className="text-32 font-medium text-white" href="#">{t('agreement')}</a>
        <a className="text-32 font-medium text-white" href="#">{t('policy')}</a>
      </div>
    </footer>
  )
}