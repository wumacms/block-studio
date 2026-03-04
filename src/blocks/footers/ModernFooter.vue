<template>
  <footer class="w-full py-12 md:py-24 px-6 overflow-hidden relative" :class="themeClasses">
    <!-- Abstract Background Element -->
    <div class="absolute -bottom-20 -right-20 w-80 h-80 rounded-full blur-[100px] opacity-20" :class="bgDecorClasses"></div>
    
    <div class="max-w-7xl mx-auto relative z-10">
      <div class="flex flex-col items-center text-center mb-20">
        <a href="#" @click.prevent="changePage('home')" class="mb-8 scale-150 block">
            <span class="text-3xl font-black tracking-widest uppercase" :class="brandClasses">
                {{ siteData.navigation.logo.primary }}
            </span>
        </a>
        <h2 class="text-4xl md:text-6xl font-black mb-8 max-w-2xl leading-tight" :class="headingClasses">
            Ready to gravity-defying your brand?
        </h2>
        <div class="flex flex-wrap justify-center gap-4">
            <button class="px-10 py-5 rounded-full font-black text-lg transition-all hover:scale-105 active:scale-95 shadow-2xl"
                    :class="primaryBtnClasses">
                Start a Project
            </button>
            <button class="px-10 py-5 rounded-full font-bold text-lg border-2 transition-all hover:bg-current/5"
                    :class="secondaryBtnClasses">
                View Showcase
            </button>
        </div>
      </div>

      <!-- Links Grid -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-12 pt-20 border-t" :class="topBorderClasses">
        <div class="col-span-2 lg:col-span-1">
            <p class="text-xs font-black uppercase tracking-[0.3em] mb-8 opacity-40">Contact Us</p>
            <div class="space-y-2 text-xl font-bold">
                <p>hello@antigravity.io</p>
                <p>+1 (555) 000-1234</p>
            </div>
            <div class="mt-8 flex gap-4">
                <div v-for="i in 4" :key="i" class="w-10 h-10 rounded-xl border border-current opacity-20 flex items-center justify-center hover:opacity-100 transition-opacity cursor-pointer">
                    <span class="text-[10px] font-black">TW</span>
                </div>
            </div>
        </div>

        <div>
            <p class="text-xs font-black uppercase tracking-[0.3em] mb-8 opacity-40">Studio</p>
            <ul class="space-y-4 font-bold">
                <li v-for="page in siteData.pages" :key="page.id">
                    <a href="#" @click.prevent="changePage(page.id)" class="hover:underline">{{ page.title }}</a>
                </li>
            </ul>
        </div>

        <div>
            <p class="text-xs font-black uppercase tracking-[0.3em] mb-8 opacity-40">Locations</p>
            <ul class="space-y-4 font-bold opacity-60">
                <li>Tokyo / Shibuya</li>
                <li>London / Soho</li>
                <li>New York / BK</li>
            </ul>
        </div>

        <div class="col-span-2 lg:col-span-1">
            <p class="text-xs font-black uppercase tracking-[0.3em] mb-8 opacity-40">Newsletter</p>
            <div class="flex items-center border-b-2 py-2 group focus-within:border-current transition-colors" :class="topBorderClasses">
                <input type="text" placeholder="Email Address" class="bg-transparent flex-grow outline-none font-bold text-xl placeholder:opacity-30" />
                <button class="text-2xl transition-transform group-hover:translate-x-2">→</button>
            </div>
            <p class="mt-4 text-[10px] opacity-40 font-bold uppercase italic">No spam. Only high-quality curation.</p>
        </div>
      </div>

      <div class="mt-32 pt-12 flex flex-col md:flex-row justify-between items-end gap-12">
        <div class="text-[120px] md:text-[200px] font-black leading-none tracking-tighter opacity-5 select-none pointer-events-none">
            AG.STUDIO
        </div>
        <div class="pb-4 flex flex-col items-end text-right gap-2">
            <p class="text-[10px] font-black opacity-30 tracking-widest uppercase italic">Made with Love in the Digital Void</p>
            <p class="text-xs font-bold opacity-60">© 2026 AntiGravity Digital Labs. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { siteData, changePage } from '../../engine/siteData'

const themeClasses = computed(() => {
  switch (siteData.config.theme) {
    case 'pop-art': return 'bg-[#FFDE03] text-black'
    case 'minimal': return 'bg-stone-900 text-stone-100'
    case 'cyberpunk': return 'bg-black text-white'
    case 'fresh': return 'bg-[#1e3a2f] text-emerald-100'
    case 'luxury': return 'bg-slate-950 text-amber-50'
    case 'yellow': return 'bg-amber-300 text-amber-950'
    default: return 'bg-zinc-900 text-white'
  }
})

const brandClasses = computed(() => {
    const t = siteData.config.theme
    if (t === 'pop-art') return 'italic underline decoration-pink-500'
    if (t === 'cyberpunk') return 'text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)] font-black'
    if (t === 'luxury') return 'text-amber-500 font-black tracking-[0.2em]'
    return ''
})

const headingClasses = computed(() => {
    const t = siteData.config.theme
    if (t === 'pop-art') return 'font-black italic drop-shadow-[4px_4px_0_white]'
    if (t === 'cyberpunk') return 'text-cyan-400 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]'
    if (t === 'luxury') return 'text-amber-500'
    if (t === 'fresh') return 'font-serif'
    return ''
})

const primaryBtnClasses = computed(() => {
  switch (siteData.config.theme) {
    case 'pop-art': return 'bg-pink-500 text-white border-4 border-black shadow-[10px_10px_0_0_black]'
    case 'minimal': return 'bg-white text-black'
    case 'cyberpunk': return 'bg-cyan-500 text-black shadow-[0_0_30px_rgba(6,182,212,0.5)]'
    case 'fresh': return 'bg-emerald-500 text-[#1e3a2f]'
    case 'luxury': return 'bg-amber-500 text-black'
    case 'yellow': return 'bg-amber-950 text-amber-100'
    default: return 'bg-white text-black'
  }
})

const secondaryBtnClasses = computed(() => {
  return 'border-current'
})

const topBorderClasses = computed(() => {
    return 'border-current opacity-20'
})

const bgDecorClasses = computed(() => {
    const t = siteData.config.theme
    if (t === 'pop-art') return 'bg-pink-400'
    if (t === 'cyberpunk') return 'bg-blue-600'
    if (t === 'fresh') return 'bg-emerald-400'
    if (t === 'luxury') return 'bg-amber-900'
    return 'bg-white'
})

</script>
