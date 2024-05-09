import IconDelete from '@/components/Icons/Delete'

type ListItemProps = {
  label: string
}

function ListItem(props: ListItemProps) {
  return (
    <li className="h-[42px] text-18 mb-9 font-semibold border-b-2 border-dark-light-5 flex items-center justify-between">
      <p>{props.label}</p>
      <IconDelete className="text-error-delete w-8 h-9 cursor-pointer" />
    </li>
  )
}

type ListProps = {
  title: string
}

export default function List(props: ListProps) {
  const list = ['地点 / 简要介绍', '北京 / 景山之旅', '广州 / 黄埔军校之旅']

  return (
    <div className="text-primary-light">
      <h2 className="text-24">{props.title}</h2>
      <ul className="mt-12">
        {list.map((item) => (
          <ListItem key={item} label={item} />
        ))}
      </ul>
    </div>
  )
}