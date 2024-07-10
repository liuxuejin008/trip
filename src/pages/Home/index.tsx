import { useState } from 'react'
import DateRangePicker from '@/components/DateRangePicker'
import IMAGE_BG from '@/assets/images/home_bg.png'
import IconGo from '@/components/Icons/Go'
import { useNavigate } from 'react-router-dom'
import type { DateRange } from 'react-day-picker'
import { getFormateDate } from '@/utils/date'
import { generateTravelLine } from '@/services/travel'
import { useToast } from '@/components/Toast/use-toast'
import { useTranslation } from 'react-i18next'
import { setPersistentLocation, getPersistentLocation } from '@/utils/storage'
import { useAuth } from '@/components/Auth/context'

type AddressInputProps = {
  value?: string
  onChange: (value: string) => void
  onSearch: () => void
}
function AddressInput(props: AddressInputProps) {
  const { t } = useTranslation()
  function onKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      props.onSearch()
    }
  }
  return (
    <div className="relative mt-6">
      <input placeholder={t('addressPlaceholder')} value={props.value} onKeyUp={onKeyUp} onChange={e => props.onChange(e.target.value)} className="bg-dark-light-4 text-dark-light border-none outline-none w-[396px] h-[77px] rounded-36 text-36 font-medium box-border px-11 placeholder:text-dark-light" />
      {/* todo icon */}
      <i onClick={props.onSearch} className="absolute w-[62px] cursor-pointer bg-primary flex items-center justify-center h-[62px] rounded-full top-1/2 -translate-y-1/2 right-2.5">
        <IconGo className="w-[52px] text-warn-light" />
      </i>
    </div>
  )
}

function ProfileButton() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <button onClick={() => navigate('/user/settings')} className="bg-primary-light text-white flex items-center justify-center m-w-[150px] px-4 h-[60px] rounded-30 shadow-button font-medium text-24 outline-none mt-11 hover:bg-primary transition-bg">{t('accountCenter')}</button>
  )
}

export default function Home() {
  const { isLogin, login } = useAuth()
  const { t } = useTranslation()
  const preLocationData = getPersistentLocation()
  const [location, setLocation] = useState<string>(preLocationData.location)
  const [range, setRange] = useState<DateRange | undefined>({
    from: preLocationData.startTime,
    to: preLocationData.endTime
  })
  const navigate = useNavigate()
  const { toast, dismiss } = useToast()

  async function onGenerate() {
    const startTime = getFormateDate(range?.from)
    const endTime = getFormateDate(range?.to)
    if (!location) {
      toast({
        title: t('addressRequired'),
        icon: 'error'
      })
      return
    }
    if (!startTime || !endTime) {
      toast({
        title: t('dateRequired'),
        icon: 'error'
      })
      return
    }

    setPersistentLocation({ location, startTime, endTime })

    const { id } = toast({
      title: t('generating'),
      icon: 'loading'
    })

    try {
      const { tralineId } = await generateTravelLine({ location, startTime, endTime })
      navigate(`/result/${tralineId}`)
    } catch (e) {
      toast({
        title: t('genFail'),
        icon: 'error'
      })
    } finally {
      dismiss(id)
    }
  }

  return (
    <>
      <div style={{ backgroundImage: `url(${IMAGE_BG})` }} className="relative min-w-screen min-h-screen bg-cover bg-center flex flex-col justify-center items-center before:flex-1 bg-dark after:absolute after:top-0 after:left-0 after:bottom-0 after:right-0 after:bg-dark-77">
        <div className="flex-[2] min-h-[640px] flex flex-col flex-shrink-0 items-center justify-center text-white z-10">
          <h1 className="font-semibold text-48">{t('title')}</h1>
          <p className="font-semibold text-24 mt-5">{t('description')}</p>
          <AddressInput value={location} onChange={setLocation} onSearch={onGenerate} />
          <p className="font-semibold text-36 mt-11">{t('tourDate')}</p>
          <DateRangePicker value={range} onChange={setRange} className="mt-5" />
          {isLogin && <ProfileButton />}
          {!isLogin && <button onClick={login} className="text-18 mt-11 hover:underline cursor-pointer outline-none">{t('loginNow')}</button>}
        </div>
      </div>
    </>
  )
}
