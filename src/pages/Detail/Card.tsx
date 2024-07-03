export function Card({ index }: { index: number }) {
  return (
    <div className="w-[832px] flex flex-col">
      <div className="flex gap-[18px]">
        <div className="flex flex-col gap-3 after:w-[180px] after:h-0.5 after:bg-[#4396FE]">
          <div className="text-[63px] font-semibold">
            <span className="text-[#C2C2C2]">Day</span>
            <span className="text-[#4396FE]">{index}</span>
          </div>
        </div>
        <div className="flex flex-col justify-end gap-1 text-[#414141]">
          <h3 className="text-[40px] font-semibold">曼谷城市文化探索</h3>
          <p className="text-24 font-normal leading-6">历史与现代交织的都市体验</p>
        </div>
      </div>
      <div className="mt-16 text-16 text-[#515151]">
        <div className="mb-8">
          1.大皇宫（9:00-12:00）
          <div className="mt-2" />
          - 详细介绍：大皇宫位于泰国首都曼谷，是泰国王室的象征和国家的标志，同时也是曼谷最重要的旅游景点之一。大皇宫建筑群包括玉佛寺、阿玛林宫等多座宫殿和寺庙，融合了泰国传统建筑和西方元素，金碧辉煌，美轮美奂。在这里，您可以欣赏到泰国传统艺术的精华，如精美的壁画和雕塑。评分：4.8/5
          <div className="mt-2" />
          - 游览时长：约3小时
          <div className="mt-2" />
          - 接下来，前往附近的卧佛寺，品尝街头小吃。
        </div>

        <div className="mb-8">
          2. 卧佛寺（13:00-15:00）
          <div className="mt-2">
          - 详细介绍：卧佛寺，又称 Wat Pho，是曼谷最古老的寺庙之一，以其巨大的卧佛雕像闻名。这尊卧佛长达46米，高15米，全身覆盖金箔，眼睛镶嵌珍珠，是世界上最大的卧佛像。寺内还有99座佛塔和泰国最大的按摩学校，您可以在这里体验正宗的泰式按摩。评分：4.6/5
          </div>
          <div className="mt-2">
            - 游览时长：约2小时
          </div>
          <div className="mt-2" />
          - 必吃美食：街头小吃，如泰式炒河粉、椰奶冰淇淋
        </div>
        <div>
          3. 湄南河夜游（18:00-20:00）
          <div className="mt-2" />
          - 详细介绍：在湄南河上乘坐游船，欣赏曼谷的夜景，包括郑王庙、大皇宫等沿岸标志性建筑的灯光。游船晚餐提供泰式美食，让您在享受美景的同时品味泰国风味。评分：4.5/5
          <div className="mt-2" />
          - 预计费用：约500泰铢
        </div>
      </div>
    </div>
  )
}