<template>
  <section class="py-24 px-4" :class="themeClasses">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-16 space-y-4">
        <h2 class="text-4xl md:text-5xl font-black" :class="titleClasses">
          {{ data?.title }}
        </h2>
        <p class="text-xl opacity-60">
          {{ data?.subtitle }}
        </p>
      </div>

      <div class="space-y-4">
        <div v-for="(item, idx) in data?.items" :key="idx" 
             class="rounded-3xl transition-all duration-300 overflow-hidden"
             :class="itemClasses(activeIdx === idx)">
          <button @click="activeIdx = activeIdx === idx ? -1 : idx"
                  class="w-full text-left px-8 py-6 flex items-center justify-between gap-4 font-bold text-lg">
            <span>{{ item.question }}</span>
            <span class="text-2xl transition-transform duration-300" :class="{ 'rotate-45': activeIdx === idx }">+</span>
          </button>
          
          <transition 
            enter-active-class="transition-[max-height,opacity] duration-300 ease-out" 
            enter-from-class="max-h-0 opacity-0" 
            enter-to-class="max-h-96 opacity-100"
            leave-active-class="transition-[max-height,opacity] duration-200 ease-in"
            leave-from-class="max-h-96 opacity-100"
            leave-to-class="max-h-0 opacity-0"
          >
            <div v-show="activeIdx === idx" class="px-8 pb-8 opacity-70 leading-relaxed text-lg">
              {{ item.answer }}
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { siteData } from '../../engine/siteData'

const props = defineProps({
  data: Object
})

const activeIdx = ref(0)

const themeClasses = computed(() => {
  switch (siteData.config.theme) {
    case 'pop-art': return 'bg-white text-black'
    case 'cyberpunk': return 'bg-slate-950 text-white'
    case 'luxury': return 'bg-slate-900 text-amber-100'
    case 'fresh': return 'bg-emerald-50 text-emerald-900'
    case 'yellow': return 'bg-amber-100 text-amber-950'
    default: return 'bg-white text-gray-900'
  }
})

const titleClasses = computed(() => {
  if (siteData.config.theme === 'pop-art') return 'italic underline decoration-pink-500 decoration-8 underline-offset-8'
  if (siteData.config.theme === 'luxury') return 'font-serif text-amber-400'
  if (siteData.config.theme === 'fresh') return 'font-serif text-emerald-600'
  return ''
})

const itemClasses = (isActive) => {
  switch (siteData.config.theme) {
    case 'pop-art': 
      return isActive 
        ? 'bg-cyan-300 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]' 
        : 'bg-white border-4 border-black hover:bg-yellow-100'
    case 'minimal': 
      return isActive 
        ? 'bg-stone-100 border border-stone-200 shadow-lg' 
        : 'bg-white border border-stone-50 hover:bg-stone-50'
    case 'cyberpunk': 
      return isActive 
        ? 'bg-slate-800 border border-cyan-400 glow-cyan' 
        : 'bg-slate-900 border border-cyan-900/50 hover:border-cyan-500/50'
    case 'luxury':
      return isActive
        ? 'bg-slate-800 border border-amber-500/50 shadow-2xl overflow-hidden'
        : 'bg-slate-800/50 border border-amber-500/10 hover:border-amber-500/30'
    case 'fresh':
      return isActive
        ? 'bg-emerald-500 text-white shadow-lg'
        : 'bg-white border-b-2 border-emerald-100 hover:bg-emerald-50'
    case 'yellow':
       return isActive
        ? 'bg-white border-2 border-amber-950 shadow-xl'
        : 'bg-amber-50 border-2 border-transparent hover:border-amber-900/20'
    default: 
      return isActive 
        ? 'bg-blue-50 border-2 border-blue-500' 
        : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'
  }
}
</script>

<style scoped>
.glow-cyan {
  box-shadow: 0 0 20px rgba(34, 211, 238, 0.2);
}
</style>
