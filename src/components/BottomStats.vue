<template>
  <div class="shrink-0 border-t" style="border-color:var(--color-base-300);background:var(--color-base-100)">
    <div class="grid grid-cols-4" style="border-bottom:1px solid var(--color-base-300)">
      <div v-for="s in stats" :key="s.label" class="mitreka-stat-card" style="border:none;border-right:1px solid var(--color-base-300);border-radius:0;padding:0.625rem 1rem">
        <div class="w-8 h-8 rounded-[var(--radius-box)] flex items-center justify-center shrink-0" :style="{ background: s.iconBg }">
          <svg class="w-4 h-4" :style="{ color: s.iconColor }" fill="currentColor" viewBox="0 0 24 24"><path :d="s.icon" /></svg>
        </div>
        <div>
          <div class="stat-label" style="font-size:9px;text-transform:uppercase;letter-spacing:0.05em" :style="{ color: s.labelColor || 'inherit', opacity: s.labelColor ? 1 : 0.5 }">{{ s.label }}</div>
          <div class="stat-value flex items-baseline gap-1" style="font-size:1.125rem">
            <span ref="counterRefs">{{ s.displayValue }}</span>
            <span v-if="s.unit" style="font-size:10px;opacity:0.45;font-weight:400">{{ s.unit }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { selectedDisaster } from '../store.js'

const d = computed(() => selectedDisaster.value)
const animated = ref({ flood: 0, buildings: 0, roads: 0, refugees: 0 })

function animateValue(key, target, duration = 800) {
  const start = animated.value[key]
  const diff = target - start
  const startTime = performance.now()
  function step(now) {
    const elapsed = now - startTime
    const progress = Math.min(elapsed / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    animated.value[key] = Math.round(start + diff * eased)
    if (progress < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

function runAnimations() {
  const s = d.value.stats
  animateValue('flood', Math.round(s.floodArea * 1000))
  animateValue('buildings', s.buildings)
  animateValue('roads', s.roadsCut)
  animateValue('refugees', s.refugees)
}

onMounted(runAnimations)
watch(d, runAnimations)

const stats = computed(() => [
  {
    label: 'Area Banjir', labelColor: 'var(--color-info)',
    displayValue: (animated.value.flood / 1000).toFixed(3), unit: 'Km\u00b2',
    icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
    iconBg: 'rgba(59,130,246,0.08)', iconColor: 'var(--color-info)',
  },
  {
    label: 'Bangunan Terdampak',
    displayValue: animated.value.buildings.toLocaleString(), unit: 'unit',
    icon: 'M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z',
    iconBg: 'rgba(245,158,11,0.08)', iconColor: 'var(--color-warning)',
  },
  {
    label: 'Jalan Terputus', labelColor: 'var(--color-error)',
    displayValue: animated.value.roads.toString(), unit: 'Ruas',
    icon: 'M18 4H6L1 9l11 13L23 9l-5-5z',
    iconBg: 'rgba(238,48,50,0.08)', iconColor: 'var(--color-error)',
  },
  {
    label: 'Pengungsi',
    displayValue: animated.value.refugees.toLocaleString(), unit: 'jiwa',
    icon: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2m22-4l-5 5m0 0l-5-5m5 5V3',
    iconBg: 'rgba(2,80,151,0.08)', iconColor: 'var(--color-primary)',
  },
])
</script>
