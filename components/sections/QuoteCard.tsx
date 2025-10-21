import { Heart } from "lucide-react"

interface QuoteCardProps {
  /** 引言内容 */
  quote: string
  /** 引言图标 */
  icon?: React.ComponentType<{ className?: string }>
}

/**
 * 引言展示卡片组件
 * 保持原始的精美布局和样式
 */
export function QuoteCard({
  quote,
  icon: Icon = Heart
}: QuoteCardProps) {
  return (
    <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 bg-gradient-to-br from-accent to-accent/90 rounded-[1.25rem] p-4 flex items-center justify-center text-center shadow-[0_2px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] transition-all duration-700 hover:scale-105">
      <div className="flex flex-col items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-accent-foreground/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-accent-foreground" />
        </div>
        <blockquote className="text-sm md:text-base font-medium text-accent-foreground text-balance">
          "{quote}"
        </blockquote>
      </div>
    </div>
  )
}

