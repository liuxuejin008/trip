import DateRangePicker from '@/components/DateRangePicker'
import IconDownload from '@/components/Icons/Download'
import IconMap from '@/components/Icons/Map'
import IconRefresh from '@/components/Icons/Refresh'
import IconSave from '@/components/Icons/Save'

type ActionButtonProps = {
  icon: React.ReactNode
  children: React.ReactNode
  onClick: () => void
}
function ActionButton(props: ActionButtonProps) {
  return (
    <div onClick={props.onClick} className="mt-14 w-[232px] h-[71px] bg-dark-light rounded-36 flex items-center justify-center shadow-date border border-dark-light-5 text-white text-18 cursor-pointer">
      {props.icon}
      <span className="ml-7">{props.children}</span>
    </div>
  )
}

export default function Actions() {
  return (
    <>
      <div className="mt-[74px] text-dark text-36 font-medium">旅程日期</div>
      <DateRangePicker className="mt-14" />
      <div className="flex justify-center gap-8">
        <ActionButton icon={<IconDownload className="w-[46px] h-[38px]" />} onClick={() => {}}>
          下载行程
        </ActionButton>
        <ActionButton icon={<IconMap className="w-10 h-[42px]" />} onClick={() => {}}>
          查看地图
        </ActionButton>
        <ActionButton icon={<IconSave className="w-11 h-11" />} onClick={() => {}}>
          保存行程
        </ActionButton>
        <ActionButton icon={<IconRefresh className="w-[34px] h-[34px]"/>} onClick={() => {}}>
          重新生成
        </ActionButton>
      </div>
    </>
  )
}