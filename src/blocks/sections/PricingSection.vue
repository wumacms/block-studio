<template>
  <section class="py-24 px-6 overflow-hidden transition-all duration-700" :class="themeClasses">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-20 space-y-6">
        <h2 v-if="data?.title" class="text-4xl md:text-6xl font-black tracking-tighter" :class="headingClasses">
          {{ data.title }}
        </h2>
        <p v-if="data?.subtitle" class="text-lg opacity-60 max-w-2xl mx-auto leading-relaxed">
          {{ data.subtitle }}
        </p>

        <!-- Billing Toggle -->
        <div class="flex items-center justify-center gap-4 pt-4">
            <span class="text-xs font-black uppercase tracking-widest opacity-40">Monthly</span>
            <button @click="isYearly = !isYearly" 
                    class="w-14 h-8 rounded-full transition-all duration-500 relative p-1 shadow-inner"
                    :class="toggleBgClasses">
                <div class="w-6 h-6 rounded-full transition-transform duration-500 shadow-md"
                     :class="[isYearly ? 'translate-x-6' : 'translate-x-0', toggleThumbClasses]"></div>
            </button>
            <span class="text-xs font-black uppercase tracking-widest" :class="yearlyLabelClasses">Yearly <span class="text-emerald-500 italic">-20%</span></span>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch lg:items-center">
        <div v-for="(plan, index) in pricingPlans" :key="index"
             class="relative group rounded-[2.5rem] p-10 transition-all duration-700 hover:-translate-y-4 flex flex-col h-full border overflow-hidden"
             :class="[cardClasses(plan.featured), plan.featured ? 'md:scale-105 z-10' : 'z-0']">
          
          <!-- Recommended Badge -->
          <div v-if="plan.featured" 
               class="absolute top-8 right-[-35px] rotate-45 px-10 py-1 text-[10px] font-black uppercase tracking-widest shadow-lg"
               :class="badgeClasses">
             Popular
          </div>

          <div class="flex-grow">
            <div class="mb-8">
              <h3 class="text-xl font-black uppercase tracking-[0.2em] mb-4" :class="planTitleClasses(plan.featured)">
                {{ plan.name }}
              </h3>
              <div class="flex items-end gap-2 mb-4">
                <span class="text-5xl font-black tracking-tighter" :class="priceClasses(plan.featured)">
                  ${{ isYearly ? plan.priceYearly : plan.priceMonthly }}
                </span>
                <span class="text-sm font-bold opacity-40 pb-2">/ month</span>
              </div>
              <p class="text-sm opacity-60 leading-relaxed min-h-[40px]">
                {{ plan.desc }}
              </p>
            </div>

            <div class="h-px w-full mb-8 bg-current opacity-10"></div>

            <ul class="space-y-4 mb-12">
              <li v-for="feature in plan.features" :key="feature" 
                  class="flex items-start gap-3 group/feature">
                <span class="text-lg transition-transform group-hover/feature:scale-125" :class="checkIconClasses(plan.featured)">✓</span>
                <span class="text-sm font-bold opacity-80 group-hover/feature:opacity-100 transition-opacity">{{ feature }}</span>
              </li>
            </ul>
          </div>

          <button class="w-full py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all active:scale-95 shadow-2xl"
                  :class="buttonClasses(plan.featured)">
            {{ plan.cta || 'Get Started' }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { siteData } from '../../engine/siteData'

const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  }
})

const isYearly = ref(false)

const pricingPlans = computed(() => {
  return props.data?.items || [
    {
      name: 'Starter',
      priceMonthly: 19,
      priceYearly: 15,
      desc: 'Perfect for enthusiasts and smaller projects.',
      features: ['Up to 5 Projects', 'Community Support', 'Basic Components', 'CDN Acceleration'],
      featured: false,
      cta: 'Free Trial'
    },
    {
      name: 'Pro',
      priceMonthly: 49,
      priceYearly: 39,
      desc: 'The best value for growing creative teams.',
      features: ['Unlimited Projects', 'Priority Support', 'Premium Components', 'Custom Domain', 'Team Collaboration'],
      featured: true,
      cta: 'Choose Pro'
    },
    {
      name: 'Ent',
      priceMonthly: 99,
      priceYearly: 79,
      desc: 'Customized solutions for scaling businesses.',
      features: ['Dedicated Account Manager', 'SLA Guarantee', 'Advanced Analytics', 'SSO Integration', 'Security Audits'],
      featured: false,
      cta: 'Contact Sales'
    }
  ]
})

const themeClasses = computed(() => {
  switch (siteData.config.theme) {
    case 'pop-art': return 'bg-[#FFDE03] text-black font-sans'
    case 'minimal': return 'bg-white text-stone-900 font-sans'
    case 'cyberpunk': return 'bg-[#050505] text-white font-mono'
    case 'fresh': return 'bg-[#f0f9f4] text-emerald-900 border-y border-emerald-100'
    case 'luxury': return 'bg-slate-950 text-amber-50'
    case 'yellow': return 'bg-amber-50 text-amber-950 border-y border-amber-200'
    default: return 'bg-white text-zinc-900 select-none'
  }
})

const headingClasses = computed(() => {
  const t = siteData.config.theme
  if (t === 'pop-art') return 'italic tracking-tighter border-black border-4 bg-white inline-block px-8 py-4 shadow-[8px_8px_0_0_black] -rotate-1'
  if (t === 'cyberpunk') return 'text-cyan-400 drop-shadow-[0_0_15px_rgba(6,182,212,0.8)] uppercase skew-x-[-12deg]'
  if (t === 'luxury') return 'font-serif text-amber-500 tracking-[0.2em] italic uppercase'
  if (t === 'fresh') return 'font-serif text-emerald-800 italic underline decoration-emerald-500/30 underline-offset-[-10px]'
  return ''
})

const toggleBgClasses = computed(() => {
    const t = siteData.config.theme
    if (t === 'pop-art') return 'bg-white border-2 border-black'
    if (t === 'cyberpunk') return 'bg-zinc-900 border border-cyan-500/40 shadow-inner shadow-black/80'
    if (t === 'luxury') return 'bg-amber-500/10 border border-amber-500/20'
    return 'bg-current/10'
})

const toggleThumbClasses = computed(() => {
    const t = siteData.config.theme
    if (t === 'pop-art') return 'bg-pink-500 border-2 border-black'
    if (t === 'cyberpunk') return 'bg-cyan-500 shadow-[0_0_10px_cyan]'
    if (t === 'luxury') return 'bg-amber-500'
    return 'bg-current text-white border-2 border-white'
})

const yearlyLabelClasses = computed(() => {
    return isYearly.value ? 'opacity-100 scale-110 transition-all font-black text-pink-600' : 'opacity-40 transition-all'
})

const cardClasses = (isFeatured) => {
  const t = siteData.config.theme
  if (t === 'pop-art') {
      return isFeatured 
        ? 'bg-white border-4 border-black shadow-[12px_12px_0_0_black] -rotate-1 scale-105' 
        : 'bg-white border-4 border-black shadow-[6px_6px_0_0_black] rotate-1'
  }
  if (t === 'cyberpunk') {
      return isFeatured 
        ? 'bg-slate-900 border-2 border-cyan-400 shadow-[0_0_40px_rgba(6,182,212,0.2)]'
        : 'bg-zinc-900/40 border border-cyan-500/20 backdrop-blur-md'
  }
  if (t === 'luxury') {
      return isFeatured 
        ? 'bg-white/5 border-amber-500/60 shadow-[0_20px_60px_rgba(245,158,11,0.1)]'
        : 'bg-white/5 border-white/10 opacity-70 hover:opacity-100'
  }
  if (t === 'fresh') {
      return isFeatured 
        ? 'bg-white border-2 border-emerald-500/40 shadow-emerald-500/10'
        : 'bg-emerald-100/30 border border-emerald-200'
  }
  return isFeatured 
    ? 'bg-white border-zinc-200 shadow-2xl scale-105' 
    : 'bg-zinc-50 border-zinc-100 shadow-sm opacity-90'
}

const badgeClasses = computed(() => {
  const t = siteData.config.theme
  if (t === 'pop-art') return 'bg-yellow-400 text-black border-2 border-black'
  if (t === 'cyberpunk') return 'bg-fuchsia-500 text-black'
  if (t === 'luxury') return 'bg-amber-500 text-black'
  return 'bg-red-500 text-white'
})

const planTitleClasses = (isFeatured) => {
    const t = siteData.config.theme
    if (!isFeatured) return 'opacity-80'
    if (t === 'pop-art') return 'text-pink-600 italic underline decoration-black decoration-4 offset-8'
    if (t === 'cyberpunk') return 'text-cyan-400 drop-shadow-[0_0_5px_cyan]'
    if (t === 'fresh') return 'text-emerald-800'
    if (t === 'luxury') return 'text-amber-500 tracking-[0.4em]'
    return 'text-blue-600'
}

const priceClasses = (isFeatured) => {
    const t = siteData.config.theme
    if (t === 'luxury') return 'text-amber-500 font-serif'
    if (t === 'cyberpunk') return 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500'
    return 'text-current'
}

const checkIconClasses = (isFeatured) => {
    const t = siteData.config.theme
    if (isFeatured) {
        if (t === 'pop-art') return 'text-pink-600 font-black'
        if (t === 'cyberpunk') return 'text-cyan-500 drop-shadow-[0_0_5px_cyan]'
        if (t === 'fresh') return 'text-emerald-500'
        if (t === 'luxury') return 'text-amber-500'
    }
    return 'text-current opacity-40'
}

const buttonClasses = (isFeatured) => {
  const t = siteData.config.theme
  if (t === 'pop-art') {
      return isFeatured 
        ? 'bg-pink-500 text-white border-4 border-black'
        : 'bg-cyan-400 text-black border-4 border-black'
  }
  if (t === 'cyberpunk') {
      return isFeatured
        ? 'bg-cyan-500 text-black shadow-[0_0_20px_cyan]'
        : 'bg-transparent border-2 border-cyan-500/40 text-cyan-400 hover:border-cyan-400'
  }
  if (t === 'luxury') {
      return isFeatured
        ? 'bg-amber-500 text-slate-950 font-black'
        : 'bg-slate-900 text-amber-500 border border-amber-500/20'
  }
  if (t === 'fresh') {
      return isFeatured
        ? 'bg-emerald-600 text-white'
        : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
  }
  return isFeatured
    ? 'bg-zinc-950 text-white'
    : 'bg-white border-2 border-zinc-200 text-zinc-900 group-hover:border-zinc-900'
}

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
