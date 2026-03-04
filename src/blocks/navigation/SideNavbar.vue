<template>
  <nav class="fixed left-0 top-0 bottom-0 z-50 transition-all duration-700 hidden md:flex flex-col border-r group/nav overflow-hidden"
       :class="[navWidthClasses, containerThemeClasses]">
    
    <!-- Header/Logo -->
    <div class="p-8 flex items-center gap-4 transition-all duration-500 overflow-hidden whitespace-nowrap">
        <a href="#" @click.prevent="changePage('home')" class="flex items-center gap-4">
            <div class="w-10 h-10 rounded-2xl flex-shrink-0 flex items-center justify-center text-xl shadow-lg group-hover/nav:rotate-12 transition-transform duration-500"
                 :class="logoIconClasses">
                {{ themeLogo }}
            </div>
            <div class="flex flex-col transition-all duration-500 group-hover/nav:opacity-100 opacity-0 group-hover/nav:translate-x-0 -translate-x-4">
                <span class="text-xl font-black leading-none tracking-tighter" :class="brandPrimaryClasses">
                    {{ data?.logo?.primary || siteData.navigation.logo.primary }}
                </span>
                <span class="text-[10px] font-bold opacity-40 uppercase mt-1">
                    {{ data?.logo?.secondary || siteData.navigation.logo.secondary }}
                </span>
            </div>
        </a>
    </div>

    <!-- Navigation Items -->
    <div class="flex-grow py-12 px-4 space-y-4 overflow-hidden">
        <button v-for="page in siteData.pages" 
                :key="page.id"
                @click="changePage(page.id)"
                class="w-full flex items-center gap-6 p-4 rounded-2xl transition-all duration-500 relative group overflow-hidden"
                :class="navItemClasses(page.id === siteData.currentPageId)">
            
            <!-- Icon/Number -->
            <div class="w-10 flex-shrink-0 flex justify-center text-lg font-black opacity-30 group-hover:opacity-100 transition-opacity">
                0{{ siteData.pages.indexOf(page) + 1 }}
            </div>

            <!-- Page Title (Appears on Hover) -->
            <span class="font-bold text-sm uppercase tracking-widest whitespace-nowrap transition-all duration-500 group-hover/nav:opacity-100 opacity-0 group-hover/nav:translate-x-0 -translate-x-8">
                {{ page.title }}
            </span>

            <!-- Active Indicator -->
            <div v-if="page.id === siteData.currentPageId" 
                 class="absolute right-0 top-0 bottom-0 w-1 rounded-l-full"
                 :class="activeDocIndicatorClasses"></div>
        </button>
    </div>

    <!-- Bottom Action/Social -->
    <div class="p-8 border-t border-current opacity-30 mt-auto transition-all duration-500">
        <div class="flex flex-col gap-6 overflow-hidden">
            <button class="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-500 hover:scale-110 shadow-lg group-hover/nav:w-full group-hover/nav:px-6"
                    :class="ctaClasses">
                <span class="group-hover/nav:hidden">→</span>
                <span class="hidden group-hover/nav:block whitespace-nowrap font-black text-xs uppercase">{{ data?.ctaText || 'Get Started' }}</span>
            </button>
            <div class="flex gap-4 opacity-50 group-hover/nav:opacity-100 transition-all duration-500 group-hover/nav:translate-x-0 translate-x-2">
                <div v-for="i in 3" :key="i" class="w-1 h-1 rounded-full bg-current opacity-40"></div>
            </div>
        </div>
    </div>
  </nav>

  <!-- Mobile View (Simple Pill Top) -->
  <nav class="md:hidden fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] h-16 flex items-center justify-between px-6 rounded-3xl border shadow-2xl backdrop-blur-xl"
       :class="mobileContainerClasses">
      <div class="font-black text-lg tracking-tighter" :class="brandPrimaryClasses">
           {{ data?.logo?.primary || siteData.navigation.logo.primary }}
      </div>
      <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="w-10 h-10 flex items-center justify-center rounded-xl bg-current/10">
          <span class="text-xl">☰</span>
      </button>

      <!-- Mobile Menu Modal -->
      <transition
        enter-active-class="transition duration-500 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition duration-300 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div v-if="isMobileMenuOpen" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-center justify-center p-6">
            <div class="w-full max-w-sm p-12 rounded-[3rem] shadow-2xl border" :class="mobileModalClasses">
                <div class="flex flex-col gap-8 text-center">
                    <button v-for="page in siteData.pages" 
                            :key="page.id"
                            @click="handleMobileNav(page.id)"
                            class="text-3xl font-black uppercase tracking-tighter hover:scale-110 transition-transform"
                            :class="page.id === siteData.currentPageId ? 'opacity-100' : 'opacity-40'">
                        {{ page.title }}
                    </button>
                    <button @click="isMobileMenuOpen = false" class="mt-8 opacity-40 text-xs font-black uppercase tracking-[.3em]">Close</button>
                </div>
            </div>
        </div>
      </transition>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue'
import { siteData, changePage } from '../../engine/siteData'

const props = defineProps({
  data: Object
})

const isMobileMenuOpen = ref(false)

const handleMobileNav = (id) => {
    changePage(id)
    isMobileMenuOpen.value = false
}

// Theme Config
const themeLogo = computed(() => {
  switch (siteData.config.theme) {
    case 'minimal': return '⛩️'
    case 'pop-art': return '🎨'
    case 'cyberpunk': return '⚡'
    case 'fresh': return '🌿'
    case 'luxury': return '💍'
    case 'yellow': return '〽️'
    default: return '◈'
  }
})

const navWidthClasses = 'w-24 hover:w-80'

const containerThemeClasses = computed(() => {
  switch (siteData.config.theme) {
    case 'pop-art': return 'bg-white border-black border-r-4 text-black'
    case 'minimal': return 'bg-stone-50 border-stone-200 text-stone-900'
    case 'cyberpunk': return 'bg-black border-cyan-500/30 text-white'
    case 'fresh': return 'bg-emerald-50 border-emerald-100 text-emerald-900'
    case 'luxury': return 'bg-slate-950 border-amber-500/20 text-amber-100'
    case 'yellow': return 'bg-amber-50 border-amber-900/10 text-amber-950'
    default: return 'bg-white border-gray-100 text-gray-900'
  }
})

const logoIconClasses = computed(() => {
  const t = siteData.config.theme
  if (t === 'pop-art') return 'bg-yellow-400 border-2 border-black rotate-6'
  if (t === 'cyberpunk') return 'bg-cyan-500 text-black shadow-[0_0_15px_cyan]'
  if (t === 'fresh') return 'bg-emerald-500 text-white'
  if (t === 'luxury') return 'bg-amber-600 shadow-[0_0_10px_rgba(217,119,6,0.5)]'
  if (t === 'minimal') return 'bg-stone-800 text-white'
  return 'bg-zinc-900 text-white'
})

const brandPrimaryClasses = computed(() => {
  const t = siteData.config.theme
  if (t === 'pop-art') return 'italic tracking-tighter'
  if (t === 'cyberpunk') return 'text-cyan-400 drop-shadow-[0_2px_4px_cyan]'
  if (t === 'luxury') return 'text-amber-500 tracking-[.4em] uppercase'
  if (t === 'fresh') return 'text-emerald-800 font-serif'
  return ''
})

const navItemClasses = (isActive) => {
    if (isActive) {
        const t = siteData.config.theme
        if (t === 'pop-art') return 'bg-yellow-300 border-2 border-black shadow-[4px_4px_0px_black]'
        if (t === 'cyberpunk') return 'bg-cyan-500/10 text-cyan-400'
        if (t === 'minimal') return 'bg-stone-200 text-stone-900'
        if (t === 'luxury') return 'bg-amber-500/5 text-amber-500'
        return 'bg-zinc-100'
    }
    return 'hover:translate-x-2'
}

const activeDocIndicatorClasses = computed(() => {
    const t = siteData.config.theme
    if (t === 'pop-art') return 'bg-pink-500'
    if (t === 'cyberpunk') return 'bg-cyan-500 shadow-[0_0_10px_cyan]'
    if (t === 'fresh') return 'bg-emerald-500'
    if (t === 'luxury') return 'bg-amber-500'
    return 'bg-zinc-900'
})

const ctaClasses = computed(() => {
  switch (siteData.config.theme) {
    case 'pop-art': return 'bg-pink-500 text-white border-2 border-black shadow-[4px_4px_0_black]'
    case 'minimal': return 'bg-stone-900 text-white'
    case 'cyberpunk': return 'bg-white text-black shadow-[0_0_15px_white]'
    case 'fresh': return 'bg-emerald-600 text-white shadow-lg shadow-emerald-200'
    case 'luxury': return 'bg-gradient-to-r from-amber-400 to-amber-600 text-black'
    case 'yellow': return 'bg-amber-950 text-amber-100'
    default: return 'bg-zinc-900 text-white'
  }
})

const mobileContainerClasses = computed(() => {
    return containerThemeClasses.value + ' border opacity-100'
})

const mobileModalClasses = computed(() => {
    return containerThemeClasses.value + ' bg-opacity-90 backdrop-blur-2xl'
})

</script>
