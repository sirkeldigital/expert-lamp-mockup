<template>
  <div class="flex-1 overflow-y-auto p-6" style="background:var(--color-base-200)">
    <div class="mitreka-page-header">
      <div class="page-header-title-row">
        <h1 class="page-header-title">Risk Assessment</h1>
        <span class="badge badge-soft-error ml-2">2 Critical Alerts</span>
      </div>
      <p class="page-header-desc">Monitoring risiko real-time area terdampak Kab. Banjar</p>
    </div>

    <div class="flex items-center justify-end mb-4">
      <button class="btn btn-outline btn-sm">Export Report</button>
    </div>

    <!-- Risk Overview -->
    <div class="grid grid-cols-4 gap-4 mb-6">
      <div v-for="s in overview" :key="s.label" class="mitreka-stat-card">
        <div>
          <div class="stat-label">{{ s.label }}</div>
          <div class="stat-value" :style="{ color: s.color }">{{ s.value }}</div>
          <div class="flex items-center gap-1 mt-0.5">
            <span class="text-[11px]" :style="{ color: s.trendColor }">{{ s.trend }}</span>
            <span class="text-[10px]" style="opacity:0.4">{{ s.trendText }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Risk Items -->
    <div class="flex flex-col gap-3">
      <div v-for="r in risks" :key="r.id" class="card p-4 hover:shadow-md transition cursor-pointer">
        <div class="flex items-start gap-4">
          <!-- Score -->
          <div class="w-14 h-14 rounded-[var(--radius-box)] flex items-center justify-center shrink-0"
            :style="{ background: scoreBg(r.level) }">
            <span class="text-lg font-bold" :style="{ color: scoreColor(r.level) }">{{ r.score }}</span>
          </div>

          <!-- Details -->
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 mb-1">
              <span class="text-sm font-semibold">{{ r.area }}</span>
              <span class="badge" :class="levelBadge(r.level)">{{ r.level }}</span>
              <span class="text-[11px] ml-auto flex items-center gap-1" style="opacity:0.45">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                {{ r.lastAssessed }}
              </span>
            </div>
            <div class="flex items-center gap-2 mb-2">
              <span class="badge">{{ r.type }}</span>
              <span class="text-[10px] font-mono" style="opacity:0.4">{{ r.id }}</span>
              <span class="text-[10px] ml-1" :style="{ color: r.trend === 'up' ? 'var(--color-error)' : r.trend === 'down' ? 'var(--color-success)' : 'inherit' }">
                {{ r.trend === 'up' ? '&#9650; Rising' : r.trend === 'down' ? '&#9660; Declining' : '&#8212; Stable' }}
              </span>
            </div>
            <p class="text-xs" style="opacity:0.6;line-height:1.5">{{ r.description }}</p>
          </div>

          <!-- Risk Bar -->
          <div class="w-24 shrink-0">
            <div class="text-[10px] mb-1 text-right" style="opacity:0.4">Risk Score</div>
            <div class="progress progress-sm">
              <div class="progress-bar" :class="barClass(r.level)" :style="{ width: r.score + '%' }"></div>
            </div>
            <div class="text-[11px] font-mono font-bold text-right mt-0.5" :style="{ color: scoreColor(r.level) }">{{ r.score }}/100</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { risks } from '../data/dummy.js'

const overview = [
  { label: 'Average Risk Score', value: '63', color: 'var(--color-warning)', trend: '▲ +5', trendColor: 'var(--color-error)', trendText: 'vs 6 hours ago' },
  { label: 'Critical Risks', value: '1', color: 'var(--color-error)', trend: '▲ +1', trendColor: 'var(--color-error)', trendText: 'new critical' },
  { label: 'High Risks', value: '2', color: '#d97706', trend: '— 0', trendColor: '#94a3b8', trendText: 'unchanged' },
  { label: 'Monitored Areas', value: '6', color: 'var(--color-info)', trend: '▲ +2', trendColor: 'var(--color-success)', trendText: 'added today' },
]

function levelBadge(l) {
  return { critical: 'badge-soft-error', high: 'badge-soft-warning', medium: 'badge-soft-info', low: 'badge-soft-success' }[l] || ''
}
function scoreBg(l) {
  return { critical: 'rgba(238,48,50,0.08)', high: 'rgba(245,158,11,0.08)', medium: 'rgba(59,130,246,0.08)', low: 'rgba(34,197,94,0.08)' }[l] || ''
}
function scoreColor(l) {
  return { critical: 'var(--color-error)', high: '#d97706', medium: 'var(--color-info)', low: 'var(--color-success)' }[l] || ''
}
function barClass(l) {
  return { critical: 'bg-error', high: 'bg-warning', medium: 'bg-info', low: 'bg-success' }[l] || ''
}
</script>
