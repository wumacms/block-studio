<template>
  <footer class="py-16 px-4 transition-colors duration-500 border-t" :class="themeClasses">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <!-- Brand Info -->
        <div class="col-span-1 md:col-span-1">
          <div class="flex items-center gap-2 mb-6">
            <span class="text-2xl font-black tracking-tighter" :class="brandClasses">
              {{ siteData.navigation.logo.primary }}{{ siteData.navigation.logo.secondary }}
            </span>
          </div>
          <p class="text-sm opacity-60 leading-relaxed mb-6">
            {{ data?.siteDescription || '致力于用设计与技术重新定义数字世界的边界。' }}
          </p>
          <div class="flex gap-4">
            <template v-if="data?.socialLinks">
              <a v-for="link in data.socialLinks" :key="link.label" :href="link.link" 
                 class="w-10 h-10 rounded-full flex items-center justify-center border transition-all hover:scale-110"
                 :class="socialIconClasses">
                 <span class="text-[10px] font-black">{{ link.label }}</span>
              </a>
            </template>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-bold mb-6 uppercase tracking-widest text-sm">探索页面</h4>
          <ul class="space-y-4">
            <li v-for="page in siteData.pages" :key="page.id">
              <a href="#" @click.prevent="changePage(page.id)" 
                 class="text-sm opacity-60 hover:opacity-100 transition-opacity">
                {{ page.title }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Resources -->
        <div>
          <h4 class="font-bold mb-6 uppercase tracking-widest text-sm">相关资源</h4>
          <ul class="space-y-4 text-sm opacity-60">
            <li><a href="#" class="hover:opacity-100">开发文档</a></li>
            <li><a href="#" class="hover:opacity-100">设计指南</a></li>
            <li><a href="#" class="hover:opacity-100">开源项目</a></li>
            <li><a href="#" class="hover:opacity-100">社区论坛</a></li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div class="md:text-left">
          <h4 class="font-bold mb-6 uppercase tracking-widest text-sm">
            {{ data?.newsletterTitle || '周刊订阅' }}
          </h4>
          <p class="text-sm opacity-60 mb-6">
            {{ data?.newsletterSubtitle || '获取最新的设计趋势与技术分享。' }}
          </p>
          <div class="flex flex-col sm:flex-row gap-3">
            <input type="text" :placeholder="data?.newsletterPlaceholder || 'your@email.com'" 
                   class="bg-transparent border px-4 py-3 rounded-lg text-sm flex-1 focus:outline-none"
                   :class="inputClasses" />
            <button class="px-6 py-3 font-bold rounded-lg text-sm transition-transform active:scale-95 shadow-sm whitespace-nowrap"
                    :class="buttonClasses">
              {{ data?.newsletterButton || '订阅' }}
            </button>
          </div>
        </div>
      </div>

      <div class="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-40"
           :class="bottomBorderClasses">
        <p>© 2026 {{ siteData.config.siteName }}. All rights reserved.</p>
        <div class="flex gap-8">
          <template v-if="data?.bottomLinks">
              <a v-for="link in data.bottomLinks" :key="link.label" :href="link.link">
                  {{ link.label }}
              </a>
          </template>
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

const themeClasses = computed(() => {
  switch (siteData.config.theme) {
    case 'pop-art': return 'bg-yellow-400 text-black border-black border-t-4'
    case 'minimal': return 'bg-white text-stone-900 border-stone-100'
    case 'cyberpunk': return 'bg-black text-white border-cyan-950'
    case 'fresh': return 'bg-emerald-800 text-emerald-50 border-emerald-700'
    case 'luxury': return 'bg-slate-950 text-amber-100 border-amber-900/50'
    case 'yellow': return 'bg-amber-300 text-amber-950 border-amber-400'
    default: return 'bg-gray-50 text-gray-900'
  }
})

const brandClasses = computed(() => {
  const t = siteData.config.theme
  if (t === 'pop-art') return 'italic underline decoration-pink-500'
  if (t === 'cyberpunk') return 'text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] font-black italic'
  if (t === 'fresh') return 'font-serif italic text-emerald-200'
  if (t === 'luxury') return 'tracking-[0.3em] text-amber-500 font-black'
  return ''
})

const socialIconClasses = computed(() => {
  switch (siteData.config.theme) {
    case 'pop-art': return 'bg-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
    case 'minimal': return 'border-stone-200 hover:bg-stone-50'
    case 'cyberpunk': return 'border-cyan-500 text-cyan-500 hover:bg-cyan-500/10'
    case 'fresh': return 'bg-emerald-700 border-emerald-600 text-emerald-100 hover:bg-emerald-600'
    case 'luxury': return 'border-amber-500 text-amber-500 hover:bg-amber-500/10'
    case 'yellow': return 'border-amber-900 text-amber-900 hover:bg-amber-400/20'
    default: return 'border-gray-200 hover:bg-white'
  }
})

const inputClasses = computed(() => {
  const t = siteData.config.theme
  if (t === 'pop-art') return 'border-2 border-black bg-white rounded-none'
  if (t === 'cyberpunk') return 'border-cyan-900 bg-slate-900 focus:border-cyan-500'
  if (t === 'fresh') return 'border-emerald-600 bg-emerald-700/50 focus:border-emerald-400'
  if (t === 'luxury') return 'border-amber-900 bg-slate-900 focus:border-amber-500'
  if (t === 'yellow') return 'border-amber-400 bg-amber-50 focus:border-amber-600'
  return 'border-gray-200 focus:border-blue-500'
})

const buttonClasses = computed(() => {
  switch (siteData.config.theme) {
    case 'pop-art': return 'bg-pink-500 text-white border-2 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
    case 'minimal': return 'bg-stone-900 text-white rounded-none'
    case 'cyberpunk': return 'bg-cyan-500 text-black shadow-[0_0_10px_rgba(6,182,212,0.5)]'
    case 'fresh': return 'bg-emerald-400 text-emerald-950 font-bold'
    case 'luxury': return 'bg-amber-500 text-slate-900 uppercase tracking-widest'
    case 'yellow': return 'bg-amber-950 text-amber-50 rounded-none shadow-lg'
    default: return 'bg-blue-600 text-white'
  }
})

const bottomBorderClasses = computed(() => {
    const t = siteData.config.theme
    if (t === 'pop-art') return 'border-black'
    if (t === 'cyberpunk') return 'border-cyan-900'
    if (t === 'fresh') return 'border-emerald-700'
    if (t === 'luxury') return 'border-amber-900/30'
    return 'border-gray-100'
})
</script>
