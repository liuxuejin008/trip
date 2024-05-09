import { useState, useEffect } from 'react'
import Overview from './Overview'
import Actions from './Actions'
import CardList from './CardList'
import Rate from './Rate'
import ShareButton from './ShareButton'
import Footer from '@/components/Footer'
import type { TravelResult } from '@/services/travel'

type ResultProps = {
  data: TravelResult
  refresh: () => Promise<TravelResult>
}
export default function Result(props: ResultProps) {
  const [result, setResult] = useState<TravelResult>(props.data)

  useEffect(function () {
    setResult(props.data)
  }, [props.data])

  return (
    <>
      <div className="mb-16">
        <Overview data={result} />
        <div className="flex flex-col items-center">
          <Actions refresh={props.refresh} data={result} setData={setResult} />
          <CardList />
          <Rate />
          <ShareButton/>
        </div>
      </div>
      <Footer />
    </>
  )
}
