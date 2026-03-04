# ⚡️ Block Studio - 动态页面引擎演示

这是一个基于 **Vue 3**、**Vite 7** 和 **Tailwind CSS 4** 构建的高性能动态页面渲染引擎演示项目。项目采用模块化“区块（Blocks）”架构，支持实时主题切换和页面内容动态配置。

## 🌟 核心特性

- **区块化架构 (Block-based Architecture)**：所有的页面元素（导航栏、主区块、页脚）都是独立的组件，实现高度复用。
- **动态渲染引擎**：通过 `SiteRenderer.vue` 核心组件，根据 `siteData.js` 的 JSON 配置实时生成页面。
- **多主题视觉系统**：内置 6 种预设主题，支持从 UI 风格到交互细节的全方位实时切换。
- **丰富的设计组件库**：包含多种风格的导航栏（胶囊型、目录型等）和页脚设计。
- **高级 CSS 适配**：深度利用 Tailwind CSS 4 的原子化能力，针对深色（Cyberpunk, Luxury）和浅色（Minimal, Fresh）主题进行了精细的文字对比度与视觉平衡优化。
- **交互式设置面板**：通过悬浮触控球实时调整站点视觉参数。

## 📁 项目结构

```text
src/
├── blocks/             # UI 区块库 (区块化组件)
│   ├── footers/        # 页脚模板 (Main, Simple, Modern)
│   ├── navigation/     # 导航栏模板 (Main, Centered, Floating, Index)
│   └── sections/       # 内容区块 (Hero, Feature, Bento, Split, Team, etc.)
├── engine/             # 引擎逻辑
│   └── siteData.js     # 全局配置中心 (响应式页面数据、主题配置)
├── App.vue             # 应用主容器
├── SiteRenderer.vue    # 核心渲染器 & 实时交互设置面板
├── main.js             # 入口文件
└── style.css           # Tailwind CSS 4 基础配置
```

## 🎨 视觉主题与设计组件

### 预设主题列表
- **🎨 Pop-Art**: 鲜艳色彩、大胆粗边框，波普艺术风格。
- **⚪ Minimal**: 石灰调极简主义，强调空间感与高级排版。
- **🤖 Cyberpunk**: 纯黑底色配霓虹青色，极致的科技感。
- **🌿 Fresh**: 翡翠绿配衬线体，清新雅致。
- **� Luxury**: 深蓝与琥珀金，彰显高端奢华。
- **🌕 Yellow**: 温暖琥珀色调，高对比度现代排版。

### 精选 UI 模块
- **FloatingNavbar**: 玻璃拟态胶囊导航栏，适合现代简约风格。
- **IndexNavbar**: 纵向目录式布局，艺术感十足的大字号编号。
- **ModernFooter**: 强引导性 CTA 页脚，具备动态背景装饰与视觉冲击力。

## �🚀 快速开始

### 1. 安装依赖
```bash
pnpm install
```

### 2. 本地开发
```bash
pnpm dev
```

### 3. 构建发布
```bash
pnpm build
```

## 🛠 引擎原理

1. **配置驱动**：`siteData.js` 定义了页面的数据模型（Schema）。
2. **动态映射**：渲染器通过 `defineAsyncComponent` 根据配置字符串实现组件的异步按需加载。
3. **样式注入**：组件内部通过计算属性（Computed）根据当前主题状态动态合成 Tailwind 类名，确保视觉一致性。

---

*由 Block Studio 强力驱动 🚀*
