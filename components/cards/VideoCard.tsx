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
  /** 自定义类名 */
  className?: string
}

/**
 * 视频展示卡片组件
 * 用于展示创意视频作品，支持悬停效果和视频播放
 */
export function VideoCard({
  videoSrc,
  posterSrc,
  title,
  description,
  autoPlay = true,
  loop = true,
  muted = true,
  className = ""
}: VideoCardProps) {
  return (
    <div className={`card-base gradient-muted group relative card-shadow hover:card-shadow-hover hover-lift ${className}`}>
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
      
      {/* 视频图标 */}
      <div className="absolute top-4 right-4 backdrop-blur-icon rounded-full p-2.5 shadow-sm border border-border/50">
        <Video className="w-4 h-4 text-foreground" />
      </div>
      
      {/* 悬停时显示的内容 */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[var(--transition-slow)] flex items-end p-6">
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

