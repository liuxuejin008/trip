import DayCount from '@/components/DayCount'
import { useToast } from '@/components/Toast/use-toast'
import IconMap from '@/components/Icons/Map2'
import IconDownload from '@/components/Icons/Download2'
import IconSave from '@/components/Icons/Save2'
import IconReset from '@/components/Icons/Reset'

type ActionButtonProps = {
  icon: React.ReactNode
  children: React.ReactNode
  onClick: () => void
  disabled?: boolean
}
function ActionButton(props: ActionButtonProps) {
  return (
    <button disabled={props.disabled} onClick={props.onClick} className="transition-all ease-linear w-[172px] h-14 rounded-64 flex items-center justify-center border border-primary-light-2 text-primary-light-2 text-16 cursor-pointer hover:text-white hover:bg-primary-light-2 hover:border-primary-light-2">
      {props.icon}
      <span className="ml-2">{props.children}</span>
    </button>
  )
}

export default function Actions() {
  const { toast } = useToast()

  function noop() {
    toast({
      title: '功能暂未开放，敬请期待',
      icon: 'error'
    })
  }

  return (
    <div className="flex flex-col items-center pt-32">
      <h2 className="text-36 text-dark font-medium">旅行日期</h2>
      <div className="text-24 text-dark font-medium mt-7">2024年12月27日 ～ 2024年12月31日</div>
      <DayCount className="mt-7">
        共三天
      </DayCount>
      <div className="flex mt-[60px] gap-14">
        <ActionButton icon={<IconMap className="w-[18px] h-[18px]" />} onClick={noop}>
          查看地图
        </ActionButton>
        <ActionButton icon={<IconDownload className="w-[18px] h-[18px]" />} onClick={noop}>
          下载行程
        </ActionButton>
        <ActionButton icon={<IconSave className="w-[18px] h-[18px]" />} onClick={noop}>
          保存行程
        </ActionButton>
        <ActionButton icon={<IconReset className="w-[18px] h-[18px]" />} onClick={noop}>
          重新生成
        </ActionButton>
      </div>
    </div>
  )
}