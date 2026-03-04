<template>
  <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-500" 
       :class="{'py-6': !isScrolled, 'py-3': isScrolled}">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative group">
        <!-- Main Glass Container -->
        <div class="absolute inset-0 transition-all duration-500 rounded-3xl"
             :class="glassBackgroundClasses"></div>
        
        <div class="relative flex justify-between items-center h-16 px-6 sm:px-8">
          <!-- Logo Section -->
          <div class="flex-shrink-0 flex items-center">
            <a href="#" @click.prevent="changePage('home')" class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl flex items-center justify-center text-xl transition-all duration-500 group-hover:rotate-[360deg]"
                   :class="logoIconClasses">
                {{ themeLogo }}
              </div>
              <div class="flex flex-col">
                <span class="text-xl font-black leading-none tracking-tighter" :class="brandPrimaryClasses">
                  {{ data?.logo?.primary || siteData.navigation.logo.primary }}
                </span>
                <span class="text-[10px] font-bold opacity-50 tracking-[0.3em] uppercase mt-0.5" :class="brandSecondaryClasses">
                  {{ data?.logo?.secondary || siteData.navigation.logo.secondary }}
                </span>
              </div>
            </a>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-1 p-1.5 rounded-2xl bg-black/5 dark:bg-white/5 backdrop-blur-sm border border-black/5 dark:border-white/5">
            <button v-for="page in siteData.pages" 
                    :key="page.id"
                    @click="changePage(page.id)"
                    class="px-5 py-2 rounded-xl text-sm font-bold transition-all duration-500 relative group overflow-hidden"
                    :class="navItemClasses(page.id === siteData.currentPageId)">
              <span class="relative z-10 transition-colors duration-300" 
                    :class="page.id === siteData.currentPageId ? activeTextClass : 'group-hover:opacity-100 opacity-60'">
                {{ page.title }}
              </span>
              <!-- Active Highlight -->
              <div v-if="page.id === siteData.currentPageId" 
                   class="absolute inset-0 z-0 bg-white/20 dark:bg-black/20 shadow-inner"></div>
            </button>
          </div>

          <!-- CTA / Mobile Toggle -->
          <div class="flex items-center gap-4">
            <button class="hidden sm:block px-6 py-2.5 rounded-xl font-black text-sm transition-all duration-300 transform active:scale-95 shadow-xl hover:shadow-2xl"
                    :class="ctaClasses">
              {{ data?.ctaText || 'Contact Us' }}
            </button>
            
            <button @click="isMobileMenuOpen = !isMobileMenuOpen" 
                    class="md:hidden p-2.5 rounded-xl transition-all relative z-[60]"
                    :class="mobileToggleClasses">
              <div class="w-6 h-0.5 transition-all duration-300 mb-1.5" :class="[isMobileMenuOpen ? 'rotate-45 translate-y-2 bg-white' : 'bg-current']"></div>
              <div class="w-6 h-0.5 transition-all duration-200 mb-1.5" :class="[isMobileMenuOpen ? 'opacity-0' : 'bg-current']"></div>
              <div class="w-4 h-0.5 transition-all duration-300" :class="[isMobileMenuOpen ? '-rotate-45 -translate-y-2 w-6 bg-white' : 'bg-current opacity-70']"></div>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-500 ease-out"
      enter-from-class="opacity-0 translate-y-[-20px] scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-[-20px] scale-95"
    >
      <div v-if="isMobileMenuOpen" 
           class="absolute top-24 left-4 right-4 p-8 rounded-[32px] backdrop-blur-3xl border shadow-[0_32px_64px_rgba(0,0,0,0.2)]"
           :class="mobileMenuBackgroundClasses">
        <div class="flex flex-col gap-6 items-center text-center">
          <button v-for="page in siteData.pages" 
                  :key="page.id"
                  @click="handleMobileNavClick(page.id)"
                  class="text-3xl font-black transition-all"
                  :class="[page.id === siteData.currentPageId ? 'opacity-100 scale-110' : 'opacity-40 hover:opacity-100 hover:scale-105', mobileNavItemTextClass]">
            {{ page.title }}
          </button>
          <div class="w-full h-px bg-white/10 my-4"></div>
          <button class="w-full py-5 rounded-2xl font-black text-lg transition-all active:scale-95" :class="ctaClasses">
            {{ data?.ctaText || 'Get Started' }}
          </button>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { siteData, changePage } from '../../engine/siteData'

const props = defineProps({
  data: Object
})

const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const handleMobileNavClick = (id) => {
  changePage(id)
  isMobileMenuOpen.value = false
}

// Theme Logic
const themeLogo = computed(() => {
  switch (siteData.config.theme) {
    case 'minimal': return '⚪'
    case 'pop-art': return '🗯️'
    case 'cyberpunk': return '💠'
    case 'fresh': return '🍃'
    case 'luxury': return '💎'
    case 'yellow': return '☀️'
    default: return '✨'
  }
})

const glassBackgroundClasses = computed(() => {
  switch (siteData.config.theme) {
    case 'pop-art': return 'bg-white border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'
    case 'minimal': return 'bg-white/40 backdrop-blur-md border border-stone-200/50'
    case 'cyberpunk': return 'bg-slate-900/60 backdrop-blur-xl border border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.2)]'
    case 'fresh': return 'bg-emerald-50/60 backdrop-blur-md border border-emerald-200/50'
    case 'luxury': return 'bg-slate-950/70 backdrop-blur-2xl border border-amber-500/30'
    case 'yellow': return 'bg-amber-100/60 backdrop-blur-md border border-amber-900/10'
    default: return 'bg-white/70 backdrop-blur-md border border-white/50 shadow-xl'
  }
})

const logoIconClasses = computed(() => {
  switch (siteData.config.theme) {
    case 'pop-art': return 'bg-yellow-400 border-2 border-black rotate-6'
    case 'minimal': return 'bg-stone-100 text-stone-800'
    case 'cyberpunk': return 'bg-cyan-500 text-black shadow-[0_0_15px_cyan]'
    case 'fresh': return 'bg-emerald-500 text-white rounded-full'
    case 'luxury': return 'bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 shadow-lg'
    case 'yellow': return 'bg-amber-300 text-amber-900'
    default: return 'bg-indigo-600 text-white'
  }
})

const brandPrimaryClasses = computed(() => {
  switch (siteData.config.theme) {
    case 'pop-art': return 'text-black italic'
    case 'minimal': return 'text-stone-900 font-normal tracking-[.15em]'
    case 'cyberpunk': return 'text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]'
    case 'fresh': return 'text-emerald-900 font-serif italic'
    case 'luxury': return 'text-amber-500 tracking-[.25em]'
    case 'yellow': return 'text-amber-900'
    default: return 'text-gray-900'
  }
})

const brandSecondaryClasses = computed(() => {
  if (siteData.config.theme === 'luxury') return 'text-amber-200/40'
  return 'text-current opacity-40'
})

const navItemClasses = (isActive) => {
  const t = siteData.config.theme
  if (isActive) {
    if (t === 'pop-art') return 'bg-cyan-400 text-black border-2 border-black -rotate-2 scale-105 shadow-[4px_4px_0px_black]'
    if (t === 'minimal') return 'bg-stone-900 text-white'
    if (t === 'cyberpunk') return 'bg-cyan-500/20 text-cyan-400 border-b border-cyan-400 shadow-[0_4px_12px_rgba(6,182,212,0.3)]'
    if (t === 'fresh') return 'bg-emerald-600 text-white shadow-emerald-200'
    if (t === 'luxury') return 'bg-amber-500/10 text-amber-500 border border-amber-500/30'
    if (t === 'yellow') return 'bg-amber-400 text-amber-950 shadow-inner'
    return 'bg-indigo-600 text-white'
  }
  return 'hover:scale-105 active:scale-95'
}

const activeTextClass = computed(() => {
  const t = siteData.config.theme
  if (t === 'cyberpunk') return 'text-cyan-400'
  if (t === 'luxury') return 'text-amber-500'
  return 'text-current'
})

const ctaClasses = computed(() => {
  switch (siteData.config.theme) {
    case 'pop-art': return 'bg-pink-500 text-white border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 active:shadow-none active:translate-x-0 active:translate-y-0'
    case 'minimal': return 'bg-stone-900 text-white border border-stone-800'
    case 'cyberpunk': return 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black text-xs'
    case 'fresh': return 'bg-emerald-600 text-white hover:bg-emerald-700'
    case 'luxury': return 'bg-amber-500 text-slate-950 font-black uppercase'
    case 'yellow': return 'bg-amber-400 text-amber-950 border-2 border-amber-950'
    default: return 'bg-indigo-600 text-white'
  }
})

const mobileToggleClasses = computed(() => {
    const t = siteData.config.theme
    if (t === 'cyberpunk' || t === 'luxury') return 'text-white'
    return 'text-black'
})

const mobileMenuBackgroundClasses = computed(() => {
  switch (siteData.config.theme) {
    case 'pop-art': return 'bg-yellow-400 border-4 border-black'
    case 'minimal': return 'bg-stone-50 border-stone-200'
    case 'cyberpunk': return 'bg-slate-900/95 border-cyan-500/50'
    case 'fresh': return 'bg-emerald-50 border-emerald-200'
    case 'luxury': return 'bg-slate-950 border-amber-500/20'
    case 'yellow': return 'bg-amber-100 border-amber-900/10'
    default: return 'bg-white border-stone-200'
  }
})

const mobileNavItemTextClass = computed(() => {
    const t = siteData.config.theme
    if (t === 'cyberpunk' || t === 'luxury') return 'text-white'
    return 'text-black'
})

</script>
