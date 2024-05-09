import { useParams } from 'react-router-dom'
import Overview from './Overview'
import Actions from './Actions'
import CardList from './CardList'

export default function Result() {
  const params = useParams<{id: string}>()

  console.log(params)
  return (
    <div>
      <Overview />
      <div className="flex flex-col items-center">
        <Actions />
        <CardList />
      </div>
    </div>
  )
}
