<template>
  <footer class="w-full py-16 px-4 transition-all duration-700" :class="containerClasses">
    <div class="max-w-4xl mx-auto">
        <div class="p-4 sm:p-2 rounded-[3.5rem] border backdrop-blur-3xl shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4"
             :class="pillClasses">
            <!-- Brand -->
            <div class="flex items-center gap-4 pl-8 pr-4 py-4 sm:py-0">
                <div class="w-10 h-10 rounded-full flex items-center justify-center font-black shadow-lg" :class="logoClasses">
                    {{ siteData.navigation.logo.primary.charAt(0) }}
                </div>
                <div class="flex flex-col">
                    <span class="text-sm font-black tracking-tighter">{{ siteData.navigation.logo.primary }}</span>
                    <span class="text-[10px] font-bold opacity-40 uppercase">{{ siteData.navigation.logo.secondary }}</span>
                </div>
            </div>

            <!-- Pages -->
            <nav class="flex items-center gap-2 bg-black/5 dark:bg-white/5 p-1 rounded-full overflow-x-auto max-w-full no-scrollbar">
                <button v-for="page in siteData.pages" :key="page.id"
                        @click="changePage(page.id)"
                        class="px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap"
                        :class="navItemClasses(page.id === siteData.currentPageId)">
                    {{ page.title }}
                </button>
            </nav>

            <!-- Copyright/Action -->
            <div class="flex items-center gap-2 pr-2 py-4 sm:py-0">
                <div class="hidden md:block pr-4 text-right">
                    <p class="text-[10px] font-bold opacity-40">© 2026</p>
                    <p class="text-[10px] font-black uppercase italic">{{ siteData.config.siteName }}</p>
                </div>
                <button class="px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest transition-all active:scale-95 shadow-xl"
                        :class="ctaClasses">
                    {{ data?.newsletterButton || 'Join' }}
                </button>
            </div>
        </div>

        <!-- External Social (Small Floating Dots) -->
        <div class="flex justify-center gap-6 mt-12">
            <template v-if="data?.socialLinks">
                <a v-for="link in data.socialLinks" :key="link.label" :href="link.link"
                   class="group flex flex-col items-center gap-2">
                    <div class="w-1.5 h-1.5 rounded-full transition-all group-hover:scale-[3] group-hover:bg-current" :class="dotClasses"></div>
                    <span class="text-[8px] font-black uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity">
                        {{ link.label }}
                    </span>
                </a>
            </template>
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

const containerClasses = computed(() => {
    switch (siteData.config.theme) {
        case 'minimal': return 'bg-white'
        case 'cyberpunk': return 'bg-black'
        case 'fresh': return 'bg-[#f0f9f4]'
        case 'luxury': return 'bg-[#0a0a0a]'
        case 'pop-art': return 'bg-pink-50'
        default: return 'bg-gray-50'
    }
})

const pillClasses = computed(() => {
  switch (siteData.config.theme) {
    case 'pop-art': return 'bg-white border-black border-4 shadow-[8px_8px_0px_black] text-black'
    case 'minimal': return 'bg-stone-50 border-stone-200 text-stone-900 shadow-stone-200/50'
    case 'cyberpunk': return 'bg-zinc-900 border-cyan-500/50 text-white shadow-cyan-500/20'
    case 'fresh': return 'bg-emerald-50 border-emerald-100 text-emerald-900 shadow-emerald-100'
    case 'luxury': return 'bg-slate-900 border-amber-500/30 text-amber-50 shadow-amber-500/10'
    case 'yellow': return 'bg-amber-50 border-amber-900/10 text-amber-950'
    default: return 'bg-white border-gray-100 text-gray-900 shadow-xl'
  }
})

const logoClasses = computed(() => {
  const t = siteData.config.theme
  if (t === 'pop-art') return 'bg-yellow-400 border-2 border-black rotate-12'
  if (t === 'cyberpunk') return 'bg-cyan-500 text-black shadow-[0_0_15px_cyan]'
  if (t === 'luxury') return 'bg-amber-500 text-black'
  return 'bg-zinc-900 text-white'
})

const navItemClasses = (isActive) => {
    if (isActive) {
        const t = siteData.config.theme
        if (t === 'pop-art') return 'bg-cyan-400 text-black border-2 border-black underline'
        if (t === 'cyberpunk') return 'bg-cyan-500 text-black font-black'
        if (t === 'luxury') return 'bg-amber-500 text-black'
        return 'bg-zinc-900 text-white'
    }
    return 'opacity-40 hover:opacity-100'
}

const ctaClasses = computed(() => {
    const t = siteData.config.theme
    if (t === 'pop-art') return 'bg-pink-500 text-white border-2 border-black'
    if (t === 'cyberpunk') return 'bg-gradient-to-r from-cyan-400 to-blue-600 text-black'
    if (t === 'luxury') return 'bg-amber-500 text-black tracking-widest'
    return 'bg-zinc-900 text-white'
})

const dotClasses = computed(() => {
    return 'bg-current opacity-20'
})

</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
