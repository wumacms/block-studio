<template>
  <nav class="w-full transition-all duration-500 z-50 shadow-sm" 
       :class="[themeClasses, config.sticky ? 'sticky top-0' : 'relative']">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Brand/Logo Area -->
        <div class="flex-shrink-0 flex items-center">
          <a href="#" @click.prevent="changePage('home')" class="group flex items-center gap-3">
             <div class="w-10 h-10 rounded-lg flex items-center justify-center text-2xl transition-transform group-hover:scale-110"
                  :class="logoIconClasses">
               {{ siteData.config.theme === 'minimal' ? '⚪' : '⚡' }}
             </div>
             <div class="flex flex-col">
               <span class="text-xl font-black leading-none tracking-tighter" :class="brandPrimaryClasses">
                 {{ siteData.navigation.logo.primary }}
               </span>
               <span class="text-xs font-bold opacity-60 tracking-widest" :class="brandSecondaryClasses">
                 {{ siteData.navigation.logo.secondary }}
               </span>
             </div>
          </a>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-1">
          <button v-for="page in siteData.pages" 
             :key="page.id"
             @click="changePage(page.id)"
             class="px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 relative group overflow-hidden"
             :class="navItemClasses(page.id === siteData.currentPageId)">
            <span class="relative z-10">{{ page.title }}</span>
            <!-- Active Indicator for Minimal -->
            <div v-if="siteData.config.theme === 'minimal' && page.id === siteData.currentPageId" 
                 class="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-stone-800 rounded-full"></div>
          </button>
        </div>

        <!-- CTA / Action Area -->
        <div class="flex items-center gap-4">
          <button class="hidden sm:block px-6 py-2.5 rounded-full font-black text-sm transition-all duration-300 transform hover:-translate-y-0.5"
                  :class="ctaClasses">
            开始尝试
          </button>
          
          <!-- Mobile Menu Toggle -->
          <button @click="isMobileMenuOpen = !isMobileMenuOpen" 
                  class="md:hidden p-2 transition-colors relative z-[60]"
                  :class="isMobileMenuOpen ? 'text-white' : 'text-current'">
            <div class="w-6 h-0.5 bg-current mb-1.5 transition-all" :class="{'rotate-45 translate-y-2': isMobileMenuOpen}"></div>
            <div class="w-6 h-0.5 bg-current mb-1.5 transition-all" :class="{'opacity-0': isMobileMenuOpen}"></div>
            <div class="w-4 h-0.5 bg-current transition-all" :class="{'-rotate-45 -translate-y-2 w-6': isMobileMenuOpen}"></div>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation Menu Dropdown -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="-translate-y-full opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="-translate-y-full opacity-0"
    >
      <div v-if="isMobileMenuOpen" 
           class="fixed inset-0 z-50 md:hidden bg-black/95 flex flex-col items-center justify-center p-8">
        <div class="space-y-8 text-center">
          <button v-for="page in siteData.pages" 
                  :key="page.id"
                  @click="handleMobileNavClick(page.id)"
                  class="block text-3xl font-black uppercase text-white/60 hover:text-white transition-colors"
                  :class="{'text-white !opacity-100': page.id === siteData.currentPageId}">
            {{ page.title }}
          </button>
          <div class="pt-8">
            <button class="px-10 py-5 rounded-full font-black text-lg" :class="ctaClasses">
              立即咨询
            </button>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue'
import { siteData, changePage } from '../../engine/siteData'

const isMobileMenuOpen = ref(false)

const handleMobileNavClick = (id) => {
  changePage(id)
  isMobileMenuOpen.value = false
}

const themeClasses = computed(() => {
  switch (siteData.config.theme) {
    case 'pop-art': return 'bg-white border-b-4 border-black'
    case 'minimal': return 'bg-stone-50/80 backdrop-blur-md border-b border-stone-200'
    case 'cyberpunk': return 'bg-slate-900/90 backdrop-blur-md border-b border-cyan-500/50 text-white'
    case 'fresh': return 'bg-emerald-50/90 backdrop-blur-md border-b border-emerald-100'
    default: return 'bg-white border-b border-gray-100'
  }
})

const logoIconClasses = computed(() => {
  switch (siteData.config.theme) {
    case 'pop-art': return 'bg-yellow-400 border-2 border-black rotate-3'
    case 'minimal': return 'bg-transparent text-stone-800'
    case 'cyberpunk': return 'bg-cyan-500 text-black shadow-[0_0_15px_rgba(6,182,212,0.8)]'
    case 'fresh': return 'bg-emerald-500 text-white rounded-full'
    case 'luxury': return 'bg-amber-500 text-slate-900 border border-amber-600 shadow-lg'
    case 'yellow': return 'bg-amber-300 text-amber-900 border-2 border-amber-900'
    default: return 'bg-blue-600 text-white'
  }
})

const brandPrimaryClasses = computed(() => {
  if (siteData.config.theme === 'pop-art') return 'text-pink-600 italic group-hover:text-cyan-500 transition-colors'
  if (siteData.config.theme === 'minimal') return 'text-stone-900 font-light tracking-[0.2em]'
  if (siteData.config.theme === 'cyberpunk') return 'text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]'
  if (siteData.config.theme === 'fresh') return 'text-emerald-700 font-serif italic'
  if (siteData.config.theme === 'luxury') return 'text-amber-500 tracking-[0.3em]'
  return 'text-gray-900'
})

const brandSecondaryClasses = computed(() => {
  if (siteData.config.theme === 'minimal') return 'uppercase'
  return ''
})

const navItemClasses = (isActive) => {
  const theme = siteData.config.theme
  if (theme === 'pop-art') {
    return isActive 
      ? 'bg-cyan-400 text-black border-2 border-black -rotate-2 scale-105' 
      : 'text-black hover:bg-yellow-300 hover:scale-105'
  }
  if (theme === 'minimal') {
    return isActive 
      ? 'text-stone-950 font-medium' 
      : 'text-stone-500 hover:text-stone-900'
  }
  if (theme === 'cyberpunk') {
    return isActive 
      ? 'text-cyan-400 bg-cyan-950/30' 
      : 'text-slate-400 hover:text-cyan-300'
  }
  if (theme === 'fresh') {
    return isActive 
      ? 'text-emerald-700 border-b-2 border-emerald-500 rounded-none' 
      : 'text-emerald-600/70 hover:text-emerald-800'
  }
  if (theme === 'luxury') {
    return isActive 
      ? 'text-amber-500 border border-amber-500/50' 
      : 'text-amber-100/50 hover:text-amber-400'
  }
  if (theme === 'yellow') {
    return isActive 
      ? 'text-amber-900 bg-amber-300' 
      : 'text-amber-800 hover:bg-amber-200'
  }
  return isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
}

const ctaClasses = computed(() => {
  switch (siteData.config.theme) {
    case 'pop-art': return 'bg-pink-500 text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
    case 'minimal': return 'bg-stone-900 text-white rounded-none border border-stone-900'
    case 'cyberpunk': return 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-none shadow-[0_0_10px_rgba(6,182,212,0.4)]'
    case 'fresh': return 'bg-emerald-600 text-white shadow-lg shadow-emerald-200'
    case 'luxury': return 'bg-amber-500 text-slate-900'
    case 'yellow': return 'bg-amber-400 text-amber-950 border-2 border-amber-950'
    default: return 'bg-blue-600 text-white hover:bg-blue-700'
  }
})

const config = computed(() => ({
  sticky: true
}))
</script>
