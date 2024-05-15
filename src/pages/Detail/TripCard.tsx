import { useEffect, useMemo } from 'react'
import CardHeader from '@/components/CardHeader'
import IconScenic from '@/components/Icons/Scenic'
import styleJson from './styleJson'

type TitleProps = {
  children: React.ReactNode
}
function Title(props: TitleProps) {
  return (
    <h3 className="text-dark text-24 font-medium leading-8 flex items-center gap-4 before:w-2.5 before:h-2.5 before:rounded-full before:bg-primary-light-2">{props.children}</h3>
  )
}

function TripItem() {
  return (
    <div className="flex gap-3 mb-1">
      <div className="flex flex-col items-center w-9 after:flex-1 after:border-dashed after:border-l after:border-primary after:my-2">
        <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
          <IconScenic className="w-4" />
        </div>
      </div>
      <div className="flex-1 pb-6">
        <p className="mb-4 text-dark3 h-9 font-medium">涠洲岛火山口地质公园（9:00-12:00）</p>
        <p className="mb-4 text-dark3"><span className="inline-block font-medium before:align-middle before:mr-3 before:inline-block before:w-1 before:h-1 before:rounded-full before:bg-dark2">评分：</span>4.5/5</p>
        <p className="mb-4 text-dark3"><span className="inline-block font-medium before:align-middle before:mr-3 before:inline-block before:w-1 before:h-1 before:rounded-full before:bg-dark2">详细介绍：</span>颐和园是中国现存规模最大、保存最完整的皇</p>
        <p className="mb-4 text-dark3"><span className="inline-block font-medium before:align-middle before:mr-3 before:inline-block before:w-1 before:h-1 before:rounded-full before:bg-dark2">游览时长：</span>约 3 小时</p>
      </div>
    </div>
  )
}

type TripCardProps = {
  day: string
  id: string
}
export default function TripCard(props: TripCardProps) {
  const id = useMemo(() => 'map_' + Math.random().toString(36).slice(2), [])

  useEffect(function () {
    const map = new window.BMap.Map(id)
    map.centerAndZoom(new window.BMap.Point(116.404, 39.915), 14)
    map.setMapStyleV2({
      styleJson
    })
    const driving = new window.BMap.DrivingRoute(map, {
      renderOptions: {
        map: map,
        autoViewport: true
      },
      onPolylinesSet: function (routes: any) {
        routes.forEach(function (route: any) {
          const polyline = route.getPolyline()
          polyline.setStrokeColor('#624AFF')
        })
      }
    })
    const start = new window.BMap.Point(116.310791, 40.003419)
    const end = new window.BMap.Point(116.486419, 39.877282)
    driving.search(start, end)
  }, [id])

  return (
    <div id={props.id} className="w-[1146px]">
      <CardHeader
        number={props.day}
        title="初识涠洲，海岛风情"
        description="探索涠洲岛的自然与人文景观"
      />
      <div className="mt-8 flex gap-3">
        <div className="mt-6">
          <Title>当日攻略</Title>
          <div style={{ borderImage: 'linear-gradient(180deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)) 2 2' }} className="box-border p-10 w-[464px] h-[470px] rounded-2xl bg-trip-card mt-6">
            <div className="overflow-y-auto h-full">
              <TripItem />
              <TripItem />
              <TripItem />
            </div>
          </div>
        </div>
        <div className="mt-6 flex-1 flex flex-col">
          <Title>景区地图</Title>
          <div id={id} className="mt-6 flex-1">

          </div>
        </div>
      </div>
    </div>
  )
}