import cs from 'classnames'

type ButtonProps = {
  className?: string
  children: React.ReactNode
  onClick?: () => void
}

function Button(props: ButtonProps) {
  return (
    <button onClick={props.onClick} className={cs('w-[116px] h-9 rounded-18 flex items-center justify-center text-white text-18 font-semibold shadow-button2',props.className)}>
      {props.children}
    </button>
  )
}

type ListItemProps = {
  label: string
  value?: string
  onClick?: () => void
}
function ListItem (props: ListItemProps) {
  return (
    <div className="flex justify-between items-center text-18 w-[420px] mb-9 font-semibold">
      <span>{props.label}</span>
      <span>{props.value}</span>
      <button className="border-none outline-none bg-none text-error-delete" onClick={props.onClick}>解绑</button>
    </div>
  )
}

export default function Settings() {
  return (
    <>
      <div className="text-24">昵称：<span className="ml-6">对角另一面</span></div>
      <div className="mt-9">
        <div className='flex gap-9'>
          <Button className="bg-dark-light">修改昵称</Button>
          <Button className="bg-dark-light">修改密码</Button>
        </div>
        <Button className="mt-9 bg-error">退出账户</Button>
      </div>
      <div className="mt-9">
        <ListItem label="绑定微信" value="微信昵称" />
        <ListItem label="绑定手机号" value="13129876578" />
        <ListItem label="绑定邮箱" value="xxxxx@gmail.com" />
      </div>
    </>
  )
}