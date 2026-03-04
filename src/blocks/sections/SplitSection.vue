<template>
  <section class="py-24 px-4 overflow-hidden" :class="themeClasses">
    <div class="max-w-7xl mx-auto flex flex-col md:items-center gap-16" 
         :class="data?.imageLeft === false ? 'md:flex-row-reverse' : 'md:flex-row'">
      
      <!-- Image Side -->
      <div class="flex-1 relative group">
        <div class="absolute -inset-4 rounded-3xl transform transition-transform group-hover:rotate-1 z-0 shadow-xl" :class="imageBgClasses"></div>
        <div class="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
          <img :src="data?.image" class="w-full h-[500px] object-cover" />
        </div>
      </div>

      <!-- Text Side -->
      <div class="flex-1 space-y-8">
        <div class="space-y-4">
          <h2 class="text-3xl md:text-5xl font-black leading-tight" :class="titleClasses">
            {{ data?.title }}
          </h2>
          <p class="text-xl opacity-70 leading-relaxed">
            {{ data?.subtitle }}
          </p>
        </div>
        
        <div class="prose prose-lg opacity-60" v-if="data?.content">
          {{ data.content }}
        </div>

        <div v-if="data?.ctaText">
          <button class="px-8 py-4 font-bold rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg" :class="buttonClasses">
            {{ data.ctaText }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { siteData } from '../../engine/siteData'

const props = defineProps({
  data: Object
})

const themeClasses = computed(() => {
  switch (siteData.config.theme) {
    case 'pop-art': return 'bg-white text-black'
    case 'minimal': return 'bg-white text-stone-900'
    case 'cyberpunk': return 'bg-slate-900 text-white'
    case 'fresh': return 'bg-white text-emerald-900'
    case 'luxury': return 'bg-slate-950 text-amber-100'
    case 'yellow': return 'bg-amber-50 text-amber-950'
    default: return 'bg-white text-gray-900'
  }
})

const titleClasses = computed(() => {
  if (siteData.config.theme === 'pop-art') return 'uppercase italic'
  if (siteData.config.theme === 'luxury') return 'font-serif text-amber-400'
  if (siteData.config.theme === 'fresh') return 'font-serif border-l-4 border-emerald-500 pl-6'
  return ''
})

const buttonClasses = computed(() => {
  switch (siteData.config.theme) {
    case 'pop-art': return 'bg-pink-500 text-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'
    case 'minimal': return 'bg-stone-800 text-white rounded-none border border-stone-800'
    case 'cyberpunk': return 'bg-cyan-500 text-black hover:shadow-[0_0_20px_rgba(34,211,238,0.8)] border-none'
    case 'fresh': return 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-xl shadow-emerald-200'
    case 'luxury': return 'bg-amber-500 text-slate-900 hover:bg-amber-400 border border-amber-600 shadow-2xl'
    case 'yellow': return 'bg-amber-300 text-amber-900 hover:bg-amber-400 border-2 border-amber-900'
    default: return 'bg-blue-600 text-white hover:bg-blue-700'
  }
})

const imageBgClasses = computed(() => {
  switch (siteData.config.theme) {
    case 'pop-art': return 'bg-cyan-400 border-4 border-black -rotate-2'
    case 'minimal': return 'bg-stone-100'
    case 'cyberpunk': return 'bg-purple-600/30 blur-2xl'
    case 'fresh': return 'bg-emerald-100/50 rotate-3'
    case 'luxury': return 'bg-amber-900/20 border border-amber-500/10'
    case 'yellow': return 'bg-amber-200/40 rotate-1'
    default: return 'bg-blue-50'
  }
})
</script>
