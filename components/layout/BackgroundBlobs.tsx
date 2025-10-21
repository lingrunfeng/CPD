/**
 * 背景装饰组件
 * 用于在页面背景添加装饰性的模糊圆形元素
 */
export function BackgroundBlobs() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-[15%] left-[10%] w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute top-[50%] right-[15%] w-40 h-40 bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[25%] left-[30%] w-36 h-36 bg-accent/5 rounded-full blur-3xl"></div>
    </div>
  )
}

