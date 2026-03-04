<template>
  <section class="py-24 px-6 transition-all duration-700" :class="themeClasses">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16 space-y-4">
        <h2 v-if="data?.title" class="text-3xl md:text-5xl font-black tracking-tight" :class="headingClasses">
          {{ data.title }}
        </h2>
        <p v-if="data?.subtitle" class="text-lg opacity-60 max-w-2xl mx-auto">
          {{ data.subtitle }}
        </p>
      </div>

      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        <div v-for="(stat, index) in statsItems" :key="index"
             class="relative group p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2"
             :class="itemClasses">
          
          <!-- Background Decoration -->
          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl -z-10"
               :class="itemHoverClasses"></div>

          <div class="text-center space-y-2">
            <div class="text-4xl md:text-6xl font-black tracking-tighter transition-transform duration-500 group-hover:scale-110"
                 :class="valueClasses">
              {{ stat.value }}
            </div>
            <div class="text-xs md:text-sm font-bold uppercase tracking-[0.2em] opacity-40">
              {{ stat.label }}
            </div>
            <div v-if="stat.desc" class="text-[10px] md:text-xs opacity-60 mt-4 leading-relaxed line-clamp-2">
              {{ stat.desc }}
            </div>
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
  data: {
    type: Object,
    default: () => ({})
  }
})

const statsItems = computed(() => {
  return props.data?.items || [
    { value: '10K+', label: 'Active Users', desc: 'Trusted by thousands of developers worldwide.' },
    { value: '99.9%', label: 'Uptime', desc: 'Enterprise-grade reliability and performance.' },
    { value: '24/7', label: 'Support', desc: 'Expert assistance whenever you need it.' },
    { value: '150+', label: 'Components', desc: 'Ready-to-use blocks for your next project.' }
  ]
})

const themeClasses = computed(() => {
  switch (siteData.config.theme) {
    case 'pop-art': return 'bg-[#FFDE03] text-black border-y-8 border-black'
    case 'minimal': return 'bg-white text-stone-900'
    case 'cyberpunk': return 'bg-[#050505] text-white'
    case 'fresh': return 'bg-[#f0f9f4] text-emerald-900 font-sans'
    case 'luxury': return 'bg-slate-950 text-amber-50'
    case 'yellow': return 'bg-amber-50 text-amber-950'
    default: return 'bg-zinc-50 text-zinc-900'
  }
})

const headingClasses = computed(() => {
  const t = siteData.config.theme
  if (t === 'pop-art') return 'italic uppercase underline decoration-black underline-offset-8'
  if (t === 'cyberpunk') return 'text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.6)] uppercase'
  if (t === 'fresh') return 'font-serif text-emerald-800'
  if (t === 'luxury') return 'font-serif text-amber-500 tracking-widest'
  if (t === 'minimal') return 'font-extralight tracking-tight'
  return ''
})

const itemClasses = computed(() => {
  const t = siteData.config.theme
  switch (t) {
    case 'pop-art': return 'bg-white border-4 border-black shadow-[8px_8px_0_0_black]'
    case 'cyberpunk': return 'bg-zinc-900/50 border border-cyan-500/20 backdrop-blur-sm'
    case 'fresh': return 'bg-emerald-100/50 border border-emerald-200'
    case 'luxury': return 'bg-white/5 border border-white/10'
    case 'minimal': return 'bg-stone-50 border border-stone-100'
    case 'yellow': return 'bg-amber-100 border border-amber-200'
    default: return 'bg-white border border-zinc-200 shadow-sm'
  }
})

const itemHoverClasses = computed(() => {
  const t = siteData.config.theme
  if (t === 'pop-art') return 'bg-pink-400 -translate-x-2 -translate-y-2'
  if (t === 'cyberpunk') return 'bg-cyan-500/10 border border-cyan-400/40'
  if (t === 'fresh') return 'bg-emerald-200/50'
  if (t === 'luxury') return 'bg-amber-500/5 border-amber-500/20'
  return 'bg-current opacity-[0.02]'
})

const valueClasses = computed(() => {
  const t = siteData.config.theme
  if (t === 'pop-art') return 'text-pink-600 italic'
  if (t === 'cyberpunk') return 'text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-fuchsia-500 drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]'
  if (t === 'fresh') return 'text-emerald-600'
  if (t === 'luxury') return 'text-amber-500 font-serif'
  if (t === 'minimal') return 'text-black font-thin'
  if (t === 'yellow') return 'text-amber-700'
  return 'text-blue-600'
})
</script>
