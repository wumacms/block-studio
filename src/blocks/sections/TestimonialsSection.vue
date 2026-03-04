<template>
  <section class="py-24 px-6 overflow-hidden transition-all duration-700" :class="themeClasses">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
        <div class="max-w-xl">
          <h2 v-if="data?.title" class="text-4xl md:text-6xl font-black tracking-tight mb-6" :class="headingClasses">
            {{ data.title }}
          </h2>
          <p v-if="data?.subtitle" class="text-lg opacity-60">
            {{ data.subtitle }}
          </p>
        </div>
        <div class="flex gap-4">
           <!-- Navigation Buttons for future slider logic -->
           <div v-for="i in 2" :key="i" class="w-12 h-12 rounded-full border border-current flex items-center justify-center opacity-20 hover:opacity-100 cursor-pointer transition-all">
              <span class="text-xl">{{ i === 1 ? '←' : '→' }}</span>
           </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="(item, index) in testimonials" :key="index"
             class="p-10 rounded-[2.5rem] border transition-all duration-500 hover:scale-[1.02]"
             :class="cardClasses">
          
          <div class="text-3xl mb-8 opacity-20 group-hover:opacity-100 transition-opacity" :class="quoteIconClasses">“</div>
          
          <p class="text-xl font-bold leading-relaxed mb-10 italic">
            {{ item.content }}
          </p>

          <div class="flex items-center gap-4 mt-auto">
            <img :src="item.avatar || `https://i.pravatar.cc/100?u=${item.name}`" 
                 class="w-12 h-12 rounded-2xl object-cover grayscale brightness-125" />
            <div>
                <h4 class="font-black text-sm uppercase tracking-widest">{{ item.name }}</h4>
                <p class="text-[10px] uppercase font-bold opacity-40">{{ item.role }}</p>
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

const testimonials = computed(() => {
  return props.data?.items || [
    { name: 'Sarah Drasner', role: 'Engineering Manager', content: 'Our workflow improved 10x after switching to Block Studio. The speed of iteration is insane.' },
    { name: 'Guillermo Rauch', role: 'Founder & CEO', content: 'The attention to detail in these components is something I haven\'t seen elsewhere. Truly premium.' },
    { name: 'Lee Robinson', role: 'Head of Developer Relations', content: 'Visual excellence combined with developer productivity. This is how the web should be built.' }
  ]
})

const themeClasses = computed(() => {
  switch (siteData.config.theme) {
    case 'pop-art': return 'bg-pink-50 text-black border-y-4 border-black'
    case 'minimal': return 'bg-stone-50 text-stone-900 border-y border-stone-200'
    case 'cyberpunk': return 'bg-slate-900 text-white border-y border-cyan-500/20 shadow-[inset_0_0_50px_rgba(34,211,238,0.1)]'
    case 'fresh': return 'bg-emerald-50 text-emerald-900'
    case 'luxury': return 'bg-slate-950 text-amber-50'
    case 'yellow': return 'bg-amber-100 text-amber-950'
    default: return 'bg-white text-zinc-900'
  }
})

const headingClasses = computed(() => {
  const t = siteData.config.theme
  if (t === 'pop-art') return 'italic tracking-tighter'
  if (t === 'cyberpunk') return 'text-cyan-400 drop-shadow-[0_0_8px_cyan]'
  if (t === 'luxury') return 'font-serif text-amber-500 tracking-widest uppercase'
  if (t === 'fresh') return 'font-serif text-emerald-800'
  return ''
})

const cardClasses = computed(() => {
  const t = siteData.config.theme
  switch (t) {
    case 'pop-art': return 'bg-white border-4 border-black shadow-[8px_8px_0_0_black] rounded-none'
    case 'minimal': return 'bg-white border-stone-200'
    case 'cyberpunk': return 'bg-zinc-900/60 border-cyan-500/20 backdrop-blur-md'
    case 'fresh': return 'bg-emerald-100/40 border-emerald-200'
    case 'luxury': return 'bg-white/5 border-amber-500/20'
    case 'yellow': return 'bg-amber-50 border-amber-900/10'
    default: return 'bg-white border-zinc-100 shadow-xl'
  }
})

const quoteIconClasses = computed(() => {
    const t = siteData.config.theme
    if (t === 'pop-art') return 'text-pink-600'
    if (t === 'cyberpunk') return 'text-cyan-400'
    if (t === 'luxury') return 'text-amber-500'
    return 'text-current'
})
</script>
