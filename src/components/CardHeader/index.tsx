type CardHeaderProps = {
  number: string
  title: string
  description: string
}
export default function CardHeader(props: CardHeaderProps) {
  return (
    <div className="h-[108px] px-6 rounded-20 bg-trip-title flex items-center gap-6">
      <div className="text-transparent text-88 bg-trip-text bg-clip-text leading-96 font-d-din">{props.number.padStart(2, '0')}</div>
      <div className="w-0.5 h-16 flex flex-col items-center before:w-full before:h-8 before:bg-trip-line after:w-full after:h-8 after:bg-trip-line after:rotate-180">
      </div>
      <div className="text-white">
        <h2 className="text-28 leading-10 font-semibold">{props.title}</h2>
        <p className="text-18 leading-6 font-normal mt-1">{props.description}</p>
      </div>
    </div>
  )
}