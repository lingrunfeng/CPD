import { Palette } from "lucide-react"

interface ServiceItem {
  /** 服务项目名称 */
  name: string
}

interface ServiceCardProps {
  /** 服务标题 */
  title: string
  /** 服务项目列表 */
  services: ServiceItem[]
  /** 图标 */
  icon?: React.ComponentType<{ className?: string }>
}

/**
 * 服务展示卡片组件
 * 保持原始的精美布局和样式
 */
export function ServiceCard({
  title,
  services,
  icon: Icon = Palette
}: ServiceCardProps) {
  return (
    <div className="col-span-1 md:col-span-2 lg:col-span-3 row-span-2 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground rounded-[1.25rem] p-5 md:p-6 flex flex-col justify-between shadow-[0_2px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.15)] transition-all duration-700 hover:-translate-y-1">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center">
            <Icon className="w-4 h-4 text-primary-foreground" />
          </div>
          <h3 className="text-xs uppercase tracking-wider font-medium opacity-90">{title}</h3>
        </div>
        <ul className="space-y-3">
          {services.map((service, index) => (
            <li key={index} className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-300">
              <span className="w-1.5 h-1.5 bg-primary-foreground rounded-full"></span>
              <span className="text-sm md:text-base">{service.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

