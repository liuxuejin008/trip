import { useParams } from 'react-router-dom'
import Overview from './Overview'
import Actions from './Actions'
import CardList from './CardList'
import Rate from './Rate'
import ShareButton from './ShareButton'
import Footer from '@/components/Footer'

export default function Result() {
  const params = useParams<{id: string}>()

  console.log(params)
  return (
    <>
      <div className="mb-16">
        <Overview />
        <div className="flex flex-col items-center">
          <Actions />
          <CardList />
          <Rate />
          <ShareButton/>
        </div>
      </div>
      <Footer />
    </>
  )
}
