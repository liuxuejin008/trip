import { useParams } from 'react-router-dom'
import Overview from './Overview'

export default function Result() {
  const params = useParams<{id: string}>()

  console.log(params)
  return (
    <div>
      <Overview />
    </div>
  )
}
