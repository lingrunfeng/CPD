import { Heart } from "lucide-react"

interface AboutCardProps {
  /** 标题 */
  title: string
  /** 副标题 */
  subtitle: string
  /** 描述 */
  description: string
  /** 图标 */
  icon?: React.ComponentType<{ className?: string }>
}

/**
 * 关于介绍卡片组件
 * 保持原始的精美布局和样式
 */
export function AboutCard({
  title,
  subtitle,
  description,
  icon: Icon = Heart
}: AboutCardProps) {
  return (
    <div className="col-span-2 md:col-span-2 lg:col-span-3 row-span-1 bg-card/50 backdrop-blur-xl rounded-[1.25rem] p-5 md:p-6 flex flex-col justify-center shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] transition-all duration-700 hover:-translate-y-1 border border-border/50">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
          <Icon className="w-4 h-4 text-primary" />
        </div>
        <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-medium">{subtitle}</h3>
      </div>
      <h2 className="text-lg md:text-xl font-semibold mb-2 text-balance text-foreground">{title}</h2>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}

