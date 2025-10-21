interface MainLayoutProps {
  /** 子内容 */
  children: React.ReactNode
  /** 自定义类名 */
  className?: string
}

/**
 * 主布局组件
 * 提供页面的基础布局结构，包括背景和容器
 */
export function MainLayout({ children, className = "" }: MainLayoutProps) {
  return (
    <main className={`h-screen bg-background p-4 md:p-6 overflow-hidden relative ${className}`}>
      {children}
    </main>
  )
}

