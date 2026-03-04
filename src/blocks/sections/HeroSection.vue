<template>
  <section class="py-20 px-4 transition-colors duration-500" :class="themeClasses">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
      <div class="flex-1 space-y-6 text-center md:text-left">
        <h1 v-if="data?.title" class="text-4xl md:text-7xl font-black leading-tight" :class="titleClasses">
          {{ data.title }}
        </h1>
        <p v-if="data?.subtitle" class="text-lg md:text-xl opacity-80" :class="subtitleClasses">
          {{ data.subtitle }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button v-if="data?.ctaText" class="px-8 py-4 font-bold rounded-full transform transition hover:scale-105 active:scale-95 shadow-lg" :class="buttonClasses">
            {{ data.ctaText }}
          </button>
        </div>
      </div>
      <div class="flex-1 relative" v-if="data?.image">
        <div class="absolute -inset-4 rounded-2xl transform rotate-3 z-0" :class="imageBgClasses"></div>
        <img :src="data.image" class="relative z-10 w-full h-[400px] object-cover rounded-xl shadow-2xl" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { siteData } from '../../engine/siteData'

const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  }
})

const themeClasses = computed(() => {
  switch (siteData.config.theme) {
    case 'pop-art': return 'bg-yellow-100 text-black'
    case 'minimal': return 'bg-stone-50 text-stone-900'
    case 'cyberpunk': return 'bg-slate-900 text-white'
    case 'fresh': return 'bg-emerald-50 text-emerald-900'
    case 'luxury': return 'bg-slate-950 text-amber-100'
    case 'yellow': return 'bg-amber-50 text-amber-950'
    default: return 'bg-white text-gray-900'
  }
})

const titleClasses = computed(() => {
  if (siteData.config.theme === 'pop-art') return 'uppercase tracking-tighter italic border-b-8 border-pink-500 inline-block'
  if (siteData.config.theme === 'minimal') return 'font-light tracking-widest'
  if (siteData.config.theme === 'fresh') return 'font-serif italic border-l-8 border-emerald-400 pl-6'
  if (siteData.config.theme === 'luxury') return 'font-serif text-amber-400'
  if (siteData.config.theme === 'cyberpunk') return 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]'
  return ''
})

const subtitleClasses = computed(() => {
  if (siteData.config.theme === 'minimal') return 'font-light italic'
  return ''
})

const buttonClasses = computed(() => {
  switch (siteData.config.theme) {
    case 'pop-art': return 'bg-pink-500 text-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'
    case 'minimal': return 'bg-stone-800 text-white rounded-none border border-stone-800'
    case 'cyberpunk': return 'bg-cyan-500 text-black hover:shadow-[0_0_20px_rgba(34,211,238,0.8)] border-none'
    case 'fresh': return 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-xl shadow-emerald-200'
    case 'luxury': return 'bg-amber-500 text-slate-900 hover:bg-amber-400 border border-amber-600'
    case 'yellow': return 'bg-amber-300 text-amber-900 hover:bg-amber-400 border-2 border-amber-900'
    default: return 'bg-blue-600 text-white'
  }
})

const imageBgClasses = computed(() => {
  switch (siteData.config.theme) {
    case 'pop-art': return 'bg-cyan-400 border-4 border-black'
    case 'minimal': return 'bg-stone-200'
    case 'cyberpunk': return 'bg-purple-600/30 blur-xl'
    default: return 'bg-blue-100'
  }
})
</script>
