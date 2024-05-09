import { useParams } from 'react-router-dom'
import Overview from './Overview'
import Actions from './Actions'
import CardList from './CardList'
import Rate from './Rate'

export default function Result() {
  const params = useParams<{id: string}>()

  console.log(params)
  return (
    <div>
      <Overview />
      <div className="flex flex-col items-center">
        <Actions />
        <CardList />
        <Rate />
      </div>
    </div>
  )
}
