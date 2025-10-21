import { TrendingUp } from "lucide-react"

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
  icon?: React.ComponentType<{ className?: string }>
  /** 统计数据列表 */
  stats: StatItem[]
}

/**
 * 统计数据展示卡片组件
 * 保持原始的精美布局和样式
 */
export function StatsCard({
  title,
  icon: Icon = TrendingUp,
  stats
}: StatsCardProps) {
  return (
    <div className="col-span-1 md:col-span-2 lg:col-span-3 row-span-1 bg-card/50 backdrop-blur-xl rounded-[1.25rem] p-5 flex flex-col justify-center shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] transition-all duration-700 hover:-translate-y-1 border border-border/50">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
          <Icon className="w-4 h-4 text-primary" />
        </div>
        <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-medium">{title}</h3>
      </div>
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

