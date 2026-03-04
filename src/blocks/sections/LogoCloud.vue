<template>
  <section class="py-20 px-6 overflow-hidden transition-all duration-700" :class="themeClasses">
    <div class="max-w-7xl mx-auto">
      <div v-if="data?.title || data?.subtitle" class="text-center mb-16 space-y-6">
        <h2 v-if="data?.title" class="text-sm md:text-base font-black uppercase tracking-[0.5em] opacity-40">
          {{ data.title }}
        </h2>
        <p v-if="data?.subtitle" class="text-3xl md:text-5xl font-black tracking-tighter opacity-90" :class="taglineClasses">
          {{ data.subtitle }}
        </p>
      </div>

      <!-- Infinite Scroll Track -->
      <div class="relative group/track">
        <div class="flex items-center gap-12 lg:gap-24 overflow-x-auto no-scrollbar py-8 px-4 snap-x snap-mandatory lg:justify-center flex-wrap">
          <div v-for="(logo, index) in logos" :key="index"
               class="flex-shrink-0 w-32 md:w-40 h-20 flex items-center justify-center grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500 scale-100 hover:scale-110 cursor-pointer p-4 rounded-2xl border border-transparent hover:border-current hover:bg-current/10"
               :class="logoItemClasses">
             <div class="text-xl md:text-2xl font-black italic tracking-tighter opacity-80 select-none uppercase">
                {{ logo.name || 'Brand' }}
             </div>
          </div>
        </div>

        <!-- Overlays for scroll fade (optional, depends on theme) -->
        <div class="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-inherit to-transparent z-10 pointer-events-none opacity-50"></div>
        <div class="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-inherit to-transparent z-10 pointer-events-none opacity-50"></div>
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

const logos = computed(() => {
  return props.data?.items || [
    { name: 'Linear' },
    { name: 'Stripe' },
    { name: 'Vercel' },
    { name: 'Raycast' },
    { name: 'Framer' },
    { name: 'Netflix' },
    { name: 'Slack' },
    { name: 'Discord' }
  ]
})

const themeClasses = computed(() => {
  switch (siteData.config.theme) {
    case 'pop-art': return 'bg-cyan-100 text-black font-mono border-y-4 border-black'
    case 'minimal': return 'bg-white text-stone-900 font-sans'
    case 'cyberpunk': return 'bg-black text-cyan-400 font-mono shadow-[inset_0_0_100px_rgba(34,211,238,0.1)]'
    case 'fresh': return 'bg-emerald-50 text-emerald-800'
    case 'luxury': return 'bg-slate-950 text-amber-500/80 border-y border-amber-500/10'
    case 'yellow': return 'bg-amber-100/50 text-amber-900'
    default: return 'bg-white text-zinc-900 border-y border-zinc-100'
  }
})

const taglineClasses = computed(() => {
    const t = siteData.config.theme
    if (t === 'luxury') return 'font-serif text-amber-500 italic uppercase tracking-widest'
    if (t === 'cyberpunk') return 'text-purple-400 drop-shadow-[0_0_10px_purple] skew-x-12'
    if (t === 'pop-art') return 'bg-yellow-400 border-2 border-black inline-block p-1'
    return ''
})

const logoItemClasses = computed(() => {
  const t = siteData.config.theme
  if (t === 'pop-art') return 'border-black/5 hover:border-black/100 hover:shadow-[4px_4px_0_0_black]'
  if (t === 'cyberpunk') return 'hover:text-cyan-400 border-cyan-500/20 hover:border-cyan-400'
  if (t === 'minimal') return 'hover:bg-stone-50'
  if (t === 'fresh') return 'hover:bg-emerald-100'
  if (t === 'luxury') return 'border-amber-500/5 hover:border-amber-500/20'
  return 'hover:bg-zinc-50'
})

</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
