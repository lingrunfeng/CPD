import { LucideIcon } from "lucide-react"

interface StatItem {
  /** 统计数据值 */
  value: string
  /** 统计数据标签 */
  label: string
}

interface StatsCardProps {
  /** 统计卡片标题 */
  title: string
  /** 统计卡片图标 */
  icon?: LucideIcon
  /** 统计数据列表 */
  stats: StatItem[]
  /** 卡片变体 */
  variant?: "default" | "primary" | "secondary" | "accent"
  /** 自定义类名 */
  className?: string
}

/**
 * 统计数据展示卡片组件
 * 用于展示成就、统计数据等信息
 */
export function StatsCard({
  title,
  icon: Icon,
  stats,
  variant = "default",
  className = ""
}: StatsCardProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "gradient-primary text-primary-foreground card-shadow-primary hover:card-shadow-primary-hover"
      case "secondary":
        return "gradient-secondary text-secondary-foreground card-shadow-primary hover:card-shadow-primary-hover"
      case "accent":
        return "gradient-accent text-accent-foreground card-shadow-primary hover:card-shadow-primary-hover"
      default:
        return "backdrop-blur-card card-shadow hover:card-shadow-hover"
    }
  }

  const getIconVariantStyles = () => {
    const baseStyles = "icon-container"
    switch (variant) {
      case "primary":
        return `${baseStyles} bg-primary-foreground/10 text-primary-foreground`
      case "secondary":
        return `${baseStyles} bg-secondary-foreground/10 text-secondary-foreground`
      case "accent":
        return `${baseStyles} bg-accent-foreground/10 text-accent-foreground`
      default:
        return `${baseStyles} bg-primary/10 text-primary`
    }
  }

  return (
    <div className={`card-base ${getVariantStyles()} hover-lift p-5 flex flex-col justify-center ${className}`}>
      {/* 标题区域 */}
      <div className="flex items-center gap-2 mb-3">
        {Icon && (
          <div className={getIconVariantStyles()}>
            <Icon className="w-4 h-4" />
          </div>
        )}
        <h3 className="text-section-title text-muted-foreground">{title}</h3>
      </div>

      {/* 统计数据网格 */}
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div key={index}>
            <div className="text-2xl md:text-3xl font-semibold text-foreground mb-1">
              {stat.value}
            </div>
            <div className="text-xs text-muted-foreground">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

