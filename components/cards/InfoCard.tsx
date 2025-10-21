import { LucideIcon } from "lucide-react"

interface InfoCardProps {
  /** 卡片标题 */
  title: string
  /** 卡片副标题 */
  subtitle?: string
  /** 卡片描述 */
  description?: string
  /** 卡片图标 */
  icon?: LucideIcon
  /** 图标背景色变体 */
  iconVariant?: "primary" | "secondary" | "accent" | "muted"
  /** 卡片变体 */
  variant?: "default" | "primary" | "secondary" | "accent"
  /** 自定义类名 */
  className?: string
  /** 子内容 */
  children?: React.ReactNode
}

/**
 * 信息展示卡片组件
 * 用于展示关于、服务、成就等信息，支持多种变体和图标
 */
export function InfoCard({
  title,
  subtitle,
  description,
  icon: Icon,
  iconVariant = "primary",
  variant = "default",
  className = "",
  children
}: InfoCardProps) {
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
    switch (iconVariant) {
      case "primary":
        return `${baseStyles} bg-primary/10 text-primary`
      case "secondary":
        return `${baseStyles} bg-secondary-foreground/10 text-secondary-foreground`
      case "accent":
        return `${baseStyles} bg-accent-foreground/10 text-accent-foreground`
      case "muted":
        return `${baseStyles} bg-muted-foreground/10 text-muted-foreground`
      default:
        return `${baseStyles} bg-primary/10 text-primary`
    }
  }

  return (
    <div className={`card-base ${getVariantStyles()} hover-lift p-5 md:p-6 flex flex-col justify-center ${className}`}>
      {/* 标题区域 */}
      <div className="flex items-center gap-2 mb-3">
        {Icon && (
          <div className={getIconVariantStyles()}>
            <Icon className="w-4 h-4" />
          </div>
        )}
        {subtitle && (
          <h3 className="text-section-title text-muted-foreground">{subtitle}</h3>
        )}
      </div>

      {/* 主标题 */}
      <h2 className="text-card-title mb-2 text-balance">{title}</h2>

      {/* 描述 */}
      {description && (
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      )}

      {/* 子内容 */}
      {children}
    </div>
  )
}

