<template>
  <div class="flex-1 overflow-y-auto p-6" style="background:var(--color-base-200)">
    <div class="mitreka-page-header">
      <div class="page-header-title-row">
        <h1 class="page-header-title">Tender & Procurement</h1>
      </div>
      <p class="page-header-desc">Pengadaan barang & jasa emergency response Kab. Banjar</p>
    </div>

    <div class="flex items-center justify-end mb-4">
      <button class="btn btn-primary btn-sm">+ New Tender</button>
    </div>

    <!-- Summary Cards -->
    <div class="grid grid-cols-4 gap-4 mb-6">
      <div v-for="s in stats" :key="s.label" class="mitreka-stat-card">
        <div>
          <div class="stat-label">{{ s.label }}</div>
          <div class="stat-value" :style="{ color: s.color }">{{ s.value }}</div>
          <div class="text-xs mt-0.5" style="opacity:0.5">{{ s.sub }}</div>
        </div>
      </div>
    </div>

    <!-- Tender Cards -->
    <div class="flex flex-col gap-3">
      <div v-for="t in tenders" :key="t.id" class="card p-4 hover:shadow-md transition cursor-pointer">
        <div class="flex items-start justify-between mb-2">
          <div class="flex-1 min-w-0 mr-4">
            <div class="flex items-center gap-2 mb-1">
              <span class="font-mono text-[11px]" style="opacity:0.4">{{ t.id }}</span>
              <span class="badge" :class="tenderBadge(t.status)">{{ t.status }}</span>
              <span class="badge">{{ t.category }}</span>
            </div>
            <h3 class="text-sm font-semibold">{{ t.title }}</h3>
          </div>
          <div class="text-right shrink-0">
            <div class="text-[10px]" style="opacity:0.5">Estimasi</div>
            <div class="text-sm font-bold" style="color:var(--color-warning)">{{ t.value }}</div>
          </div>
        </div>
        <div class="flex items-center gap-4 text-xs" style="opacity:0.5">
          <span class="flex items-center gap-1">
            <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
            Deadline: {{ t.deadline }}
          </span>
          <span class="flex items-center gap-1">
            <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2"/><circle cx="9" cy="7" r="4"/></svg>
            {{ t.bids }} bids
          </span>
          <span v-if="t.winner" class="flex items-center gap-1" style="color:var(--color-success);opacity:1">
            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            {{ t.winner }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { tenders } from '../data/dummy.js'

const stats = [
  { label: 'Total Tender', value: tenders.length, sub: 'Active tenders', color: 'var(--color-base-content)' },
  { label: 'Open', value: tenders.filter(t => t.status === 'open').length, sub: 'Accepting bids', color: 'var(--color-info)' },
  { label: 'Evaluation', value: tenders.filter(t => t.status === 'evaluation').length, sub: 'Under review', color: 'var(--color-warning)' },
  { label: 'Total Value', value: 'Rp 16.4M', sub: 'Combined estimate', color: 'var(--color-success)' },
]

function tenderBadge(s) {
  return { open: 'badge-soft-info', evaluation: 'badge-soft-warning', awarded: 'badge-soft-success', closed: '' }[s] || ''
}
</script>
