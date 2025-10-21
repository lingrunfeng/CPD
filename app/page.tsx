import { VideoCard } from "@/components/sections/VideoCard"
import { AboutCard } from "@/components/sections/AboutCard"
import { ServiceCard } from "@/components/sections/ServiceCard"
import { ImageCard } from "@/components/sections/ImageCard"
import { QuoteCard } from "@/components/sections/QuoteCard"
import { CTACard } from "@/components/sections/CTACard"
import { StatsCard } from "@/components/sections/StatsCard"

/**
 * 创意工作室主页 - 组件化版本
 * 保持原始的精美布局，但使用组件化结构
 */
export default function Home() {
  const services = [
    { name: "品牌视频" },
    { name: "商业摄影" },
    { name: "创意策划" },
    { name: "后期制作" }
  ]

  const stats = [
    { value: "500+", label: "完成项目" },
    { value: "98%", label: "客户满意度" }
  ]

  return (
    <main className="h-screen bg-background p-4 md:p-6 overflow-hidden relative">
      {/* 背景装饰元素 */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[15%] left-[10%] w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-[50%] right-[15%] w-40 h-40 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[25%] left-[30%] w-36 h-36 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      {/* 主要内容区域 */}
      <div className="h-full max-w-[1600px] mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-3 md:gap-4 h-full">
          {/* 视频展示区域 */}
          <VideoCard
            videoSrc="/cinematic-video-production.png"
            posterSrc="/cinematic-video-production-behind-the-scenes.jpg"
            title="创意视频作品"
            description="专注于视觉叙事与品牌创意"
          />

          {/* 关于介绍区域 */}
          <AboutCard
            title="创意工作室哈哈哈"
            subtitle="关于"
            description="专注于视觉叙事与品牌创意"
          />

          {/* 服务项目区域 */}
          <ServiceCard
            title="服务"
            services={services}
          />

          {/* 图片展示区域 */}
          <ImageCard
            imageSrc="/minimalist-creative-workspace-desk-from-above.jpg"
            alt="创意工作空间"
            gridClass="col-span-1 md:col-span-2 lg:col-span-3 row-span-1"
          />

          <ImageCard
            imageSrc="/minimalist-portrait-photography-natural-light.jpg"
            alt="人像摄影"
            gridClass="col-span-2 md:col-span-3 lg:col-span-4 row-span-1"
          />

          {/* 引言展示区域 */}
          <QuoteCard
            quote="每一帧都是故事"
          />

          {/* 行动号召区域 */}
          <CTACard
            title="开始合作"
            description="让我们一起创造视觉体验"
            buttonText="联系我们"
          />

          {/* 统计数据区域 */}
          <StatsCard
            title="成就"
            stats={stats}
          />
        </div>
      </div>
    </main>
  )
}

