import IconDelete from '@/components/Icons/Delete'
import type { TravelLineListItem } from '@/services/travel'
import { useNavigate } from 'react-router-dom'

type ListItemProps = {
  data: TravelLineListItem
}

function ListItem(props: ListItemProps) {
  const { data } = props
  const navigate = useNavigate()

  function onClick () {
    navigate(`/result/${data.id}`)
  }

  return (
    <li className="h-[42px] text-18 mb-9 font-semibold border-b-2 border-dark-light-5 flex items-center justify-between">
      <p onClick={onClick} className="cursor-pointer">{data.title}</p>
      <IconDelete className="text-error-delete w-8 h-9 cursor-pointer" />
    </li>
  )
}

type ListProps = {
  title: string
  data: TravelLineListItem[]
}

export default function List(props: ListProps) {

  return (
    <div className="text-primary-light">
      <h2 className="text-24">{props.title}</h2>
      {props.data.length ? (
        <ul className="mt-12">
          {props.data.map((item) => (
            <ListItem key={item.id} data={item} />
          ))}
        </ul>
      ) : <div>暂无数据</div>}

    </div>
  )
}