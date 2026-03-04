<template>
  <section class="py-24 px-4" :class="themeClasses">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-16 space-y-4">
        <h2 class="text-4xl md:text-5xl font-black" :class="titleClasses">
          {{ data?.title || '常见问题' }}
        </h2>
        <p class="text-xl opacity-60">
          {{ data?.subtitle || '关于我们的服务，您可能想了解这些。' }}
        </p>
      </div>

      <div class="space-y-4">
        <div v-for="(item, idx) in faqItems" :key="idx" 
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

const faqItems = computed(() => {
  return props.data?.items || [
    { question: '你们能根据我的特定风格定制主题吗？', answer: '当然！我们的引擎天生支持各种视觉风格。无论是极简、复古还是超前，我们都能通过精确的 CSS 注入为您打造个性化体验。' },
    { question: '项目通常需要多长时间交付？', answer: '根据复杂程度，绝大多数企业官网项目都能在 2-4 周内完成从设计到上线的全过程。' },
    { question: '你们提供后续的维护服务吗？', answer: '我们提供 7*24 小时的技术支持和持续的内容更新服务。确保您的网站始终处于最佳性能状态。' },
    { question: '系统是否支持多语言切换？', answer: '是的，我们的架构完全支持多语言。您可以根据全球业务需求，轻松添加无限种语言选项。' }
  ]
})

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
