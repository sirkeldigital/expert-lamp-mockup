<template>
  <aside class="w-[260px] shrink-0 overflow-y-auto flex flex-col border-l" style="background:var(--color-base-100);border-color:var(--color-base-300)">
    <!-- AI Assistant Header -->
    <div class="px-4 py-3 border-b" style="border-color:var(--color-base-300)">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="w-6 h-6 rounded-[var(--radius-field-sm)] flex items-center justify-center" style="background:var(--color-primary)">
            <svg class="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z"/><circle cx="12" cy="12" r="3"/></svg>
          </div>
          <span class="text-sm font-bold">AI Assistant</span>
        </div>
      </div>
    </div>

    <!-- Risk Prediction -->
    <div class="px-4 py-3 border-b" style="border-color:var(--color-base-300)">
      <div class="flex items-center gap-2 mb-2">
        <svg class="w-4 h-4" style="color:var(--color-warning)" fill="currentColor" viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>
        <span class="text-xs font-semibold">Risk Prediction</span>
        <span class="badge ml-auto" :class="d.riskScore >= 80 ? 'badge-error' : d.riskScore >= 60 ? 'badge-warning' : 'badge-info'" style="font-size:9px">
          {{ d.riskScore >= 80 ? 'High' : d.riskScore >= 60 ? 'Medium' : 'Low' }}
        </span>
      </div>
      <div class="flex items-baseline gap-1.5 mb-2">
        <span class="text-sm font-bold" :style="{ color: d.riskScore >= 80 ? 'var(--color-error)' : d.riskScore >= 60 ? '#b45309' : 'var(--color-info)' }">
          {{ d.riskScore >= 80 ? 'High Risk' : d.riskScore >= 60 ? 'Medium Risk' : 'Low Risk' }}
        </span>
        <span class="text-xs" style="opacity:0.5">Score:</span>
        <span class="text-base font-bold">{{ d.riskScore }}</span>
      </div>
      <div class="progress progress-sm mb-2">
        <div class="progress-bar" :class="d.riskScore >= 80 ? 'bg-error' : d.riskScore >= 60 ? 'bg-warning' : 'bg-info'" :style="{ width: d.riskScore + '%' }"></div>
      </div>
      <p class="text-[11px]" style="opacity:0.65;line-height:1.5">{{ d.riskDesc }}</p>
    </div>

    <!-- Urgent Actions -->
    <div class="px-4 py-3 border-b" style="border-color:var(--color-base-300)">
      <div class="flex items-center gap-2 mb-2">
        <svg class="w-4 h-4" style="color:var(--color-warning)" fill="currentColor" viewBox="0 0 24 24"><path d="M13 3L4 14h7l-2 7 9-11h-7l2-7z"/></svg>
        <span class="text-xs font-semibold">Urgent Actions</span>
      </div>
      <div class="flex flex-col gap-2">
        <div v-for="(action, i) in d.urgentActions" :key="i"
          class="text-[11px] pl-3 py-0.5" style="border-left:2px solid var(--color-warning);opacity:0.7;line-height:1.5">
          {{ action }}
        </div>
      </div>
      <button class="btn btn-outline btn-sm w-full mt-3">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
        Send Task Details
      </button>
    </div>

    <!-- Disaster Summary -->
    <div class="px-4 py-3 border-b" style="border-color:var(--color-base-300)">
      <div class="flex items-center gap-2 mb-2">
        <svg class="w-4 h-4" style="color:var(--color-info)" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>
        <span class="text-xs font-semibold">Ringkasan</span>
      </div>
      <div class="flex flex-col gap-1.5">
        <div class="flex justify-between text-[11px]"><span style="opacity:0.5">Tipe Bencana</span><span class="font-semibold">{{ d.type }}</span></div>
        <div class="flex justify-between text-[11px]"><span style="opacity:0.5">Provinsi</span><span class="font-semibold">{{ d.province }}</span></div>
        <div class="flex justify-between text-[11px]"><span style="opacity:0.5">Pengungsi</span><span class="font-bold" style="color:var(--color-warning)">{{ d.stats.refugees.toLocaleString() }}</span></div>
        <div class="flex justify-between text-[11px]"><span style="opacity:0.5">Korban Jiwa</span><span class="font-bold" :style="{ color: d.stats.deaths > 0 ? 'var(--color-error)' : 'var(--color-success)' }">{{ d.stats.deaths }}</span></div>
        <div class="flex justify-between text-[11px]"><span style="opacity:0.5">Jalan Terputus</span><span class="font-semibold">{{ d.stats.roadsCut }} ruas</span></div>
        <div class="flex justify-between text-[11px]"><span style="opacity:0.5">Bangunan Rusak</span><span class="font-semibold">{{ d.stats.buildings.toLocaleString() }}</span></div>
      </div>
    </div>

    <!-- Active Disasters Overview -->
    <div class="px-4 py-3">
      <div class="flex items-center gap-2 mb-2">
        <svg class="w-4 h-4" style="color:var(--color-error)" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"/></svg>
        <span class="text-xs font-semibold">Bencana Aktif Nasional</span>
      </div>
      <div class="flex items-center gap-3 mb-2">
        <div class="text-center"><div class="text-xl font-bold" style="color:var(--color-error)">4</div><div class="text-[8px]" style="opacity:0.4">AWAS</div></div>
        <div class="text-center"><div class="text-xl font-bold" style="color:var(--color-warning)">6</div><div class="text-[8px]" style="opacity:0.4">SIAGA</div></div>
        <div class="text-center"><div class="text-xl font-bold">10</div><div class="text-[8px]" style="opacity:0.4">TOTAL</div></div>
      </div>
      <div class="progress progress-xs">
        <div class="progress-bar bg-error" style="width:40%"></div>
      </div>
      <div class="flex justify-between text-[9px] mt-1" style="opacity:0.35"><span>AWAS 40%</span><span>SIAGA 60%</span></div>
    </div>
  </aside>
</template>

<script setup>
import { computed } from 'vue'
import { selectedDisaster } from '../store.js'
const d = computed(() => selectedDisaster.value)
</script>
