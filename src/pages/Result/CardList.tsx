import { useState, useEffect, useRef } from 'react'
import IconMinus from '@/components/Icons/Minus'
// import { PopoverContent, Popover, PopoverTrigger } from '@/components/Popover'
import type { TravelResult, TravelLineLineList } from '@/services/travel'
import {
  addTravelLineByTime, 
  // rewriteTravelLineInfo, regenerationTravelLineInfo
} from '@/services/travel'
import { useToast } from '@/components/Toast/use-toast'
import { getFormateDate } from '@/utils/date'
import { add } from 'date-fns'
import { useTranslation } from 'react-i18next'
import { i18n } from '@/i18n'
import { marked } from 'marked'

function Recommend() {
  const { t } = useTranslation()
  const list = [
    'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng23c6a51ed1e51317604113258093c8755e514ca5797c027c447d976fcb56db12',
    'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngc463e051506f395efbf286b850c0a077329cd2be12796fd157dbf4f308fc4c88',
    'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngd50dc330f29f253ab05f6b0d23796143dfec7b5591df0a8c40eb800551f22aaa'
  ]
  return (
    <div className="flex overflow-x-auto gap-10 mt-10">
      {list.map(src => (
        <div className="relative w-[196px] h-[246px] shadow-pic rounded-lg" key={src}>
          <img className="w-full h-full object-cover" src={src} />
          <a className="no-underline absolute w-[118px] h-11 bg-primary-light text-white flex items-center justify-center rounded-36 bottom-[22px] left-1/2 -translate-x-1/2 text-16" href="#">{t('jumpNow')}</a>
        </div>
      ))}
    </div>
  )
}

// function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }) {
//   return (
//     <button {...props} className="w-[178px] cursor-pointer h-[54px] outline-none shadow-button bg-dark-light rounded-36 flex items-center justify-center text-18 font-light text-white">
//       {props.children}
//     </button>
//   )
// }

// type EditButtonProps = {
//   disabled: boolean
//   onRewrite: (content: string) => void
// }
// function EditButton(props: EditButtonProps) {
//   const { t } = useTranslation()
//   const [open, setOpen] = useState(false)
//   const [content, setContent] = useState<string>()
//   const { toast } = useToast()
//   useEffect(function () {
//     if (open) {
//       setContent('')
//     }
//   }, [open])

//   async function onRewrite() {
//     if (!content) {
//       toast({ title: t('contentRequired'), icon: 'error' })
//       return
//     }
//     props.onRewrite(content)
//     setOpen(false)
//   }

//   return (
//     <Popover open={open} onOpenChange={setOpen}>
//       <PopoverTrigger>
//         <Button disabled={props.disabled} >{t('edit')}</Button>
//       </PopoverTrigger>
//       <PopoverContent sideOffset={20} className="w-[706px] border-none h-72 bg-dark !rounded-30 p-8 box-border flex flex-col justify-between">
//         <h2 className="text-white text-36 font-semibold">{t('editWithAI')}</h2>
//         <input value={content} onChange={(e) => setContent(e.target.value)} className="w-full h-[60px] outline-none bg-white box-border rounded-18 px-5 text-20 font-semibold text-dark-light placeholder:text-dark-light" placeholder={t('contentTip')} type="text" />
//         <button onClick={onRewrite} className="outline-none w-48 h-[50px] bg-primary-light rounded-lg text-white text-20 flex items-center justify-center self-end font-semibold">{t('generate')}</button>
//       </PopoverContent>
//     </Popover>
//   )
// }

function numberToChinese(num: number) {
  if (i18n.language !== 'zh') return num

  const chnNumChar = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
  if (num < 10) {
    return chnNumChar[num]
  } else if (num === 10) {
    return '十'
  } else {
    const tens = Math.floor(num / 10)
    const units = num % 10
    let result = ''
    if (tens > 1) {
      result += chnNumChar[tens]
    }
    result += '十'
    if (units > 0) {
      result += chnNumChar[units]
    }
    return result
  }
}

function normalizeContent(content: string) {
  return marked(content)
  // return content.replace(/\n/g, '<br/>')
}

function getDateByIndex(startTime: string, index: number) {
  return getFormateDate(add(new Date(startTime), { days: index }))
}

type CardItemProps = {
  item: TravelLineLineList
  data?: TravelResult
  index: number
  setData: (data: TravelResult) => void
  disabled: boolean
  setDisabled: (disabled: boolean) => void
}
function CardItem(props: CardItemProps) {
  const { t } = useTranslation()
  const $container = useRef<HTMLDivElement>(null)
  const { item, data, index, setData, disabled, setDisabled } = props
  const [isEdit, setIsEdit] = useState(false)
  const dayCount = numberToChinese(index + 1)
  const { toast, dismiss } = useToast()
  const $content = useRef<HTMLDivElement>(null)
  // 是否可以删除，如果不止一天，则可以删除
  // const isShowMinus = index !== 0 || data && data.tralineInfoList?.length > 1

  function onDelete() {
    if (disabled || !data) return
    const list = data.tralineInfoList.filter((_, i) => i !== index)
    setData({ ...data, dayNumber: list.length, endTime: getDateByIndex(data.startTime, list.length - 1), tralineInfoList: list })
  }

  // async function onRegenerate() {
  //   if (disabled || !data) return
  //   setDisabled(true)
  //   const { id } = toast({ title: t('reGenerating'), icon: 'loading' })
  //   try {
  //     const res = item.tralineInfoId ? await regenerationTravelLineInfo(item.tralineInfoId) : await addTravelLineByTime({ location: data.location, tralineTime: getDateByIndex(data.startTime, index) })
  //     setDisabled(false)
  //     const list = data.tralineInfoList.map((line, i) => {
  //       if (i === index) {
  //         return res
  //       }
  //       return line
  //     })
  //     setData({ ...data, tralineInfoList: list })
  //   } catch (e: any) {
  //     toast({ title: e.message || t('reGenerateFail'), icon: 'error' })
  //     setDisabled(false)
  //   } finally {
  //     setDisabled(false)
  //     dismiss(id)
  //   }
  // }

  async function addDate() {
    if (disabled || !data) return
    setDisabled(true)
    const { id } = toast({ title: t('addDating'), icon: 'loading' })
    try {
      const res = await addTravelLineByTime({ location: data.location, tralineTime: getDateByIndex(data.startTime, index + 1) })
      data.tralineInfoList.splice(index + 1, 0, res)
      setData({ ...data, tralineInfoList: [...data.tralineInfoList], dayNumber: data.tralineInfoList.length, endTime: getDateByIndex(data.startTime, data.tralineInfoList.length - 1) })
    } catch (e: any) {
      toast({ title: e.message || t('addDateFail'), icon: 'error' })
    } finally {
      setDisabled(false)
      dismiss(id)
    }
  }

  // async function onRewrite(content: string) {
  //   if (disabled || !data) return
  //   setDisabled(true)
  //   const { id } = toast({ title: t('editing'), icon: 'loading' })
  //   try {
  //     const res = await rewriteTravelLineInfo({
  //       beforeContent: item.content,
  //       location: data.location,
  //       suggest: content,
  //       tralineTime: getDateByIndex(data.startTime, index)
  //     })
  //     const list = data.tralineInfoList.map((line, i) => {
  //       if (i === index) {
  //         return res
  //       }
  //       return line
  //     })
  //     setData({ ...data, tralineInfoList: list })
  //   } catch (e: any) {
  //     toast({ title: e.message || t('editFail'), icon: 'error' })
  //   } finally {
  //     setDisabled(false)
  //     dismiss(id)
  //   }
  // }

  // function onEdit() {
  //   setIsEdit(true)
  //   setTimeout(() => {
  //     const range = document.createRange()
  //     range.selectNodeContents($content.current!)
  //     const sel = window.getSelection()
  //     sel!.removeAllRanges()
  //     sel!.addRange(range)
  //   }, 0)
  // }

  function onSave () {
    if (!data) return
    setIsEdit(false)
    const content = $content.current!.innerHTML
    const list = data.tralineInfoList.map((line, i) => {
      if (i === index) {
        return { ...line, content }
      }
      return line
    })
    setData({ ...data, tralineInfoList: list })
  }

  
  useEffect(function () {
    if ($container.current && props.data?.status === 3) {
      setTimeout(() => {
        $container.current!.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [])

  useEffect(function () {
    if (props.disabled) {
      $content.current!.scroll({
        top: $content.current!.scrollHeight,
        // behavior: 'smooth'
      })
    }
  }, [props.item.content])

  return (
    <div ref={$container} className="relative w-[1146px] box-border flex flex-col px-16 py-11 rounded-20 bg-primary-light">
      <div className="mt-20 flex items-center justify-between">
        <div className="text-48 text-white font-medium ml-6">{t('dayCount', {dayCount})}</div>
        <div className="ml-20 text-white">
          <div className="font-medium text-24">{item.title}</div>
          <div className="text-18 font-light">{item.subTitle}</div>
        </div>
        {/* <div className="flex items-end gap-5">
          {false && <EditButton disabled={disabled} onRewrite={onRewrite} />}
          <Button disabled={disabled} onClick={onEdit}>{t('edit')}</Button>
          <Button disabled={disabled} onClick={onRegenerate}>{t('reGenerate')}</Button>
        </div> */}
      </div>
      <div ref={$content} contentEditable={isEdit} onBlur={onSave} dangerouslySetInnerHTML={{ __html: normalizeContent(item.content) }} className="h-[398px] mt-12 overflow-y-auto box-border p-11 rounded-lg text-18 text-dark bg-white">
      </div>
      {false && <Recommend />}
      {false && <button onClick={addDate} disabled={disabled} className="absolute bottom-0 right-0 translate-x-full -mr-8 w-[232px] h-[71px] bg-warn-light rounded-36 flex items-center justify-center shadow-date text-18 text-dark font-light">{t('addDate')}</button>}
      {false && <IconMinus onClick={onDelete} className="absolute top-6 right-6 w-[37px] h-[37px] bg-error-close text-white rounded-full cursor-pointer" />}
    </div>
  )
}

type CardListProps = {
  data?: TravelResult
  setData: (data: TravelResult) => void
  disabled: boolean
  setDisabled: (disabled: boolean) => void
}
export default function CardList(props: CardListProps) {
  const { tralineInfoList: list = [] } = props.data || {}
  return (
    <div className="flex flex-col mt-20 gap-20">
      {list.map((item, index) => (
        <CardItem disabled={props.disabled} setDisabled={props.setDisabled} key={item.content + index} item={item} data={props.data} setData={props.setData} index={index} />
      ))}
    </div>
  )
}