import IconDelete from '@/components/Icons/Delete'
import type { TravelLineListItem } from '@/services/travel'
import { deleteTravelLine } from '@/services/travel'
import { useNavigate } from 'react-router-dom'
import { useToast } from '@/components/Toast/use-toast'

type ListItemProps = {
  data: TravelLineListItem
  getData: () => void
}

function ListItem(props: ListItemProps) {
  const { data } = props
  const { toast, dismiss } = useToast()
  const navigate = useNavigate()

  function onClick () {
    navigate(`/result/${data.id}`)
  }

  async function onDelete () {
    const { id } = toast({
      title: '正在删除...',
      icon: 'loading'
    })
    try {
      await deleteTravelLine(data.id)
      toast({
        title: '删除成功',
        icon: 'success'
      })
      props.getData()
    } catch (error: any) {
      toast({
        title: error.message || '删除失败',
        icon: 'error'
      })
    } finally {
      dismiss(id)
    }
  }

  return (
    <li className="h-[42px] text-18 mb-9 font-semibold border-b-2 border-dark-light-5 flex items-center justify-between">
      <p onClick={onClick} className="cursor-pointer">{data.title}</p>
      <IconDelete onClick={onDelete} className="text-error-delete w-8 h-9 cursor-pointer" />
    </li>
  )
}

type ListProps = {
  title: string
  data: TravelLineListItem[]
  getData: () => void
}

export default function List(props: ListProps) {

  return (
    <div className="text-primary-light">
      <h2 className="text-24">{props.title}</h2>
      {props.data.length ? (
        <ul className="mt-12">
          {props.data.map((item) => (
            <ListItem getData={props.getData} key={item.id} data={item} />
          ))}
        </ul>
      ) : <div>暂无数据</div>}

    </div>
  )
}