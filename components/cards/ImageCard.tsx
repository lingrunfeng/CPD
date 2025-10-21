import { LucideIcon } from "lucide-react"

interface ImageCardProps {
  /** 图片源路径 */
  imageSrc: string
  /** 图片描述 */
  alt: string
  /** 悬停时显示的图标 */
  icon?: LucideIcon
  /** 自定义类名 */
  className?: string
}

/**
 * 图片展示卡片组件
 * 用于展示创意作品图片，支持悬停效果和图标显示
 */
export function ImageCard({
  imageSrc,
  alt,
  icon: Icon,
  className = ""
}: ImageCardProps) {
  return (
    <div className={`card-base bg-muted group card-shadow hover:card-shadow-hover hover-lift ${className}`}>
      <img
        src={imageSrc}
        alt={alt}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[var(--transition-slower)]"
      />
      {Icon && (
        <div className="absolute top-3 right-3 backdrop-blur-icon rounded-full p-2 shadow-sm border border-border/50 opacity-0 group-hover:opacity-100 transition-opacity duration-[var(--transition-normal)]">
          <Icon className="w-3.5 h-3.5 text-foreground" />
        </div>
      )}
    </div>
  )
}
