<template>
  <nav class="w-full border-b transition-all duration-500 overflow-hidden" :class="themeClasses">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row">
      <!-- Sidebar Left (Brand & Top Utility) -->
      <div class="p-6 md:p-8 md:w-64 border-b md:border-b-0 md:border-r border-current opacity-30 flex flex-row md:flex-col justify-between items-center md:items-start" :class="sidebarBorderClasses">
        <a href="#" @click.prevent="changePage('home')" class="group flex flex-col">
            <span class="text-4xl font-black leading-none mb-1 group-hover:scale-110 transition-transform origin-left" :class="brandTitleClasses">
                {{ siteData.navigation.logo.primary }}
            </span>
            <span class="text-[10px] font-bold tracking-[0.4em] uppercase opacity-60">Creative Studio</span>
        </a>
        
        <div class="hidden md:block mt-auto pt-8 border-t border-current opacity-20 w-full mb-4"></div>
        <div class="flex gap-3">
             <div v-for="i in 3" :key="i" class="w-2 h-2 rounded-full bg-current opacity-20"></div>
        </div>
      </div>

      <!-- Main Navigation Area -->
      <div class="flex-grow p-4 md:p-12">
        <div class="flex flex-col h-full">
            <div class="mb-12 hidden md:block">
                <p class="text-[10px] uppercase tracking-widest font-black mb-4 opacity-40">Main Directory</p>
                <div class="flex flex-wrap gap-x-12 gap-y-6">
                    <button v-for="page in siteData.pages" 
                            :key="page.id"
                            @click="changePage(page.id)"
                            class="group relative flex flex-col items-start"
                            :class="navItemClasses(page.id === siteData.currentPageId)">
                        <span class="text-5xl md:text-7xl font-black mb-2 transition-all group-hover:translate-x-4" :class="navTextClasses(page.id === siteData.currentPageId)">
                            0{{ siteData.pages.indexOf(page) + 1 }}.
                        </span>
                        <span class="text-sm font-bold uppercase tracking-widest pl-2">
                            {{ page.title }}
                        </span>
                        <!-- Hover Underline -->
                        <div class="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-0 group-hover:h-full transition-all bg-current opacity-20 hidden md:block"></div>
                    </button>
                </div>
            </div>

            <!-- Mobile Simple List -->
            <div class="md:hidden grid grid-cols-2 gap-4">
                 <button v-for="page in siteData.pages" 
                        :key="page.id"
                        @click="changePage(page.id)"
                        class="p-4 border rounded-xl font-bold flex flex-col"
                        :class="mobileItemClasses(page.id === siteData.currentPageId)">
                    <span class="text-xs opacity-40 mb-1">0{{ siteData.pages.indexOf(page) + 1 }}</span>
                    {{ page.title }}
                </button>
            </div>

            <!-- Footer-like utility in Nav -->
            <div class="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-6" :class="sidebarBorderClasses">
                <div class="flex gap-8 text-[10px] font-black uppercase tracking-tighter opacity-40">
                    <a href="#" class="hover:opacity-100 italic transition-opacity">Work with us</a>
                    <a href="#" class="hover:opacity-100 italic transition-opacity">Photography</a>
                    <a href="#" class="hover:opacity-100 italic transition-opacity">Contact</a>
                </div>
                <button class="px-8 py-4 rounded-xl font-black text-xs transition-all hover:scale-105 active:scale-95" :class="ctaClasses">
                    BOOK A DISCOVERY CALL
                </button>
            </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { siteData, changePage } from '../../engine/siteData'

const themeClasses = computed(() => {
  switch (siteData.config.theme) {
    case 'pop-art': return 'bg-white text-black border-black'
    case 'minimal': return 'bg-stone-50 text-stone-900 border-stone-200'
    case 'cyberpunk': return 'bg-black text-white border-cyan-500'
    case 'fresh': return 'bg-[#f0f9f4] text-emerald-900 border-emerald-200'
    case 'luxury': return 'bg-slate-950 text-amber-500 border-amber-500/30'
    case 'yellow': return 'bg-amber-50 text-amber-950 border-amber-900'
    default: return 'bg-white text-gray-900 border-gray-100'
  }
})

const sidebarBorderClasses = computed(() => {
    return 'border-current'
})

const brandTitleClasses = computed(() => {
    const t = siteData.config.theme
    if (t === 'pop-art') return 'italic text-pink-600'
    if (t === 'fresh') return 'font-serif text-emerald-700'
    if (t === 'cyberpunk') return 'drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]'
    return ''
})

const navItemClasses = (isActive) => {
    return isActive ? 'opacity-100' : 'opacity-20 hover:opacity-60 grayscale'
}

const navTextClasses = (isActive) => {
    const t = siteData.config.theme
    if (!isActive) return ''
    if (t === 'pop-art') return 'italic text-yellow-400 drop-shadow-[4px_4px_0_black]'
    if (t === 'cyberpunk') return 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_20px_rgba(6,182,212,0.5)]'
    if (t === 'fresh') return 'text-emerald-500 font-serif'
    if (t === 'luxury') return 'text-amber-500 tracking-tighter'
    if (t === 'minimal') return 'text-stone-300'
    if (t === 'yellow') return 'text-amber-600'
    return ''
}

const mobileItemClasses = (isActive) => {
    const t = siteData.config.theme
    if (isActive) {
        if (t === 'pop-art') return 'bg-cyan-400 border-2 border-black -rotate-1 shadow-[4px_4px_0_black]'
        if (t === 'cyberpunk') return 'bg-cyan-500/20 border-cyan-500 text-cyan-400'
        return 'bg-current text-white border-transparent inverse'
    }
    return 'border-current opacity-40'
}

const ctaClasses = computed(() => {
  switch (siteData.config.theme) {
    case 'pop-art': return 'bg-cyan-400 text-black border-2 border-black shadow-[6px_6px_0_black]'
    case 'minimal': return 'bg-zinc-900 text-white'
    case 'cyberpunk': return 'bg-white text-black shadow-[0_0_20px_white]'
    case 'fresh': return 'bg-emerald-600 text-white'
    case 'luxury': return 'bg-amber-500 text-black font-black uppercase'
    case 'yellow': return 'bg-amber-950 text-amber-50 shadow-lg'
    default: return 'bg-black text-white'
  }
})

</script>
