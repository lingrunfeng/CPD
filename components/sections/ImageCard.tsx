import { Camera, Sparkles } from "lucide-react"

interface ImageCardProps {
  /** 图片源路径 */
  imageSrc: string
  /** 图片描述 */
  alt: string
  /** 悬停时显示的图标 */
  icon?: React.ComponentType<{ className?: string }>
  /** 网格布局类名 */
  gridClass: string
}

/**
 * 图片展示卡片组件
 * 保持原始的精美布局和样式
 */
export function ImageCard({
  imageSrc,
  alt,
  icon: Icon,
  gridClass
}: ImageCardProps) {
  return (
    <div className={`${gridClass} bg-muted rounded-[1.25rem] overflow-hidden group shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] transition-all duration-700 hover:-translate-y-1 border border-border/50`}>
      <img
        src={imageSrc}
        alt={alt}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
      {Icon && (
        <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-xl rounded-full p-2 shadow-sm border border-border/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Icon className="w-3.5 h-3.5 text-foreground" />
        </div>
      )}
    </div>
  )
}

