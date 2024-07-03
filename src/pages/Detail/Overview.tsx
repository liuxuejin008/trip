import IMAGE_BG from './images/bg.png'
import IMAGE_DATE from './images/date.png'

export function Overview() {
  return (
    <div style={{backgroundImage: `url(${IMAGE_BG})`}} className="h-[494px] box-border bg-no-repeat bg-cover text-white pt-[76px] flex justify-center">
      <div className="w-[937px] box-border p-8 flex gap-8 bg-[rgba(90,98,108,0.8)] rounded-20 h-[287px] mt-11">
        <div className="flex-shrink-0 w-[396px] h-[223px]">
          <img src="https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/7382896b854944e1a6c86d783ab34a02_mergeImage.png" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 flex flex-col gap-[18px]">
          <h2 className="text-48 font-semibold">曼谷</h2>
          <div className="flex items-center text-16 gap-2">
            <img className="w-5 h-5" src={IMAGE_DATE}/>
            2024.6.30 - 2024.7.01
          </div>
          <div className="text-18 leading-6 line-clamp-4">在这三天的旅程中，您将沉浸在泰国的热带风光在这三天的旅程中，您将沉浸在泰国的热带风光在这三天的旅程中，您将沉浸在泰国的热带风光在这三天的旅程中，您将沉浸在泰国的热带风光在这三天的旅程中，您将沉浸在泰国的热带风光在这三天的旅程中，您将沉浸在泰国的热带风光在这三天的旅程中，您将沉浸在泰国的热带风光在这三天的旅程中，您将沉浸在泰国的热带风光在这三天的旅程中，您将沉浸在泰国的热带风光</div>
        </div>
      </div>
    </div>
  )
}
