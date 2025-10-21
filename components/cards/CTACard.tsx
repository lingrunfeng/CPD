interface CTACardProps {
  /** CTA标题 */
  title: string
  /** CTA描述 */
  description?: string
  /** CTA按钮文本 */
  buttonText: string
  /** 卡片变体 */
  variant?: "primary" | "secondary" | "accent"
  /** 自定义类名 */
  className?: string
}

/**
 * 行动号召卡片组件
 * 用于展示联系、合作等行动号召内容
 */
export function CTACard({
  title,
  description,
  buttonText,
  variant = "secondary",
  className = ""
}: CTACardProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "gradient-primary text-primary-foreground card-shadow-primary hover:card-shadow-primary-hover"
      case "secondary":
        return "gradient-secondary text-secondary-foreground card-shadow-primary hover:card-shadow-primary-hover"
      case "accent":
        return "gradient-accent text-accent-foreground card-shadow-primary hover:card-shadow-primary-hover"
      default:
        return "gradient-secondary text-secondary-foreground card-shadow-primary hover:card-shadow-primary-hover"
    }
  }

  return (
    <div className={`card-base ${getVariantStyles()} hover-lift p-5 md:p-6 flex flex-col justify-center ${className}`}>
      {/* 标题区域 */}
      <div className="flex items-center gap-2 mb-2">
        <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
      </div>

      {/* 描述 */}
      {description && (
        <p className="text-sm opacity-80 mb-3 leading-relaxed">{description}</p>
      )}

      {/* 按钮 */}
      <button className="bg-background text-foreground px-5 md:px-6 py-2.5 md:py-3 rounded-full hover:scale-105 hover:shadow-lg transition-all duration-[var(--transition-normal)] w-fit text-sm md:text-base font-medium shadow-sm flex items-center gap-2 group border border-border/50">
        <span>{buttonText}</span>
      </button>
    </div>
  )
}
