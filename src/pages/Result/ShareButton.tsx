import IconShare from '@/components/Icons/Share'

export default function ShareButton() {
  return (
    <button className="bg-primary-light w-[476px] h-[126px] rounded-36 flex items-center justify-center text-white text-36 mt-16">
      <IconShare className="w-[60px] h-[83px] text-warn-light mr-[74px]" />
      分享行程
    </button>
  )
}
