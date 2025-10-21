import { Mail, Sparkles } from "lucide-react"

interface CTACardProps {
  /** CTA标题 */
  title: string
  /** CTA描述 */
  description: string
  /** CTA按钮文本 */
  buttonText: string
  /** 标题图标 */
  titleIcon?: React.ComponentType<{ className?: string }>
  /** 按钮图标 */
  buttonIcon?: React.ComponentType<{ className?: string }>
}

/**
 * 行动号召卡片组件
 * 保持原始的精美布局和样式
 */
export function CTACard({
  title,
  description,
  buttonText,
  titleIcon: TitleIcon = Mail,
  buttonIcon: ButtonIcon = Sparkles
}: CTACardProps) {
  return (
    <div className="col-span-2 md:col-span-3 lg:col-span-3 row-span-1 bg-gradient-to-br from-secondary to-secondary/90 rounded-[1.25rem] p-5 md:p-6 flex flex-col justify-center shadow-[0_2px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.15)] transition-all duration-700 hover:-translate-y-1">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 rounded-full bg-secondary-foreground/10 flex items-center justify-center">
          <TitleIcon className="w-4 h-4 text-secondary-foreground" />
        </div>
        <h3 className="text-lg md:text-xl font-semibold text-secondary-foreground">{title}</h3>
      </div>
      <p className="text-sm text-secondary-foreground/80 mb-3 leading-relaxed">{description}</p>
      <button className="bg-background text-foreground px-5 md:px-6 py-2.5 md:py-3 rounded-full hover:scale-105 hover:shadow-lg transition-all duration-300 w-fit text-sm md:text-base font-medium shadow-sm flex items-center gap-2 group border border-border/50">
        <span>{buttonText}</span>
        <ButtonIcon className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
      </button>
    </div>
  )
}

