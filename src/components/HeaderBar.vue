<template>
  <header class="h-11 flex items-center px-4 gap-4 shrink-0" style="background:var(--color-layout-topbar-bg);color:var(--color-layout-topbar-text)">
    <div class="flex items-center gap-2.5 shrink-0">
      <div class="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
        <svg class="w-3.5 h-3.5 text-yellow-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
      </div>
      <div class="leading-tight">
        <div class="text-[13px] font-bold tracking-wide">KEMENKO INFRASTRUKTUR</div>
        <div class="text-[8px] tracking-[0.12em] uppercase opacity-70">Command Center Emergency Dashboard</div>
      </div>
    </div>
    <div class="flex-1 max-w-md mx-auto">
      <div class="relative">
        <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 opacity-60" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
        <input type="text" placeholder="Search Kabupaten atau Lokasi..."
          class="w-full bg-white/15 border border-white/20 rounded-[var(--radius-field-md)] pl-9 pr-4 py-1.5 text-xs text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:bg-white/20 transition" />
      </div>
    </div>
    <div class="flex items-center gap-4 shrink-0 text-[13px]">
      <div class="flex items-center gap-1.5 opacity-80">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
        Jakarta, 32°C
      </div>
      <div class="font-mono font-semibold tabular-nums">{{ timeStr }} <span class="text-xs opacity-60">WIB</span></div>
      <div class="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
        <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const timeStr = ref('')
let timer = null

function updateTime() {
  const now = new Date()
  const h = String(now.getHours()).padStart(2, '0')
  const m = String(now.getMinutes()).padStart(2, '0')
  const s = String(now.getSeconds()).padStart(2, '0')
  timeStr.value = `${h}:${m}:${s}`
}

onMounted(() => { updateTime(); timer = setInterval(updateTime, 1000) })
onUnmounted(() => clearInterval(timer))
</script>
