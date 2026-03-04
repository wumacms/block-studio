<template>
  <div class="min-h-screen flex flex-col">
    <!-- 1. 动态导航栏渲染 -->
    <component 
      :is="navigationComponent" 
      :data="siteData.navigation"
      v-bind="navProps"
      @navItemClick="handleNavClick"
    />

    <!-- 2. 主内容区域 (按区块渲染) -->
    <main class="flex-grow transition-all duration-700" :class="mainLayoutClass">
      <transition 
        name="page-fade" 
        mode="out-in"
      >
        <div :key="siteData.currentPageId">
          <div v-for="block in activePage.blocks" :key="block.id">
            <component 
              :is="resolveBlock(block.template)" 
              :data="getBlockData(block)" 
            />
          </div>
        </div>
      </transition>
    </main>

    <!-- 3. 动态页脚渲染 -->
    <component :is="footerComponent" :data="siteData.footer" />

    <!-- 增强型悬浮面板 -->
    <div class="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3">
      <!-- 展开的设置面板 -->
      <transition 
        enter-active-class="transition duration-200 ease-out" 
        enter-from-class="translate-y-4 opacity-0 scale-95" 
        enter-to-class="translate-y-0 opacity-100 scale-100"
        leave-active-class="transition duration-150 ease-in" 
        leave-from-class="translate-y-0 opacity-100 scale-100" 
        leave-to-class="translate-y-4 opacity-0 scale-95"
      >
        <div v-if="showPanel" class="bg-white/80 backdrop-blur-2xl p-6 rounded-3xl border border-white/40 shadow-2xl w-80 mb-2 max-h-[70vh] overflow-y-auto custom-scrollbar">
          <h3 class="text-gray-900 font-black mb-4 flex items-center gap-2">
            <span class="text-xl">🛠️</span> 页面引擎设置
          </h3>
          
          <!-- 主题切换 -->
          <div class="mb-6">
            <p class="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-3">全局视觉主题</p>
            <div class="flex flex-wrap gap-2">
              <button v-for="t in themes" :key="t" 
                      @click="siteData.config.theme = t"
                      class="w-8 h-8 rounded-full border-2 transition-all"
                      :class="[
                        siteData.config.theme === t ? 'border-blue-500 scale-110 shadow-lg' : 'border-transparent opacity-60 hover:opacity-100',
                        themePreviewClasses(t)
                      ]">
              </button>
            </div>
          </div>

          <!-- 导航栏区块切换 -->
          <div class="mb-6">
            <p class="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-3">导航栏款式</p>
            <div class="grid grid-cols-2 gap-2">
              <button v-for="nav in Object.keys(navTemplates)" :key="nav"
                      @click="siteData.navigation.template = nav"
                      class="px-3 py-2 text-[10px] font-bold border rounded-xl transition-all"
                      :class="siteData.navigation.template === nav ? 'bg-black text-white border-black' : 'bg-gray-50 text-gray-600 border-gray-100 hover:bg-gray-100'">
                {{ formatName(nav) }}
              </button>
            </div>
          </div>

          <!-- 页面主要区块切换 -->
          <div class="mb-6">
            <p class="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-3">主区块布局</p>
            <div class="grid grid-cols-3 gap-2">
              <button v-for="b in sectionOptions" :key="b"
                      @click="toggleBlock(b)"
                      class="px-2 py-2 text-[10px] font-bold border rounded-xl transition-all"
                      :class="isBlockActive(b) ? 'bg-blue-500 text-white border-blue-600' : 'bg-gray-50 text-gray-600 border-gray-100 hover:bg-gray-100'">
                {{ formatName(b) }}
              </button>
            </div>
          </div>

          <!-- 页脚切换 -->
          <div>
            <p class="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-3">页脚款式</p>
            <div class="grid grid-cols-3 gap-2">
              <button v-for="f in Object.keys(footerTemplates)" :key="f"
                      @click="siteData.footer.template = f"
                      class="px-3 py-2 text-[10px] font-bold border rounded-xl transition-all"
                      :class="siteData.footer.template === f ? 'bg-black text-white border-black' : 'bg-gray-50 text-gray-600 border-gray-100 hover:bg-gray-100'">
                {{ formatName(f) }}
              </button>
            </div>
          </div>
        </div>
      </transition>

      <!-- 悬浮触控球 -->
      <button @click="showPanel = !showPanel" 
              class="group w-14 h-14 rounded-full bg-zinc-900/90 backdrop-blur-md text-white flex items-center justify-center 
                     shadow-[0_8px_30px_rgb(0,0,0,0.4),_inset_0_1px_1px_rgba(255,255,255,0.1)] 
                     hover:scale-110 active:scale-95 transition-all duration-300
                     border border-white/20 ring-4 ring-black/5 hover:border-white/40"
              :class="{ 'animate-pulse-ring': !showPanel }">
        <span class="text-2xl transition-transform duration-300 group-hover:rotate-12" v-if="!showPanel">⚡</span>
        <span class="text-2xl" v-else>✕</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineAsyncComponent } from 'vue'
import { siteData, changePage, toggleBlock, blockDefaults } from './engine/siteData'

const showPanel = ref(false)

// 动态导入导航模板 (重新设计的区块)
const navTemplates = {
  MainNavbar: defineAsyncComponent(() => import('./blocks/navigation/MainNavbar.vue')),
  CenteredNavbar: defineAsyncComponent(() => import('./blocks/navigation/CenteredNavbar.vue')),
  FloatingNavbar: defineAsyncComponent(() => import('./blocks/navigation/FloatingNavbar.vue')),
  IndexNavbar: defineAsyncComponent(() => import('./blocks/navigation/IndexNavbar.vue')),
  GlassNavbar: defineAsyncComponent(() => import('./blocks/navigation/GlassNavbar.vue')),
  SideNavbar: defineAsyncComponent(() => import('./blocks/navigation/SideNavbar.vue')),
  DockNavbar: defineAsyncComponent(() => import('./blocks/navigation/DockNavbar.vue')),
}

// 动态导入页脚模板 (新设计的区块)
const footerTemplates = {
  MainFooter: defineAsyncComponent(() => import('./blocks/footers/MainFooter.vue')),
  SimpleFooter: defineAsyncComponent(() => import('./blocks/footers/SimpleFooter.vue')),
  ModernFooter: defineAsyncComponent(() => import('./blocks/footers/ModernFooter.vue')),
  GlassFooter: defineAsyncComponent(() => import('./blocks/footers/GlassFooter.vue')),
  BrutalFooter: defineAsyncComponent(() => import('./blocks/footers/BrutalFooter.vue')),
  PillFooter: defineAsyncComponent(() => import('./blocks/footers/PillFooter.vue')),
}

// 动态导入区块模板
const blockTemplates = {
  HeroSection: defineAsyncComponent(() => import('./blocks/sections/HeroSection.vue')),
  FeatureGrid: defineAsyncComponent(() => import('./blocks/sections/FeatureGrid.vue')),
  BentoGrid: defineAsyncComponent(() => import('./blocks/sections/BentoGrid.vue')),
  SplitSection: defineAsyncComponent(() => import('./blocks/sections/SplitSection.vue')),
  TeamSection: defineAsyncComponent(() => import('./blocks/sections/TeamSection.vue')),
  FaqSection: defineAsyncComponent(() => import('./blocks/sections/FaqSection.vue')),
  CtaSection: defineAsyncComponent(() => import('./blocks/sections/CtaSection.vue')),
  StatsSection: defineAsyncComponent(() => import('./blocks/sections/StatsSection.vue')),
  LogoCloud: defineAsyncComponent(() => import('./blocks/sections/LogoCloud.vue')),
  PricingSection: defineAsyncComponent(() => import('./blocks/sections/PricingSection.vue')),
  TestimonialsSection: defineAsyncComponent(() => import('./blocks/sections/TestimonialsSection.vue')),
}

const sectionOptions = ['HeroSection', 'FeatureGrid', 'BentoGrid', 'SplitSection', 'TeamSection', 'FaqSection', 'CtaSection', 'StatsSection', 'LogoCloud', 'PricingSection', 'TestimonialsSection']

const themes = ['pop-art', 'minimal', 'cyberpunk', 'fresh', 'luxury', 'yellow']

const activePage = computed(() => {
  return siteData.pages.find(p => p.id === siteData.currentPageId) || siteData.pages[0]
})

// 根据配置或主题自动选择导航条
const navigationComponent = computed(() => {
  if (siteData.navigation.template && navTemplates[siteData.navigation.template]) {
    return navTemplates[siteData.navigation.template]
  }
  return navTemplates.MainNavbar
})

// 根据配置或主题自动选择页脚
const footerComponent = computed(() => {
  if (siteData.footer?.template && footerTemplates[siteData.footer.template]) {
    return footerTemplates[siteData.footer.template]
  }
  return footerTemplates.MainFooter
})

// 布局自适应
const mainLayoutClass = computed(() => {
  if (siteData.navigation.template === 'SideNavbar') {
    return 'md:ml-24'
  }
  return ''
})

const themePreviewClasses = (t) => {
    const maps = {
        'pop-art': 'bg-yellow-400',
        'minimal': 'bg-stone-200',
        'cyberpunk': 'bg-cyan-500',
        'fresh': 'bg-emerald-400',
        'luxury': 'bg-slate-800',
        'yellow': 'bg-amber-300'
    }
    return maps[t] || 'bg-gray-400'
}

const formatName = (name) => {
    return name.replace('NavigationBar', '').replace('Section', '').replace('Navbar', '').replace('Footer', '')
}

const isBlockActive = (template) => {
    return activePage.value.blocks.some(b => b.template === template)
}

// 获取合并后的区块数据
const getBlockData = (block) => {
  const defaults = blockDefaults[block.template] || {}
  return { ...defaults, ...block.content }
}

// 为导航条注入内容，并根据当前页面状态更新 active 状态
const navProps = computed(() => {
    return {}
})

const resolveBlock = (name) => blockTemplates[name]

const handleNavClick = (item, event) => {
    const targetPage = siteData.pages.find(p => p.title === item.label || p.slug === item.link)
    if (targetPage) {
        event?.preventDefault()
        changePage(targetPage.id)
    }
}
</script>

<style>
@keyframes pulse-ring {
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.2); }
  70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(255, 255, 255, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
}

.animate-pulse-ring {
  animation: pulse-ring 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.2);
}
</style>
