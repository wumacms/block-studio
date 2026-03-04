<template>
  <section class="py-24 px-4 overflow-hidden" :class="themeClasses">
    <div class="max-w-7xl mx-auto">
      <div v-if="data?.title" class="mb-12 text-center">
        <h2 class="text-3xl md:text-5xl font-black mb-4">{{ data.title }}</h2>
        <p v-if="data?.subtitle" class="opacity-60 text-lg">{{ data.subtitle }}</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
        <!-- Main Feature (Large) -->
        <div class="md:col-span-2 md:row-span-2 p-10 rounded-3xl relative group cursor-pointer overflow-hidden" :class="itemClasses">
           <div class="relative z-10">
             <div class="text-5xl mb-6">{{ data?.mainItem?.icon || '💎' }}</div>
             <h3 class="text-3xl font-black mb-4">{{ data?.mainItem?.title || '核心竞争力' }}</h3>
             <p class="opacity-70 text-lg">{{ data?.mainItem?.desc || '我们的底层引擎采用了最先进的原子化区块技术。' }}</p>
           </div>
           <div class="absolute bottom-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
             <div class="text-[120px] font-black">{{ data?.mainItem?.bgText || 'CORE' }}</div>
           </div>
        </div>
        
        <!-- Feature 2 -->
        <div class="md:col-span-2 p-8 rounded-3xl flex items-center justify-between" :class="itemClasses">
           <div>
             <h4 class="text-xl font-bold mb-2">{{ data?.item2?.title || '多端适配' }}</h4>
             <p class="opacity-60 text-sm">{{ data?.item2?.desc || '完美支持各种屏幕尺寸。' }}</p>
           </div>
           <div class="text-4xl">{{ data?.item2?.icon || '📱' }}</div>
        </div>

        <!-- Feature 3 -->
        <div class="p-8 rounded-3xl flex flex-col justify-end" :class="itemClasses">
           <div class="text-3xl mb-4">{{ data?.item3?.icon || '🔒' }}</div>
           <h4 class="font-bold">{{ data?.item3?.title || '安全稳定' }}</h4>
        </div>

        <!-- Feature 4 -->
        <div class="p-8 rounded-3xl flex flex-col justify-end" :class="itemClasses">
           <div class="text-3xl mb-4">{{ data?.item4?.icon || '⚡' }}</div>
           <h4 class="font-bold">{{ data?.item4?.title || '急速性能' }}</h4>
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
    case 'cyberpunk': return 'bg-black text-white'
    case 'minimal': return 'bg-white'
    case 'fresh': return 'bg-emerald-50'
    case 'luxury': return 'bg-slate-950 text-amber-100'
    case 'yellow': return 'bg-amber-50'
    default: return 'bg-white'
  }
})

const itemClasses = computed(() => {
  switch (siteData.config.theme) {
    case 'pop-art': return 'bg-white border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]'
    case 'minimal': return 'bg-stone-50 border border-stone-100 hover:bg-stone-100 transition-colors'
    case 'cyberpunk': return 'bg-slate-900 border border-cyan-500/20 hover:border-cyan-400/50 shadow-[0_0_20px_rgba(0,0,0,1)] text-cyan-50'
    case 'fresh': return 'bg-white border-b-8 border-emerald-500 rounded-none shadow-xl shadow-emerald-100'
    case 'luxury': return 'bg-slate-900 border border-amber-500/20 hover:border-amber-500 transition-colors shadow-2xl shadow-amber-900/20'
    case 'yellow': return 'bg-white border-2 border-amber-950 shadow-lg'
    default: return 'bg-gray-50 border border-gray-100'
  }
})
</script>

