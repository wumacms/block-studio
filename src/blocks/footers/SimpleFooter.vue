<template>
  <footer class="py-12 px-4 text-center transition-all duration-500" :class="themeClasses">
    <div class="max-w-7xl mx-auto">
      <div class="text-3xl mb-4 font-black tracking-widest uppercase" :class="brandClasses">
        {{ siteData.navigation.logo.primary }}
      </div>
      
      <div class="flex justify-center gap-8 mb-8">
        <button v-for="page in siteData.pages" :key="page.id"
                @click="changePage(page.id)"
                class="text-sm font-medium opacity-60 hover:opacity-100 transition-opacity uppercase tracking-widest">
          {{ page.title }}
        </button>
      </div>

      <div class="h-px w-20 mx-auto mb-8" :class="dividerClasses"></div>

      <p class="text-xs opacity-40 mb-2">
        © 2026 {{ siteData.config.siteName }}. {{ data?.copyrightText || '所有权利保留。' }}
      </p>
      <p class="text-[10px] opacity-30 uppercase tracking-[0.3em]">
        {{ data?.bottomTagline || 'Designed with Passion & Code' }}
      </p>
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
    case 'pop-art': return 'bg-cyan-100 text-black border-t-2 border-black'
    case 'minimal': return 'bg-stone-50 text-stone-400'
    case 'cyberpunk': return 'bg-slate-900 text-cyan-400'
    case 'fresh': return 'bg-emerald-50 text-emerald-800'
    case 'luxury': return 'bg-slate-950 text-amber-500'
    case 'yellow': return 'bg-amber-50 text-amber-900 border-t border-amber-200'
    default: return 'bg-white text-gray-400'
  }
})

const brandClasses = computed(() => {
  const t = siteData.config.theme
  if (t === 'pop-art') return 'text-pink-600 italic'
  if (t === 'cyberpunk') return 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500'
  if (t === 'fresh') return 'text-emerald-700 font-serif'
  if (t === 'luxury') return 'text-amber-500 tracking-[0.5em]'
  return 'text-stone-900'
})

const dividerClasses = computed(() => {
  const t = siteData.config.theme
  if (t === 'pop-art') return 'bg-black h-1 w-32'
  if (t === 'cyberpunk') return 'bg-cyan-500 shadow-[0_0_10px_cyan]'
  if (t === 'fresh') return 'bg-emerald-300'
  if (t === 'luxury') return 'bg-amber-500/30'
  if (t === 'yellow') return 'bg-amber-900/40'
  return 'bg-stone-200'
})
</script>
