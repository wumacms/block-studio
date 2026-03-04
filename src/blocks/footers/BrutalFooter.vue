<template>
  <footer class="w-full transition-colors duration-700 overflow-hidden" :class="containerClasses">
    <!-- Massive Background Typography -->
    <div class="relative w-full h-32 md:h-64 flex items-center justify-center overflow-hidden border-b-8 border-current">
        <div class="absolute inset-0 flex items-center justify-center whitespace-nowrap text-[12vw] font-black tracking-tighter opacity-10 select-none transform scale-110">
            {{ siteData.config.siteName }} • {{ siteData.config.siteName }} • {{ siteData.config.siteName }}
        </div>
        <div class="z-10 text-center">
            <p class="text-[10px] font-black uppercase tracking-[1em] mb-4 opacity-100">Establishment / 2026</p>
            <h2 class="text-4xl md:text-6xl font-black uppercase tracking-tighter">{{ data?.bottomLogo || 'AG.ARCHIVE' }}</h2>
        </div>
    </div>

    <!-- Main Content Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b-8 border-current">
        <!-- Brand Block -->
        <div class="p-12 border-b-8 md:border-b-0 md:border-r-8 border-current group hover:bg-current hover:text-white transition-all duration-500">
            <h3 class="text-3xl font-black mb-8 leading-none">THE<br/>STUDIO.</h3>
            <p class="text-sm font-bold leading-relaxed mb-12 opacity-80 group-hover:opacity-100">
                {{ data?.siteDescription || '致力于通过设计与技术的硬核结合，在数字荒漠中构建美学绿洲。' }}
            </p>
            <div class="flex flex-wrap gap-4">
                <template v-if="data?.socialLinks">
                    <a v-for="link in data.socialLinks" :key="link.label" :href="link.link"
                       class="w-12 h-12 flex items-center justify-center border-4 border-current font-black text-xs hover:bg-current hover:text-white group/link transition-all">
                        {{ link.label }}
                    </a>
                </template>
            </div>
        </div>

        <!-- Links Block -->
        <div class="p-12 border-b-8 md:border-b-0 md:border-r-8 border-current bg-current text-white/10 hover:text-white transition-colors duration-500">
            <h3 class="text-xs font-black uppercase tracking-[0.5em] mb-12 text-white">Directory_01</h3>
            <div class="flex flex-col gap-6">
                <button v-for="page in siteData.pages" :key="page.id"
                        @click="changePage(page.id)"
                        class="text-left text-4xl font-black uppercase tracking-tighter hover:italic hover:translate-x-4 transition-all">
                    {{ page.title }}
                </button>
            </div>
        </div>

        <!-- Utility Block -->
        <div class="p-12 border-b-8 lg:border-b-0 lg:border-r-8 border-current flex flex-col justify-between">
            <div>
                <h3 class="text-xs font-black uppercase tracking-[0.5em] mb-12 opacity-40 italic">Connections</h3>
                <div class="space-y-2 text-2xl font-black italic">
                    <p>{{ data?.email || 'OFFICE@ANTI.COM' }}</p>
                    <p>{{ data?.phone || '000-888-999' }}</p>
                </div>
            </div>
            <div v-if="data?.locations" class="mt-12">
                <p v-for="loc in data.locations" :key="loc" class="text-xs font-black uppercase tracking-widest leading-loose">
                    [ {{ loc }} ]
                </p>
            </div>
        </div>

        <!-- Newsletter Block -->
        <div class="p-12 flex flex-col justify-between" :class="newsletterBgClasses">
            <div>
                <h3 class="text-xs font-black uppercase tracking-[0.5em] mb-12">Dispatch</h3>
                <h4 class="text-2xl font-black mb-6 uppercase tracking-tighter">{{ data?.newsletterTitle || '加入我们' }}</h4>
                <div class="relative">
                    <input type="text" :placeholder="data?.newsletterPlaceholder || 'EMAIL@PROVIDER.COM'"
                           class="w-full bg-transparent border-b-4 border-current py-4 font-black outline-none placeholder:opacity-20 uppercase" />
                    <button class="mt-6 w-full py-4 text-center font-black uppercase border-4 border-current hover:bg-current hover:text-white transition-all transform active:scale-95">
                        {{ data?.newsletterButton || 'Subscribe Now' }}
                    </button>
                </div>
            </div>
            <p class="mt-8 text-[10px] font-black uppercase tracking-widest leading-relaxed opacity-40">
                Data privacy is our priority. No cookies. No tracking. Just raw content.
            </p>
        </div>
    </div>

    <!-- Legal & Closing -->
    <div class="p-8 flex flex-col lg:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.4em]">
        <div class="flex items-center gap-4">
            <span class="p-2 border-2 border-current">© 2026</span>
            <span>SYSTEM_OVERRIDE / {{ siteData.config.siteName }}</span>
        </div>
        <div class="flex gap-12 text-current/40">
            <template v-if="data?.bottomLinks">
                <a v-for="link in data.bottomLinks" :key="link.label" :href="link.link" class="hover:text-current">
                    {{ link.label }}
                </a>
            </template>
        </div>
        <div class="group cursor-help">
            <span class="group-hover:hidden">TRUSTED_SECURE_CONNECTION</span>
            <span class="hidden group-hover:inline text-emerald-500 font-mono italic">AG_PROTOCOL_ACTIVE_001</span>
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
    case 'pop-art': return 'bg-white text-black border-black'
    case 'minimal': return 'bg-stone-50 text-stone-900 border-stone-950'
    case 'cyberpunk': return 'bg-black text-cyan-500 border-cyan-500'
    case 'fresh': return 'bg-emerald-50 text-emerald-950 border-emerald-900'
    case 'luxury': return 'bg-slate-950 text-amber-500 border-amber-600'
    case 'yellow': return 'bg-amber-100 text-amber-950 border-amber-900'
    default: return 'bg-white text-black border-black'
  }
})

const newsletterBgClasses = computed(() => {
  const t = siteData.config.theme
  if (t === 'pop-art') return 'bg-yellow-400'
  if (t === 'cyberpunk') return 'bg-cyan-500 text-black shadow-[inset_0_0_50px_rgba(0,0,0,0.2)]'
  if (t === 'fresh') return 'bg-emerald-200'
  if (t === 'luxury') return 'bg-amber-600 text-black'
  return 'bg-current/10'
})

</script>
