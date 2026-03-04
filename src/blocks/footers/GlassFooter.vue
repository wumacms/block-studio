<template>
  <footer class="w-full pb-12 pt-24 px-4 sm:px-6 relative overflow-hidden" :class="containerClasses">
    <!-- Decorative Blurs -->
    <div class="absolute -bottom-24 -left-24 w-96 h-96 rounded-full blur-[100px] opacity-20" :class="blurClasses"></div>
    <div class="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-[100px] opacity-10" :class="blurClasses"></div>

    <div class="max-w-7xl mx-auto">
      <div class="relative p-8 md:p-12 rounded-[2.5rem] border backdrop-blur-2xl shadow-2xl transition-all duration-700"
           :class="glassClasses">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-16">
          <!-- Column 1: Brand & Bio -->
          <div class="lg:col-span-5">
            <div class="flex items-center gap-3 mb-8">
              <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl rotate-3 transition-transform hover:rotate-0"
                   :class="logoBgClasses">
                {{ themeEmoji }}
              </div>
              <span class="text-3xl font-black tracking-tighter" :class="brandTitleClasses">
                {{ siteData.navigation.logo.primary }}<span class="opacity-40">{{ siteData.navigation.logo.secondary }}</span>
              </span>
            </div>
            <p class="text-lg font-medium leading-relaxed mb-10" :class="bioTextClasses">
              {{ data?.siteDescription || '致力于通过设计与技术的完美融合，为您打造具有未来感的数字产品体验。' }}
            </p>
            <div class="flex flex-wrap gap-3">
              <template v-if="data?.socialLinks">
                <a v-for="link in data.socialLinks" :key="link.label" :href="link.link"
                   class="px-6 py-2.5 rounded-2xl border transition-all hover:scale-105 active:scale-95 group"
                   :class="socialBtnClasses">
                  <span class="text-xs font-black uppercase tracking-widest">{{ link.label }}</span>
                </a>
              </template>
            </div>
          </div>

          <!-- Column 2: Navigation -->
          <div class="lg:col-span-3">
            <h4 class="text-xs font-black uppercase tracking-[0.4em] mb-10 opacity-40">页面导航</h4>
            <nav class="flex flex-col gap-5">
              <button v-for="page in siteData.pages" :key="page.id"
                      @click="changePage(page.id)"
                      class="text-left font-bold text-xl hover:translate-x-2 transition-transform inline-flex items-center group"
                      :class="linkClasses">
                {{ page.title }}
                <span class="opacity-0 group-hover:opacity-100 transition-opacity ml-2 text-sm italic">→</span>
              </button>
            </nav>
          </div>

          <!-- Column 3: Contact & Newsletter -->
          <div class="lg:col-span-4">
            <h4 class="text-xs font-black uppercase tracking-[0.4em] mb-10 opacity-40">联系与订阅</h4>
            <div class="mb-10 space-y-4">
              <p class="text-2xl font-black" :class="brandTitleClasses">{{ data?.email || 'hello@block.studio' }}</p>
              <div class="h-px w-full bg-current opacity-10"></div>
            </div>
            
            <div class="relative group">
              <input type="email" :placeholder="data?.newsletterPlaceholder || '您的邮箱地址...'"
                     class="w-full bg-transparent border-b-2 py-4 px-2 outline-none transition-all focus:border-current placeholder:opacity-20 font-bold"
                     :class="inputClasses" />
              <button class="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95"
                      :class="submitBtnClasses">
                →
              </button>
            </div>
            <p class="mt-4 text-[10px] font-bold uppercase tracking-widest opacity-30 italic">
              {{ data?.newsletterSubtitle || '获取每月的数字设计灵感与技术分析汇报' }}
            </p>
          </div>
        </div>

        <!-- Footer Bottom -->
        <div class="pt-10 border-t flex flex-col md:flex-row justify-between items-center gap-8"
             :class="bottomBorderClasses">
          <div class="flex items-center gap-6">
            <span class="text-xs font-bold opacity-40">© 2026 {{ siteData.config.siteName }}</span>
            <div v-if="data?.bottomLinks" class="flex gap-6">
              <a v-for="link in data.bottomLinks" :key="link.label" :href="link.link"
                 class="text-xs font-black uppercase tracking-widest opacity-20 hover:opacity-100 transition-opacity">
                {{ link.label }}
              </a>
            </div>
          </div>
          
          <div class="flex items-center gap-4">
            <div class="w-2 h-2 rounded-full animate-pulse bg-emerald-500"></div>
            <span class="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">All Systems Operational</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { siteData, changePage } from '../../engine/siteData'

const props = defineProps({
  data: Object
})

const themeEmoji = computed(() => {
  switch (siteData.config.theme) {
    case 'minimal': return '⚪'
    case 'pop-art': return '🎭'
    case 'cyberpunk': return '🛰️'
    case 'fresh': return '🍵'
    case 'luxury': return '🥂'
    case 'yellow': return '🧀'
    default: return '💎'
  }
})

const containerClasses = computed(() => {
    switch (siteData.config.theme) {
        case 'minimal': return 'bg-stone-50'
        case 'cyberpunk': return 'bg-black'
        case 'fresh': return 'bg-emerald-950'
        case 'luxury': return 'bg-[#050505]'
        case 'pop-art': return 'bg-[#FFDE03]'
        case 'yellow': return 'bg-amber-100'
        default: return 'bg-white'
    }
})

const glassClasses = computed(() => {
  switch (siteData.config.theme) {
    case 'pop-art': return 'bg-white border-black border-4 shadow-[12px_12px_0px_0px_black] text-black'
    case 'minimal': return 'bg-white border-stone-200 text-stone-900'
    case 'cyberpunk': return 'bg-slate-900/60 border-cyan-500/30 text-white shadow-[0_0_30px_rgba(6,182,212,0.1)]'
    case 'fresh': return 'bg-emerald-900/40 border-emerald-500/20 text-emerald-100'
    case 'luxury': return 'bg-white/5 border-amber-500/20 text-amber-50 shadow-2xl'
    case 'yellow': return 'bg-amber-50 border-amber-900/10 text-amber-950'
    default: return 'bg-white/80 border-gray-100 text-gray-900'
  }
})

const logoBgClasses = computed(() => {
    const t = siteData.config.theme
    if (t === 'pop-art') return 'bg-pink-500 border-2 border-black shadow-[4px_4px_0_black]'
    if (t === 'cyberpunk') return 'bg-cyan-500 text-black shadow-[0_0_15px_cyan]'
    if (t === 'luxury') return 'bg-amber-500 text-black'
    return 'bg-current/5'
})

const brandTitleClasses = computed(() => {
    const t = siteData.config.theme
    if (t === 'pop-art') return 'italic'
    if (t === 'cyberpunk') return 'text-cyan-400'
    if (t === 'fresh') return 'text-emerald-400 font-serif'
    if (t === 'luxury') return 'text-amber-500 tracking-[.2em] uppercase'
    return ''
})

const bioTextClasses = computed(() => {
    return 'opacity-80'
})

const socialBtnClasses = computed(() => {
    const t = siteData.config.theme
    if (t === 'pop-art') return 'bg-white border-black border-2 hover:bg-yellow-300'
    if (t === 'cyberpunk') return 'border-cyan-500/40 hover:border-cyan-500 text-cyan-400'
    if (t === 'luxury') return 'border-amber-500/40 hover:border-amber-500 text-amber-500'
    return 'border-current opacity-40 hover:opacity-100'
})

const linkClasses = computed(() => {
    const t = siteData.config.theme
    if (t === 'pop-art') return 'hover:text-pink-600'
    if (t === 'cyberpunk') return 'hover:text-cyan-400 drop-shadow-[0_0_8px_cyan]'
    if (t === 'luxury') return 'font-serif italic text-amber-500/80 hover:text-amber-500'
    return ''
})

const inputClasses = computed(() => {
    return 'border-current/20 focus:border-current'
})

const submitBtnClasses = computed(() => {
    const t = siteData.config.theme
    if (t === 'pop-art') return 'bg-pink-500 text-white border border-black shadow-[2px_2px_0_black]'
    if (t === 'cyberpunk') return 'bg-cyan-500 text-black'
    if (t === 'luxury') return 'bg-amber-500 text-black'
    return 'bg-black text-white'
})

const bottomBorderClasses = computed(() => {
    return 'border-current opacity-10'
})

const blurClasses = computed(() => {
    const t = siteData.config.theme
    if (t === 'pop-art') return 'bg-pink-400'
    if (t === 'cyberpunk') return 'bg-blue-600'
    if (t === 'fresh') return 'bg-emerald-400'
    if (t === 'luxury') return 'bg-amber-900'
    if (t === 'yellow') return 'bg-amber-500'
    return 'bg-blue-400'
})

</script>
