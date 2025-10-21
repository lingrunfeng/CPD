import { LucideIcon } from "lucide-react"

interface QuoteCardProps {
  /** 引言内容 */
  quote: string
  /** 引言图标 */
  icon?: LucideIcon
  /** 卡片变体 */
  variant?: "primary" | "secondary" | "accent"
  /** 自定义类名 */
  className?: string
}

/**
 * 引言展示卡片组件
 * 用于展示创意引言或标语，支持多种变体
 */
export function QuoteCard({
  quote,
  icon: Icon,
  variant = "accent",
  className = ""
}: QuoteCardProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "gradient-primary text-primary-foreground card-shadow-primary hover:card-shadow-primary-hover"
      case "secondary":
        return "gradient-secondary text-secondary-foreground card-shadow-primary hover:card-shadow-primary-hover"
      case "accent":
        return "gradient-accent text-accent-foreground card-shadow-primary hover:card-shadow-primary-hover"
      default:
        return "gradient-accent text-accent-foreground card-shadow-primary hover:card-shadow-primary-hover"
    }
  }

  const getIconVariantStyles = () => {
    const baseStyles = "icon-container-lg"
    switch (variant) {
      case "primary":
        return `${baseStyles} bg-primary-foreground/10 text-primary-foreground`
      case "secondary":
        return `${baseStyles} bg-secondary-foreground/10 text-secondary-foreground`
      case "accent":
        return `${baseStyles} bg-accent-foreground/10 text-accent-foreground`
      default:
        return `${baseStyles} bg-accent-foreground/10 text-accent-foreground`
    }
  }

  return (
    <div className={`card-base ${getVariantStyles()} hover-scale p-4 flex items-center justify-center text-center ${className}`}>
      <div className="flex flex-col items-center gap-2">
        {Icon && (
          <div className={getIconVariantStyles()}>
            <Icon className="w-5 h-5" />
          </div>
        )}
        <blockquote className="text-quote">
          "{quote}"
        </blockquote>
      </div>
    </div>
  )
}

