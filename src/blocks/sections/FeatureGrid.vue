<template>
  <section class="py-24 px-4" :class="themeClasses">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div v-if="data?.title" class="text-center mb-16 space-y-4">
        <h2 class="text-4xl md:text-6xl font-black" :class="sectionTitleClasses">
          {{ data.title }}
        </h2>
        <p v-if="data?.subtitle" class="text-xl opacity-60 max-w-2xl mx-auto">
          {{ data.subtitle }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div v-for="(item, idx) in data.items" :key="idx" 
             class="p-8 rounded-2xl transition-all duration-300" 
             :class="itemClasses">
          <div class="text-4xl mb-6">{{ item.icon }}</div>
          <h3 class="text-2xl font-bold mb-4">{{ item.title }}</h3>
          <p class="opacity-70 leading-relaxed">{{ item.desc }}</p>
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
    case 'minimal': return 'bg-white text-stone-800'
    case 'cyberpunk': return 'bg-black text-white'
    case 'fresh': return 'bg-emerald-50 text-emerald-900 font-serif'
    case 'luxury': return 'bg-slate-900 text-amber-100'
    case 'yellow': return 'bg-amber-100 text-amber-950'
    default: return 'bg-gray-50 text-gray-900'
  }
})

const sectionTitleClasses = computed(() => {
  if (siteData.config.theme === 'pop-art') return 'italic uppercase border-b-8 border-pink-500 inline-block'
  if (siteData.config.theme === 'luxury') return 'font-serif text-amber-400'
  if (siteData.config.theme === 'cyberpunk') return 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500'
  if (siteData.config.theme === 'fresh') return 'italic'
  return ''
})

const itemClasses = computed(() => {
  switch (siteData.config.theme) {
    case 'pop-art': return 'border-4 border-black hover:-translate-y-2 hover:-translate-x-2 shadow-[12px_12px_0px_0px_rgba(34,211,238,1)]'
    case 'minimal': return 'border border-stone-100 hover:shadow-xl'
    case 'cyberpunk': return 'bg-slate-800/50 border border-cyan-500/30 hover:border-cyan-400'
    case 'fresh': return 'bg-white border-b-4 border-emerald-500 rounded-none hover:shadow-emerald-100 shadow-lg'
    case 'luxury': return 'bg-slate-800 border border-amber-500/20 hover:border-amber-500/50 shadow-2xl'
    case 'yellow': return 'bg-white border-2 border-amber-900 hover:bg-amber-50'
    default: return 'bg-white hover:shadow-lg'
  }
})
</script>
