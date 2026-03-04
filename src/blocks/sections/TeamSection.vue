<template>
  <section class="py-24 px-4" :class="themeClasses">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-20 space-y-4">
        <h2 class="text-4xl md:text-6xl font-black" :class="titleClasses">
          {{ data?.title || '遇见精英团队' }}
        </h2>
        <p class="text-xl opacity-60 max-w-2xl mx-auto">
          {{ data?.subtitle || '每一位成员都是领域内的专家，共同致力于为您创造价值。' }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(member, idx) in members" :key="idx" 
             class="group relative overflow-hidden rounded-3xl p-6 transition-all duration-500"
             :class="cardClasses">
          <div class="relative w-full aspect-square mb-6 rounded-2xl overflow-hidden shadow-xl">
             <img :src="member.image" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
             <!-- Social Links Overlay style -->
             <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <span class="text-white text-xl cursor-pointer hover:scale-120">𝕏</span>
                <span class="text-white text-xl cursor-pointer hover:scale-120">💼</span>
             </div>
          </div>
          <div class="space-y-2">
            <h3 class="text-xl font-bold">{{ member.name }}</h3>
            <p class="text-sm font-black opacity-40 uppercase tracking-widest" :class="roleClasses">{{ member.role }}</p>
            <p class="text-sm opacity-60 leading-relaxed">{{ member.bio }}</p>
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

const members = computed(() => {
  return props.data?.members || [
    { name: 'Alex Rivera', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80', bio: '有着 10 年数字设计经验，致力于打造未来的互联网美学。' },
    { name: 'Sarah Chen', role: 'Lead Designer', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80', bio: '像素级强迫症患者，在她的世界里，美就是正义。' },
    { name: 'Marcus Wood', role: 'CTO', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80', bio: '全栈架构师，任何复杂的需求在他手中都能化繁为简。' },
    { name: 'Elena Petrova', role: 'Strategy Director', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80', bio: '擅长市场趋势分析，为客户品牌提供最深度的洞察。' }
  ]
})

const themeClasses = computed(() => {
  switch (siteData.config.theme) {
    case 'pop-art': return 'bg-yellow-400 text-black'
    case 'cyberpunk': return 'bg-black text-white'
    case 'minimal': return 'bg-stone-50 text-stone-900'
    case 'luxury': return 'bg-slate-950 text-amber-100'
    case 'fresh': return 'bg-emerald-50 text-emerald-900 font-serif'
    case 'yellow': return 'bg-amber-100 text-amber-950'
    default: return 'bg-white text-gray-900'
  }
})

const titleClasses = computed(() => {
  if (siteData.config.theme === 'pop-art') return 'uppercase tracking-tighter italic border-b-8 border-pink-500 inline-block'
  if (siteData.config.theme === 'fresh') return 'italic'
  if (siteData.config.theme === 'luxury') return 'font-serif text-amber-400'
  return ''
})

const cardClasses = computed(() => {
  switch (siteData.config.theme) {
    case 'pop-art': return 'bg-white border-4 border-black hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]'
    case 'minimal': return 'bg-white border border-stone-100 hover:shadow-2xl'
    case 'cyberpunk': return 'bg-slate-900 border border-cyan-500/20 hover:border-cyan-400/50'
    case 'fresh': return 'bg-white border-b-8 border-emerald-500 rounded-none shadow-xl'
    case 'luxury': return 'bg-slate-900 border border-amber-500/10 hover:border-amber-500 transition-colors shadow-2xl'
    default: return 'bg-gray-50'
  }
})

const roleClasses = computed(() => {
  if (siteData.config.theme === 'cyberpunk') return 'text-cyan-400 opacity-100'
  if (siteData.config.theme === 'luxury') return 'text-amber-500 opacity-100'
  return ''
})
</script>
