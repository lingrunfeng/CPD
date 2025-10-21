interface GridContainerProps {
  /** 子内容 */
  children: React.ReactNode
  /** 自定义类名 */
  className?: string
}

/**
 * 网格容器组件
 * 提供响应式网格布局容器
 */
export function GridContainer({ children, className = "" }: GridContainerProps) {
  return (
    <div className={`h-full max-w-[1600px] mx-auto relative z-10 ${className}`}>
      <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-3 md:gap-4 h-full">
        {children}
      </div>
    </div>
  )
}

