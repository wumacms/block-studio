<template>
  <nav class="w-full pt-6 pb-2 transition-all duration-500" :class="themeBg">
    <div class="max-w-7xl mx-auto px-4">
      <!-- Top Layer: Logo Centered -->
      <div class="flex justify-center mb-6">
        <a href="#" @click.prevent="changePage('home')" class="flex flex-col items-center">
          <div class="text-4xl mb-1" :class="logoClasses">{{ siteData.config.theme === 'minimal' ? '⛩️' : '🚀' }}</div>
          <span class="text-2xl font-black tracking-[0.3em] uppercase" :class="textClasses">
            {{ data?.logo?.primary || siteData.navigation.logo.primary }}
          </span>
        </a>
      </div>

      <!-- Bottom Layer: Nav Items -->
      <div class="flex justify-center border-t border-b py-4" :class="borderClasses">
        <ul class="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 sm:gap-x-12">
          <li v-for="page in siteData.pages" :key="page.id">
            <button @click="changePage(page.id)"
                    class="text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-300 relative py-1"
                    :class="navItemClasses(page.id === siteData.currentPageId)">
              {{ page.title }}
              <span v-if="page.id === siteData.currentPageId" 
                    class="absolute -bottom-1 left-0 w-full h-0.5" 
                    :class="indicatorClasses"></span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { siteData, changePage } from '../../engine/siteData'

const props = defineProps({
  data: Object
})

const themeBg = computed(() => {
  switch (siteData.config.theme) {
    case 'pop-art': return 'bg-yellow-400'
    case 'minimal': return 'bg-stone-50'
    case 'cyberpunk': return 'bg-black text-white'
    case 'fresh': return 'bg-emerald-50'
    case 'luxury': return 'bg-slate-950 text-amber-100'
    case 'yellow': return 'bg-amber-50'
    default: return 'bg-white'
  }
})

const logoClasses = computed(() => {
  if (siteData.config.theme === 'pop-art') return 'animate-bounce'
  return ''
})

const textClasses = computed(() => {
  const t = siteData.config.theme
  if (t === 'pop-art') return 'text-pink-500 italic'
  if (t === 'cyberpunk') return 'text-cyan-400 drop-shadow-[0_0_8px_cyan]'
  if (t === 'fresh') return 'text-emerald-800 font-serif italic'
  if (t === 'luxury') return 'text-amber-500 tracking-[0.4em]'
  if (t === 'minimal') return 'text-stone-900 font-light'
  if (t === 'yellow') return 'text-amber-900 tracking-tighter'
  return 'text-gray-900'
})

const borderClasses = computed(() => {
  const t = siteData.config.theme
  if (t === 'pop-art') return 'border-black border-t-4 border-b-4'
  if (t === 'cyberpunk') return 'border-cyan-500/30'
  if (t === 'fresh') return 'border-emerald-200'
  if (t === 'luxury') return 'border-amber-500/20'
  if (t === 'yellow') return 'border-amber-900/10'
  return 'border-stone-200'
})

const indicatorClasses = computed(() => {
  const t = siteData.config.theme
  if (t === 'pop-art') return 'bg-yellow-400 h-1'
  if (t === 'cyberpunk') return 'bg-cyan-400 shadow-[0_0_10px_cyan]'
  if (t === 'fresh') return 'bg-emerald-500'
  if (t === 'luxury') return 'bg-amber-500'
  if (t === 'yellow') return 'bg-amber-900'
  return 'bg-stone-800'
})

const navItemClasses = (isActive) => {
  if (isActive) return 'text-current opacity-100'
  return 'text-current opacity-50 hover:opacity-80'
}
</script>
