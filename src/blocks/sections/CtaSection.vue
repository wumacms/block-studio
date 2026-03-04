<template>
  <section class="py-24 px-4 overflow-hidden" :class="themeClasses">
    <div class="max-w-7xl mx-auto">
      <div class="relative rounded-[3rem] p-12 md:p-24 overflow-hidden text-center space-y-8" :class="cardClasses">
        <!-- Decoration elements -->
        <div class="absolute -top-12 -left-12 w-64 h-64 blur-3xl opacity-30 rounded-full" :class="blurClasses"></div>
        <div class="absolute -bottom-12 -right-12 w-64 h-64 blur-3xl opacity-30 rounded-full" :class="blurClasses"></div>

        <div class="relative z-10 space-y-6">
          <h2 class="text-4xl md:text-7xl font-black leading-tight" :class="titleClasses">
            {{ data?.title }}
          </h2>
          <p class="text-xl md:text-2xl opacity-80 max-w-3xl mx-auto">
            {{ data?.subtitle }}
          </p>
          <div class="pt-6">
            <button class="px-12 py-5 text-xl font-bold rounded-full transition-all hover:scale-105 active:scale-95 shadow-2xl" 
                    :class="buttonClasses">
              {{ data?.ctaText }}
            </button>
          </div>
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
    case 'pop-art': return 'bg-yellow-400'
    case 'minimal': return 'bg-stone-50'
    case 'cyberpunk': return 'bg-black'
    case 'luxury': return 'bg-slate-950'
    case 'fresh': return 'bg-emerald-50'
    case 'yellow': return 'bg-amber-100'
    default: return 'bg-white'
  }
})

const cardClasses = computed(() => {
  switch (siteData.config.theme) {
    case 'pop-art': return 'bg-pink-500 text-white border-8 border-black shadow-[20px_20px_0px_0px_rgba(34,211,238,1)]'
    case 'minimal': return 'bg-stone-900 text-white rounded-none border border-stone-800'
    case 'cyberpunk': return 'bg-slate-900 border-t border-cyan-500/50 text-white shadow-[0_0_50px_rgba(6,182,212,0.15)]'
    case 'luxury': return 'bg-slate-900 border border-amber-500/20 text-amber-100 shadow-2xl'
    case 'fresh': return 'bg-emerald-600 text-white shadow-2xl shadow-emerald-200'
    case 'yellow': return 'bg-amber-900 text-amber-50 border-4 border-amber-950'
    default: return 'bg-blue-600 text-white'
  }
})

const titleClasses = computed(() => {
  if (siteData.config.theme === 'pop-art') return 'italic uppercase'
  if (siteData.config.theme === 'fresh') return 'font-serif'
  if (siteData.config.theme === 'luxury') return 'font-serif text-amber-400'
  return ''
})

const buttonClasses = computed(() => {
  switch (siteData.config.theme) {
    case 'pop-art': return 'bg-cyan-400 text-black border-4 border-black hover:bg-white'
    case 'minimal': return 'bg-white text-stone-900 rounded-none'
    case 'cyberpunk': return 'bg-cyan-500 text-black hover:shadow-[0_0_30px_rgba(6,182,212,0.8)]'
    case 'luxury': return 'bg-amber-500 text-slate-900 hover:bg-amber-400 border border-amber-600'
    case 'fresh': return 'bg-white text-emerald-600 hover:bg-emerald-50'
    case 'yellow': return 'bg-amber-100 text-amber-950'
    default: return 'bg-white text-blue-600'
  }
})

const blurClasses = computed(() => {
  switch (siteData.config.theme) {
    case 'pop-art': return 'bg-yellow-300'
    case 'cyberpunk': return 'bg-cyan-500'
    case 'fresh': return 'bg-emerald-300'
    case 'luxury': return 'bg-amber-600'
    case 'minimal': return 'bg-stone-400'
    case 'yellow': return 'bg-amber-300'
    default: return 'bg-white/20'
  }
})
</script>
