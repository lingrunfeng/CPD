import { Video, Sparkles } from "lucide-react"

interface VideoCardProps {
  /** 视频源路径 */
  videoSrc: string
  /** 视频封面图片 */
  posterSrc: string
  /** 视频标题 */
  title: string
  /** 视频描述 */
  description?: string
  /** 是否自动播放 */
  autoPlay?: boolean
  /** 是否循环播放 */
  loop?: boolean
  /** 是否静音 */
  muted?: boolean
}

/**
 * 视频展示卡片组件
 * 保持原始的精美布局和样式
 */
export function VideoCard({
  videoSrc,
  posterSrc,
  title,
  description,
  autoPlay = true,
  loop = true,
  muted = true
}: VideoCardProps) {
  return (
    <div className="col-span-2 md:col-span-4 lg:col-span-6 row-span-2 bg-gradient-to-br from-muted to-card rounded-[1.25rem] overflow-hidden group relative shadow-[0_2px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] transition-all duration-700">
      <video
        className="w-full h-full object-cover"
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline
        poster={posterSrc}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-xl rounded-full p-2.5 shadow-sm border border-border/50">
        <Video className="w-4 h-4 text-foreground" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-background" />
          <h2 className="text-background text-xl md:text-2xl font-semibold">{title}</h2>
        </div>
        {description && (
          <p className="text-background/80 text-sm mt-1">{description}</p>
        )}
      </div>
    </div>
  )
}

