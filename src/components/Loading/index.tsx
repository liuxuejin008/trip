import './index.scss'

export default function Loading() {
  const loadingDot = Array.from({ length: 5 }).map((_, index) => index)

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-dark">
      <h2 className="text-48 text-white font-semibold">游攻略</h2>
      <p className="text-24 text-white font-semibold">AI 帮你制作旅行攻略</p>
      <div className="loading-dot flex items-center gap-8 mt-16">
        {loadingDot.map((index => <div className="w-16 h-16 rounded-full scale-0 bg-red-600" key={index}></div>))}
      </div>
    </div>
  )
}