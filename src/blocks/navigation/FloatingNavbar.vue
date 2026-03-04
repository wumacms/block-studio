<template>
  <nav class="fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[calc(100%-2rem)] max-w-4xl"
       :class="containerClasses">
    <div class="px-6 h-16 flex items-center justify-between backdrop-blur-xl border rounded-[2rem] shadow-2xl transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
         :class="pillClasses">
      
      <!-- Logo -->
      <a href="#" @click.prevent="changePage('home')" class="flex items-center gap-2 group/logo flex-shrink-0">
        <div class="w-8 h-8 rounded-full flex items-center justify-center text-lg transition-transform group-hover/logo:rotate-12"
             :class="logoIconClasses">
          {{ siteData.config.theme === 'minimal' ? '⚪' : '⚡' }}
        </div>
        <span class="font-black tracking-tighter text-lg" :class="brandClasses">
          {{ siteData.navigation.logo.primary }}
        </span>
      </a>

      <!-- Desktop Nav Icons/Text -->
      <div class="hidden sm:flex items-center gap-1 bg-black/5 dark:bg-white/5 p-1 rounded-[1.5rem]" :class="navBgClasses">
        <button v-for="page in siteData.pages" 
                :key="page.id"
                @click="changePage(page.id)"
                class="px-4 py-2 rounded-[1.2rem] text-xs font-bold transition-all duration-300 relative overflow-hidden"
                :class="navItemClasses(page.id === siteData.currentPageId)">
          <span class="relative z-10">{{ page.title }}</span>
          <div v-if="page.id === siteData.currentPageId" 
               class="absolute inset-0 z-0 bg-white/20 dark:bg-black/20 animate-in fade-in zoom-in duration-300"></div>
        </button>
      </div>

      <!-- Action Button -->
      <div class="flex items-center gap-2">
        <button class="px-5 py-2 rounded-full text-xs font-black transition-all active:scale-95 shadow-lg"
                :class="ctaClasses">
          Get Started
        </button>
        
        <!-- Mobile Toggle (Simplified for Floating) -->
        <button @click="isMobileOpen = !isMobileOpen" class="sm:hidden w-10 h-10 flex items-center justify-center">
            <span class="text-xl">☰</span>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div v-if="isMobileOpen" 
           class="absolute top-20 left-0 right-0 p-6 rounded-[2rem] border backdrop-blur-2xl shadow-2xl flex flex-col gap-4 text-center sm:hidden"
           :class="pillClasses">
        <button v-for="page in siteData.pages" 
                :key="page.id"
                @click="handleMobileClick(page.id)"
                class="py-3 font-bold text-lg" :class="navTextClasses">
          {{ page.title }}
        </button>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue'
import { siteData, changePage } from '../../engine/siteData'

const isMobileOpen = ref(false)

const handleMobileClick = (id) => {
  changePage(id)
  isMobileOpen.value = false
}

const pillClasses = computed(() => {
  switch (siteData.config.theme) {
    case 'pop-art': return 'bg-white border-black border-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black'
    case 'minimal': return 'bg-stone-50/70 border-stone-200 text-stone-900'
    case 'cyberpunk': return 'bg-black/80 border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.2)] text-white'
    case 'fresh': return 'bg-emerald-50/70 border-emerald-200 shadow-emerald-100/50 text-emerald-900'
    case 'luxury': return 'bg-slate-950/80 border-amber-500/30 text-amber-100'
    case 'yellow': return 'bg-amber-100/80 border-amber-900/10 text-amber-950'
    default: return 'bg-white/80 border-gray-100 text-gray-900'
  }
})

const logoIconClasses = computed(() => {
  const t = siteData.config.theme
  if (t === 'pop-art') return 'bg-yellow-400 border-2 border-black rotate-12'
  if (t === 'cyberpunk') return 'bg-cyan-500 text-black shadow-[0_0_10px_cyan]'
  if (t === 'fresh') return 'bg-emerald-500 text-white'
  if (t === 'luxury') return 'bg-amber-500 text-black'
  if (t === 'yellow') return 'bg-amber-300 text-amber-900 border border-amber-400'
  return 'bg-zinc-900 text-white'
})

const brandClasses = computed(() => {
  const t = siteData.config.theme
  if (t === 'cyberpunk') return 'text-cyan-400'
  if (t === 'fresh') return 'text-emerald-800'
  if (t === 'luxury') return 'text-amber-500'
  if (t === 'yellow') return 'text-amber-900'
  return 'text-zinc-900'
})

const navBgClasses = computed(() => {
    return siteData.config.theme === 'cyberpunk' || siteData.config.theme === 'luxury' ? 'bg-white/5' : 'bg-black/5'
})

const navItemClasses = (isActive) => {
  const t = siteData.config.theme
  if (isActive) {
    if (t === 'pop-art') return 'bg-cyan-400 text-black border-2 border-black translate-x-1 translate-y-1'
    if (t === 'cyberpunk') return 'bg-cyan-500 text-black font-black'
    if (t === 'minimal') return 'bg-stone-900 text-white'
    if (t === 'fresh') return 'bg-emerald-600 text-white'
    if (t === 'luxury') return 'bg-amber-500 text-black'
    if (t === 'yellow') return 'bg-amber-400 text-amber-950 font-bold'
    return 'bg-zinc-900 text-white'
  }
  const isDark = t === 'cyberpunk' || t === 'luxury'
  return `text-current ${isDark ? 'opacity-50 hover:opacity-100' : 'opacity-60 hover:opacity-100'}`
}

const ctaClasses = computed(() => {
  switch (siteData.config.theme) {
    case 'pop-art': return 'bg-pink-500 text-white border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-none p-3'
    case 'minimal': return 'bg-stone-900 text-white rounded-full'
    case 'cyberpunk': return 'bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-black'
    case 'fresh': return 'bg-emerald-600 text-white'
    case 'luxury': return 'bg-amber-500 text-black tracking-widest'
    default: return 'bg-indigo-600 text-white'
  }
})

const navTextClasses = computed(() => {
  return siteData.config.theme === 'cyberpunk' || siteData.config.theme === 'luxury' ? 'text-white' : 'text-zinc-900'
})

const containerClasses = computed(() => {
    return ''
})

</script>
