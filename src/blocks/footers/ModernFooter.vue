<template>
  <footer class="w-full py-12 md:py-24 px-6 overflow-hidden relative" :class="themeClasses">
    <div class="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full blur-[120px] opacity-30 transition-all duration-1000" :class="bgDecorClasses"></div>
    <div class="absolute -top-40 -left-40 w-[400px] h-[400px] rounded-full blur-[100px] opacity-10 transition-all duration-1000" :class="bgDecorClasses"></div>
    
    <div class="max-w-7xl mx-auto relative z-10">
      <div class="flex flex-col items-center text-center mb-20">
        <a href="#" @click.prevent="changePage('home')" class="mb-8 scale-150 block">
            <span class="text-3xl font-black tracking-widest uppercase" :class="brandClasses">
                {{ siteData.navigation.logo.primary }}
            </span>
        </a>
        <h2 class="text-4xl md:text-6xl font-black mb-8 max-w-2xl leading-tight" :class="headingClasses">
            {{ data?.ctaTitle || 'Ready to gravity-defying your brand?' }}
        </h2>
        <div class="flex flex-wrap justify-center gap-4">
            <button class="px-10 py-5 rounded-full font-black text-lg transition-all hover:scale-105 active:scale-95 shadow-2xl"
                    :class="primaryBtnClasses">
                {{ data?.primaryCtaText || 'Start a Project' }}
            </button>
            <button class="px-10 py-5 rounded-full font-bold text-lg border-2 transition-all hover:bg-current/5"
                    :class="secondaryBtnClasses">
                {{ data?.secondaryCtaText || 'View Showcase' }}
            </button>
        </div>
      </div>

      <!-- Links Grid -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-12 pt-20 border-t" :class="topBorderClasses">
        <div class="col-span-2 lg:col-span-1">
            <p class="text-xs font-black uppercase tracking-[0.3em] mb-8" :class="labelClasses">
                {{ data?.contactTitle || 'Contact Us' }}
            </p>
            <div class="space-y-2 text-xl font-bold">
                <p>{{ data?.email || 'hello@antigravity.io' }}</p>
                <p>{{ data?.phone || '+1 (555) 000-1234' }}</p>
            </div>
            <div class="mt-8 flex gap-4">
                <template v-if="data?.socialLinks">
                    <div v-for="link in data.socialLinks" :key="link.label" class="w-10 h-10 rounded-xl border border-current opacity-20 flex items-center justify-center hover:opacity-100 transition-opacity cursor-pointer">
                        <span class="text-[10px] font-black">{{ link.label }}</span>
                    </div>
                </template>
            </div>
        </div>

        <div>
            <p class="text-xs font-black uppercase tracking-[0.3em] mb-8" :class="labelClasses">
                {{ data?.studioTitle || 'Studio' }}
            </p>
            <ul class="space-y-4 font-bold">
                <li v-for="page in siteData.pages" :key="page.id">
                    <a href="#" @click.prevent="changePage(page.id)" class="hover:underline">{{ page.title }}</a>
                </li>
            </ul>
        </div>

        <div>
            <p class="text-xs font-black uppercase tracking-[0.3em] mb-8" :class="labelClasses">
                {{ data?.locationsTitle || 'Locations' }}
            </p>
            <ul class="space-y-4 font-bold" :class="dimTextClasses">
                <li v-for="loc in data?.locations" :key="loc">{{ loc }}</li>
            </ul>
        </div>

        <div class="col-span-2 lg:col-span-1">
            <p class="text-xs font-black uppercase tracking-[0.3em] mb-8" :class="labelClasses">
                {{ data?.newsletterTitle || 'Newsletter' }}
            </p>
            <div class="flex items-center border-b-2 py-2 group focus-within:border-current transition-colors" :class="topBorderClasses">
                <input type="text" :placeholder="data?.newsletterPlaceholder || 'Email Address'" class="bg-transparent flex-grow outline-none font-bold text-xl placeholder:opacity-30" />
                <button class="text-2xl transition-transform group-hover:translate-x-2">→</button>
            </div>
            <p class="mt-4 text-[10px] font-bold uppercase italic" :class="dimTextClasses">
                {{ data?.newsletterSubtitle || 'No spam. Only high-quality curation.' }}
            </p>
        </div>
      </div>

      <div class="mt-32 pt-12 flex flex-col md:flex-row justify-between items-end gap-12">
        <div class="text-[120px] md:text-[200px] font-black leading-none tracking-tighter opacity-10 select-none pointer-events-none">
            {{ data?.bottomLogo || 'AG.STUDIO' }}
        </div>
        <div class="pb-4 flex flex-col items-end text-right gap-2">
            <p class="text-[10px] font-black tracking-widest uppercase italic" :class="dimTextClasses">
                {{ data?.bottomTagline || 'Made with Love' }}
            </p>
            <p class="text-xs font-bold" :class="dimTextClasses">© 2026 {{ siteData.config.siteName }}. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { siteData, changePage } from '../../engine/siteData'

const props = defineProps({
  data: Object
})

const themeClasses = computed(() => {
  switch (siteData.config.theme) {
    case 'pop-art': return 'bg-[#FFDE03] text-black font-sans selection:bg-pink-500 selection:text-white'
    case 'minimal': return 'bg-stone-950 text-white selection:bg-stone-100 selection:text-black'
    case 'cyberpunk': return 'bg-[#050505] text-white selection:bg-cyan-500 selection:text-black'
    case 'fresh': return 'bg-[#0f241d] text-emerald-50 selection:bg-emerald-400 selection:text-black'
    case 'luxury': return 'bg-[#0a0a0a] text-amber-50 selection:bg-amber-500 selection:text-black'
    case 'yellow': return 'bg-amber-300 text-amber-950 selection:bg-amber-950 selection:text-amber-50'
    default: return 'bg-zinc-950 text-white'
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
    switch (t) {
        case 'pop-art': return 'font-black italic drop-shadow-[6px_6px_0_#ec4899] uppercase'
        case 'cyberpunk': return 'text-cyan-400 drop-shadow-[0_0_20px_rgba(6,182,212,0.4)] uppercase tracking-tighter'
        case 'luxury': return 'text-amber-500 font-serif italic tracking-tight'
        case 'fresh': return 'font-serif text-white italic underline decoration-emerald-500/50 decoration-8 underline-offset-[-2px]'
        case 'minimal': return 'text-white font-extralight tracking-[-0.05em] leading-[0.9]'
        case 'yellow': return 'text-amber-950 font-black'
        default: return 'text-white'
    }
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
    if (t === 'yellow') return 'bg-amber-600'
    return 'bg-white'
})

const labelClasses = computed(() => {
    const t = siteData.config.theme
    switch (t) {
        case 'pop-art': return 'text-pink-600 font-black'
        case 'minimal': return 'text-stone-500 font-medium'
        case 'cyberpunk': return 'text-cyan-500/80 font-mono tracking-widest'
        case 'fresh': return 'text-emerald-400/80 font-bold'
        case 'luxury': return 'text-amber-600 font-serif italic'
        case 'yellow': return 'text-amber-900/60 font-bold'
        default: return 'text-zinc-500 uppercase'
    }
})

const dimTextClasses = computed(() => {
    const t = siteData.config.theme
    switch (t) {
        case 'pop-art': return 'text-black/80 font-medium'
        case 'minimal': return 'text-stone-400'
        case 'cyberpunk': return 'text-slate-400'
        case 'fresh': return 'text-emerald-200/60'
        case 'luxury': return 'text-amber-200/50 hover:text-amber-100 transition-colors'
        case 'yellow': return 'text-amber-900/70'
        default: return 'text-zinc-400'
    }
})

</script>
