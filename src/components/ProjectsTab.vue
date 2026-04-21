<template>
  <div class="flex-1 overflow-y-auto p-6" style="background:var(--color-base-200)">
    <!-- Page Header -->
    <div class="mitreka-page-header">
      <div class="page-header-title-row">
        <h1 class="page-header-title">Infrastructure Projects</h1>
      </div>
      <p class="page-header-desc">Proyek rehabilitasi & pembangunan darurat Kab. Banjar</p>
    </div>

    <!-- Filters -->
    <div class="flex items-center justify-between mb-4">
      <div class="flex gap-1.5">
        <button v-for="f in filters" :key="f" @click="activeFilter = f"
          class="btn btn-sm"
          :class="activeFilter === f ? 'btn-primary' : 'btn-outline'">
          {{ f }}
        </button>
      </div>
      <button class="btn btn-primary btn-sm">+ New Project</button>
    </div>

    <!-- Summary Cards -->
    <div class="grid grid-cols-4 gap-4 mb-6">
      <div v-for="s in summaryCards" :key="s.label" class="mitreka-stat-card">
        <div>
          <div class="stat-label">{{ s.label }}</div>
          <div class="stat-value" :style="{ color: s.color }">{{ s.value }}</div>
          <div class="text-xs mt-0.5" style="opacity:0.5">{{ s.sub }}</div>
        </div>
      </div>
    </div>

    <!-- Projects Table -->
    <div data-als data-density="cozy">
      <div class="als-viewport" style="--als-max-h:auto">
        <table>
          <thead>
            <tr>
              <th style="width:80px">ID</th>
              <th>Nama Proyek</th>
              <th style="width:100px">Kategori</th>
              <th style="width:90px">Status</th>
              <th style="width:130px">Progress</th>
              <th style="width:100px">Budget</th>
              <th style="width:110px">Deadline</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="p in filteredProjects" :key="p.id">
              <td class="font-mono text-xs" style="opacity:0.5">{{ p.id }}</td>
              <td>
                <div class="font-medium text-xs">{{ p.name }}</div>
                <div class="text-[10px]" style="opacity:0.5">{{ p.contractor }}</div>
              </td>
              <td><span class="badge">{{ p.category }}</span></td>
              <td>
                <span class="badge" :class="statusBadge(p.status)">{{ p.status }}</span>
              </td>
              <td>
                <div class="flex items-center gap-2">
                  <div class="progress progress-xs flex-1">
                    <div class="progress-bar" :class="progressBar(p.progress)" :style="{ width: p.progress + '%' }"></div>
                  </div>
                  <span class="text-[11px] font-mono" style="opacity:0.6;min-width:28px;text-align:right">{{ p.progress }}%</span>
                </div>
              </td>
              <td class="font-mono text-xs">{{ p.budget }}</td>
              <td class="font-mono text-xs" style="opacity:0.6">{{ p.deadline }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { projects } from '../data/dummy.js'

const activeFilter = ref('All')
const filters = ['All', 'Urgent', 'Active', 'Planning']

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') return projects
  return projects.filter(p => p.status === activeFilter.value.toLowerCase())
})

const summaryCards = [
  { label: 'Total Projects', value: projects.length, sub: 'Across all categories', color: 'var(--color-base-content)' },
  { label: 'Urgent', value: projects.filter(p => p.status === 'urgent').length, sub: 'Needs immediate action', color: 'var(--color-error)' },
  { label: 'Active', value: projects.filter(p => p.status === 'active').length, sub: 'Currently in progress', color: 'var(--color-success)' },
  { label: 'Total Budget', value: 'Rp 66.6M', sub: 'Combined allocation', color: 'var(--color-warning)' },
]

function statusBadge(s) {
  return { urgent: 'badge-soft-error', active: 'badge-soft-success', planning: 'badge-soft-info' }[s] || ''
}
function progressBar(p) {
  if (p >= 60) return 'bg-success'
  if (p >= 30) return 'bg-warning'
  return 'bg-error'
}
</script>
