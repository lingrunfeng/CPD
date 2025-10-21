import { Heart, Sparkles, Camera, Video, Palette, Mail, TrendingUp } from "lucide-react"

export default function Home() {
  return (
    <main className="h-screen bg-background p-4 md:p-6 overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[15%] left-[10%] w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-[50%] right-[15%] w-40 h-40 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[25%] left-[30%] w-36 h-36 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="h-full max-w-[1600px] mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-3 md:gap-4 h-full">
          {/* 大视频区域 */}
          <div className="col-span-2 md:col-span-4 lg:col-span-6 row-span-2 bg-gradient-to-br from-muted to-card rounded-[1.25rem] overflow-hidden group relative shadow-[0_2px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] transition-all duration-700">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              poster="/cinematic-video-production-behind-the-scenes.jpg"
            >
              <source src="/cinematic-video-production.png" type="video/mp4" />
            </video>
            <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-xl rounded-full p-2.5 shadow-sm border border-border/50">
              <Video className="w-4 h-4 text-foreground" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-background" />
                <h2 className="text-background text-xl md:text-2xl font-semibold">创意视频作品</h2>
              </div>
            </div>
          </div>

          {/* 关于介绍 */}
          <div className="col-span-2 md:col-span-2 lg:col-span-3 row-span-1 bg-card/50 backdrop-blur-xl rounded-[1.25rem] p-5 md:p-6 flex flex-col justify-center shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] transition-all duration-700 hover:-translate-y-1 border border-border/50">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="w-4 h-4 text-primary" />
              </div>
              <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-medium">关于</h3>
            </div>
            <h2 className="text-lg md:text-xl font-semibold mb-2 text-balance text-foreground">创意工作室</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">专注于视觉叙事与品牌创意</p>
          </div>

          {/* 服务项目 */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 row-span-2 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground rounded-[1.25rem] p-5 md:p-6 flex flex-col justify-between shadow-[0_2px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.15)] transition-all duration-700 hover:-translate-y-1">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <Palette className="w-4 h-4 text-primary-foreground" />
                </div>
                <h3 className="text-xs uppercase tracking-wider font-medium opacity-90">服务</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-300">
                  <span className="w-1.5 h-1.5 bg-primary-foreground rounded-full"></span>
                  <span className="text-sm md:text-base">品牌视频</span>
                </li>
                <li className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-300">
                  <span className="w-1.5 h-1.5 bg-primary-foreground rounded-full"></span>
                  <span className="text-sm md:text-base">商业摄影</span>
                </li>
                <li className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-300">
                  <span className="w-1.5 h-1.5 bg-primary-foreground rounded-full"></span>
                  <span className="text-sm md:text-base">创意策划</span>
                </li>
                <li className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-300">
                  <span className="w-1.5 h-1.5 bg-primary-foreground rounded-full"></span>
                  <span className="text-sm md:text-base">后期制作</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 图片格子1 */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 row-span-1 bg-muted rounded-[1.25rem] overflow-hidden group shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] transition-all duration-700 hover:-translate-y-1 border border-border/50">
            <img
              src="/minimalist-creative-workspace-desk-from-above.jpg"
              alt="创意工作空间"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-xl rounded-full p-2 shadow-sm border border-border/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Camera className="w-3.5 h-3.5 text-foreground" />
            </div>
          </div>

          {/* 图片格子2 */}
          <div className="col-span-2 md:col-span-3 lg:col-span-4 row-span-1 bg-muted rounded-[1.25rem] overflow-hidden group shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] transition-all duration-700 hover:-translate-y-1 border border-border/50">
            <img
              src="/minimalist-portrait-photography-natural-light.jpg"
              alt="人像摄影"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-xl rounded-full p-2 shadow-sm border border-border/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Sparkles className="w-3.5 h-3.5 text-foreground" />
            </div>
          </div>

          {/* 引言区 */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 bg-gradient-to-br from-accent to-accent/90 rounded-[1.25rem] p-4 flex items-center justify-center text-center shadow-[0_2px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] transition-all duration-700 hover:scale-105">
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-accent-foreground/10 flex items-center justify-center">
                <Heart className="w-5 h-5 text-accent-foreground" />
              </div>
              <blockquote className="text-sm md:text-base font-medium text-accent-foreground text-balance">
                "每一帧都是故事"
              </blockquote>
            </div>
          </div>

          {/* 联系CTA */}
          <div className="col-span-2 md:col-span-3 lg:col-span-3 row-span-1 bg-gradient-to-br from-secondary to-secondary/90 rounded-[1.25rem] p-5 md:p-6 flex flex-col justify-center shadow-[0_2px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.15)] transition-all duration-700 hover:-translate-y-1">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-secondary-foreground/10 flex items-center justify-center">
                <Mail className="w-4 h-4 text-secondary-foreground" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-secondary-foreground">开始合作</h3>
            </div>
            <p className="text-sm text-secondary-foreground/80 mb-3 leading-relaxed">让我们一起创造视觉体验</p>
            <button className="bg-background text-foreground px-5 md:px-6 py-2.5 md:py-3 rounded-full hover:scale-105 hover:shadow-lg transition-all duration-300 w-fit text-sm md:text-base font-medium shadow-sm flex items-center gap-2 group border border-border/50">
              <span>联系我们</span>
              <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
            </button>
          </div>

          <div className="col-span-1 md:col-span-2 lg:col-span-3 row-span-1 bg-card/50 backdrop-blur-xl rounded-[1.25rem] p-5 flex flex-col justify-center shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] transition-all duration-700 hover:-translate-y-1 border border-border/50">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-primary" />
              </div>
              <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-medium">成就</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-2xl md:text-3xl font-semibold text-foreground mb-1">500+</div>
                <div className="text-xs text-muted-foreground">完成项目</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-semibold text-foreground mb-1">98%</div>
                <div className="text-xs text-muted-foreground">客户满意度</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
