import { useEffect, useState, useRef } from 'react'
import Header from '@/components/Header'
import Summarize from './Summarize'
import TripCard from './TripCard'
import Footer from '@/components/Footer'
import IconStar from '@/components/Icons/Star2'
import Anchor from '@/components/Anchor'
import cs from 'classnames'
import { throttle } from 'lodash-unified'

export default function Detail() {
  const footer$ = useRef<HTMLDivElement>(null)
  const [isDark, setIsDark] = useState(false)
  
  useEffect(function () {
    const onScroll = throttle(function onScroll() {
      if (footer$.current) {
        const { top } = footer$.current.getBoundingClientRect()
        setIsDark(top < 64)
      }
    }, 150)

    window.addEventListener('scroll', onScroll)
    return function () {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <>
      <Header className={cs(isDark && 'dark')} />
      <div className="bg-primary-light-1 min-h-screen flex flex-col items-center gap-20 pb-20">
        <Summarize />
        <div className="flex">
          <div className="flex flex-col gap-20">
            <TripCard day='01' id='day1' />
            <TripCard day='02' id="day2" />
            <TripCard day='03' id="day3" />
          </div>
          <div className='w-0'>
            <Anchor offset={80} className="hidden xl:block xl:ml-10 2xl:ml-20 sticky top-16" items={[{
              title: '第一天',
              key: 'day1'
            }, {
              title: '第二天',
              key: 'day2'
            }, {
              title: '第三天',
              key: 'day3'
            }]} />
          </div>
        </div>
        <button className="w-[184px] h-16 flex items-center justify-center text-white rounded-32 bg-primary-light-2 hover:opacity-85">
          <IconStar className="w-6 h-6 mr-2" />
          收藏行程
        </button>
      </div>
      <Footer ref={footer$} />
    </>
  )
}