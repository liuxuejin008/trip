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
}
export default function Result(props: ResultProps) {
  const [result, setResult] = useState<TravelResult>(props.data)
  const [disabled, setDisabled] = useState(false)

  useEffect(function () {
    setResult(props.data)
  }, [props.data])

  return (
    <>
      <div className="mb-16">
        <Overview data={result} />
        <div className="flex flex-col items-center">
          <Actions disabled={disabled} setDisabled={setDisabled} data={result} setData={setResult} />
          <CardList disabled={disabled} setDisabled={setDisabled} data={result} setData={setResult} />
          <Rate />
          <ShareButton/>
        </div>
      </div>
      <Footer />
    </>
  )
}
