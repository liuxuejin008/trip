import { useState, useEffect, useRef } from 'react'
import cs from 'classnames'
import { isNumber } from '@/utils/is'
import { throttle } from 'lodash-unified'

export type AnchorItem = {
  title: string
  key: string
}
type AnchorProps = {
  className?: string
  items: AnchorItem[]
  offset?: number
}

export default function Anchor(props: AnchorProps) {
  const offset = props.offset || 0
  const [activeKey, setActiveKey] = useState<string>()
  const activeIndex = props.items.findIndex(item => item.key === activeKey)
  const translateY = activeIndex * 40 + 'px'
  const timer = useRef<number>()
  const isAnimating = useRef(false)

  function onAnchorClick(e: React.MouseEvent, key: string) {
    if (isNumber(timer.current)) {
      clearTimeout(timer.current)
    }
    isAnimating.current = true
    e.preventDefault()
    const element = document.getElementById(key)!
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + document.documentElement.scrollTop - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
    setActiveKey(key)

    timer.current = window.setTimeout(() => {
      isAnimating.current = false
    }, 3000)
  }

  useEffect(function () {
    
    const onScroll = throttle(function onScroll() {
      const anchors = props.items.map(item => document.getElementById(item.key))
      if (isAnimating.current) return
      const activeIndex = anchors.findIndex(anchor => {
        const { height, top } = anchor!.getBoundingClientRect()
        return top <= 0 && Math.abs(top) < height || top > 0 && top <= offset
      })
      const activeKey = activeIndex === -1 ? '' : props.items[activeIndex].key
      setActiveKey(activeKey)
    }, 150)

    window.addEventListener('scroll', onScroll)

    return function () {
      window.removeEventListener('scroll', onScroll)
    }
  }, [offset, props.items])

  return (
    <div className={cs('relative before:absolute before:top-0 before:bottom-0 before:left-0 before:w-0.5 before:bg-gray-border', props.className)}>
      {activeKey && <span style={{ transform: `translateY(${translateY})` }} className="transition-transform w-0.5 h-10 absolute left-0 top-0 bg-primary-light-2"></span>}
      {
        props.items.map(item => (
          <div className="whitespace-nowrap pl-2 h-10 flex items-center" key={item.key}>
            <a onClick={e => onAnchorClick(e, item.key)} className={cs('text-dark3 transition-colors text-14 no-underline', item.key === activeKey && 'text-primary-light-2')} href={`#${item.key}`}>{item.title}</a>
          </div>
        ))
      }
    </div>
  )
}
