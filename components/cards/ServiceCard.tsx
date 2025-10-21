import { LucideIcon } from "lucide-react"

interface ServiceItem {
  /** 服务项目名称 */
  name: string
  /** 服务项目描述 */
  description?: string
}

interface ServiceCardProps {
  /** 服务标题 */
  title: string
  /** 服务图标 */
  icon?: LucideIcon
  /** 服务项目列表 */
  services: ServiceItem[]
  /** 卡片变体 */
  variant?: "primary" | "secondary" | "accent"
  /** 自定义类名 */
  className?: string
}

/**
 * 服务展示卡片组件
 * 用于展示服务项目列表，支持悬停动画效果
 */
export function ServiceCard({
  title,
  icon: Icon,
  services,
  variant = "primary",
  className = ""
}: ServiceCardProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "gradient-primary text-primary-foreground card-shadow-primary hover:card-shadow-primary-hover"
      case "secondary":
        return "gradient-secondary text-secondary-foreground card-shadow-primary hover:card-shadow-primary-hover"
      case "accent":
        return "gradient-accent text-accent-foreground card-shadow-primary hover:card-shadow-primary-hover"
      default:
        return "gradient-primary text-primary-foreground card-shadow-primary hover:card-shadow-primary-hover"
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
        return `${baseStyles} bg-primary-foreground/10 text-primary-foreground`
    }
  }

  return (
    <div className={`card-base ${getVariantStyles()} hover-lift p-5 md:p-6 flex flex-col justify-between ${className}`}>
      <div>
        {/* 标题区域 */}
        <div className="flex items-center gap-2 mb-4">
          {Icon && (
            <div className={getIconVariantStyles()}>
              <Icon className="w-4 h-4" />
            </div>
          )}
          <h3 className="text-section-title font-medium opacity-90">{title}</h3>
        </div>

        {/* 服务列表 */}
        <ul className="space-y-3">
          {services.map((service, index) => (
            <li
              key={index}
              className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-[var(--transition-normal)]"
            >
              <span className="w-1.5 h-1.5 bg-current rounded-full"></span>
              <span className="text-sm md:text-base">{service.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

