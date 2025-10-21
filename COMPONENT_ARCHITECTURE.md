# 组件架构说明

## 📁 文件结构

```
components/
├── cards/           # 卡片组件
│   ├── VideoCard.tsx      # 视频展示卡片
│   ├── ImageCard.tsx      # 图片展示卡片
│   ├── InfoCard.tsx       # 信息展示卡片
│   ├── QuoteCard.tsx      # 引言展示卡片
│   ├── ServiceCard.tsx    # 服务展示卡片
│   ├── StatsCard.tsx      # 统计数据卡片
│   ├── CTACard.tsx        # 行动号召卡片
│   └── index.ts           # 导出文件
├── layout/          # 布局组件
│   ├── MainLayout.tsx     # 主布局
│   ├── BackgroundBlobs.tsx # 背景装饰
│   ├── GridContainer.tsx  # 网格容器
│   └── index.ts           # 导出文件
├── sections/        # 页面区域组件
│   ├── VideoSection.tsx   # 视频区域
│   ├── AboutSection.tsx   # 关于区域
│   ├── ServiceSection.tsx # 服务区域
│   ├── ImageSection.tsx   # 图片区域
│   ├── QuoteSection.tsx   # 引言区域
│   ├── CTASection.tsx     # CTA区域
│   ├── StatsSection.tsx   # 统计区域
│   └── index.ts           # 导出文件
└── ui/              # 基础UI组件
    └── ...          # 现有的UI组件
```

## 🎨 样式系统

### CSS 变量管理 (`styles/variables.css`)

- **圆角系统**: `--radius-xs` 到 `--radius-2xl`
- **间距系统**: `--spacing-xs` 到 `--spacing-3xl`
- **阴影系统**: `--shadow-sm` 到 `--shadow-2xl`
- **过渡动画**: `--transition-fast` 到 `--transition-slower`
- **模糊效果**: `--blur-sm` 到 `--blur-3xl`

### 组件样式类

- **卡片基础**: `.card-base`, `.card-shadow`, `.card-shadow-hover`
- **悬停效果**: `.hover-lift`, `.hover-scale`, `.hover-lift-scale`
- **渐变背景**: `.gradient-muted`, `.gradient-primary`, `.gradient-secondary`, `.gradient-accent`
- **图标容器**: `.icon-container`, `.icon-container-sm`, `.icon-container-lg`
- **文本样式**: `.text-section-title`, `.text-card-title`, `.text-quote`
- **背景模糊**: `.backdrop-blur-card`, `.backdrop-blur-icon`

## 🧩 组件设计原则

### 1. 单一职责
每个组件只负责一个特定的功能，如 `VideoCard` 只处理视频展示。

### 2. Props 传参
所有可变内容通过 props 传递，提高组件复用性：
```tsx
<VideoCard
  videoSrc="/video.mp4"
  posterSrc="/poster.jpg"
  title="视频标题"
  description="视频描述"
/>
```

### 3. 变体支持
组件支持多种变体，如 `InfoCard` 支持 `default`、`primary`、`secondary`、`accent` 变体。

### 4. 语义化命名
- 组件名：`VideoCard`、`ServiceCard`
- 文件夹：`cards`、`layout`、`sections`
- 样式类：`.card-base`、`.hover-lift`

### 5. 完整注释
每个组件都有详细的 JSDoc 注释，说明用途、参数和用法。

## 🔄 使用示例

### 基础卡片使用
```tsx
import { InfoCard } from '@/components/cards'
import { Heart } from 'lucide-react'

<InfoCard
  title="创意工作室"
  subtitle="关于"
  description="专注于视觉叙事与品牌创意"
  icon={Heart}
  iconVariant="primary"
  variant="default"
/>
```

### 服务卡片使用
```tsx
import { ServiceCard } from '@/components/cards'
import { Palette } from 'lucide-react'

const services = [
  { name: "品牌视频" },
  { name: "商业摄影" },
  { name: "创意策划" }
]

<ServiceCard
  title="服务"
  icon={Palette}
  services={services}
  variant="primary"
/>
```

## 🚀 优势

1. **可维护性**: 组件分离，职责清晰
2. **可复用性**: Props 传参，组件通用
3. **一致性**: 统一的样式系统和命名规范
4. **可扩展性**: 易于添加新组件和功能
5. **协作性**: 清晰的注释和文档

## 📝 开发规范

1. **组件命名**: 使用 PascalCase，如 `VideoCard`
2. **文件命名**: 使用 PascalCase，如 `VideoCard.tsx`
3. **Props 接口**: 使用 `ComponentNameProps` 命名
4. **注释规范**: 使用 JSDoc 格式
5. **导出规范**: 使用 `index.ts` 统一导出

