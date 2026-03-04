<template>
  <div>
    <!-- The Dock Navigation (Bottom Centered) -->
    <nav class="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] flex items-center transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
         :class="[isScrolled ? 'translate-y-0 opacity-100' : 'translate-y-0 opacity-100']">
      
      <div class="flex items-center gap-1 p-2 rounded-[2rem] border backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] group/dock"
           :class="dockBackgroundClasses">
        
        <!-- Logo / Home -->
        <button @click="changePage('home')" 
                class="w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all duration-300 hover:scale-125 active:scale-95 group/icon"
                :class="logoClasses">
            <span class="group-hover/icon:rotate-12 transition-transform">{{ themeLogo }}</span>
        </button>

        <div class="w-px h-6 bg-current opacity-10 mx-1"></div>

        <!-- Nav Items -->
        <div class="flex items-center gap-1">
          <button v-for="page in siteData.pages" 
                  :key="page.id"
                  @click="changePage(page.id)"
                  class="relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-125 active:scale-95 group/item"
                  :class="navItemClasses(page.id === siteData.currentPageId)">
            
            <!-- Tooltip -->
            <div class="absolute bottom-full mb-4 px-3 py-1.5 rounded-lg bg-black text-white text-[10px] font-bold uppercase tracking-widest opacity-0 scale-50 translate-y-2 group-hover/item:opacity-100 group-hover/item:scale-100 group-hover/item:translate-y-0 transition-all pointer-events-none whitespace-nowrap border border-white/10 shadow-xl">
                {{ page.title }}
            </div>

            <span class="text-[10px] font-black uppercase tracking-tighter">
                {{ page.title.substring(0, 2) }}
            </span>

            <!-- Dot Indicator -->
            <div v-if="page.id === siteData.currentPageId" 
                 class="absolute -bottom-1 w-1 h-1 rounded-full animate-pulse"
                 :class="activeIndicatorClasses"></div>
          </button>
        </div>

        <div class="w-px h-6 bg-current opacity-10 mx-1"></div>

        <!-- CTA Action -->
        <button class="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-125 active:scale-95 text-xl"
                :class="ctaClasses">
            ✨
        </button>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { siteData, changePage } from '../../engine/siteData'

const props = defineProps({
  data: Object
})

const isScrolled = ref(false)
const handleScroll = () => { isScrolled.value = window.scrollY > 50 }

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

// Theme Logic
const themeLogo = computed(() => {
  switch (siteData.config.theme) {
    case 'minimal': return '⚪'
    case 'pop-art': return '🤠'
    case 'cyberpunk': return '🛸'
    case 'fresh': return '🍏'
    case 'luxury': return '👑'
    case 'yellow': return '🐥'
    default: return '🏠'
  }
})

const dockBackgroundClasses = computed(() => {
  switch (siteData.config.theme) {
    case 'pop-art': return 'bg-white border-black border-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black'
    case 'minimal': return 'bg-stone-50/80 border-stone-200 text-stone-900'
    case 'cyberpunk': return 'bg-black/60 border-cyan-500/50 text-white shadow-[0_0_30px_rgba(6,182,212,0.3)]'
    case 'fresh': return 'bg-emerald-50/80 border-emerald-100 text-emerald-900'
    case 'luxury': return 'bg-slate-950/80 border-amber-500/20 text-amber-500'
    case 'yellow': return 'bg-amber-100/80 border-amber-900/10 text-amber-950'
    default: return 'bg-white/80 border-gray-100 text-gray-900 shadow-2xl'
  }
})

const logoClasses = computed(() => {
    if (siteData.config.theme === 'pop-art') return 'bg-yellow-400 border-2 border-black shadow-[2px_2px_0_black]'
    return 'bg-current/5 hover:bg-current/10'
})

const navItemClasses = (isActive) => {
    if (isActive) {
        const t = siteData.config.theme
        if (t === 'pop-art') return 'bg-cyan-400 border-2 border-black translate-y-[-4px] shadow-[4px_4px_0_black]'
        if (t === 'cyberpunk') return 'bg-cyan-500 text-black shadow-[0_0_15px_cyan]'
        if (t === 'luxury') return 'bg-amber-500 text-black'
        return 'bg-current text-white scale-110'
    }
    return 'bg-current/5 hover:bg-current/10'
}

const activeIndicatorClasses = computed(() => {
    const t = siteData.config.theme
    if (t === 'pop-art') return 'bg-pink-500'
    if (t === 'cyberpunk') return 'bg-cyan-400 shadow-[0_0_10px_cyan]'
    if (t === 'luxury') return 'bg-amber-500 shadow-[0_0_10px_amber-500]'
    return 'bg-blue-500'
})

const ctaClasses = computed(() => {
    const t = siteData.config.theme
    if (t === 'pop-art') return 'bg-pink-500 border-2 border-black'
    if (t === 'cyberpunk') return 'bg-gradient-to-tr from-cyan-400 to-blue-600'
    if (t === 'luxury') return 'bg-amber-500 text-black'
    return 'bg-zinc-900 text-white'
})

</script>
