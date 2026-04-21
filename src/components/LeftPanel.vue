<template>
  <aside class="w-[272px] shrink-0 overflow-y-auto flex flex-col border-r" style="background:var(--color-base-100);border-color:var(--color-base-300)">
    <!-- Disaster Picker -->
    <div class="p-3 border-b" style="border-color:var(--color-base-300)">
      <div class="flex items-center justify-between mb-2">
        <span class="text-[12px] font-semibold">Lokasi Bencana Aktif</span>
        <span class="badge badge-soft-error" style="font-size:9px">{{ disasters.length }} aktif</span>
      </div>
      <div class="flex flex-col gap-1 max-h-[180px] overflow-y-auto pr-1">
        <button v-for="d in disasters" :key="d.id"
          @click="onSelectDisaster(d)"
          class="w-full text-left rounded-[var(--radius-field-sm)] p-2 transition flex items-start gap-2"
          :style="selected.id === d.id
            ? 'background:var(--color-sidebar-active-bg);border:1px solid var(--color-primary)'
            : 'background:transparent;border:1px solid transparent'"
          @mouseenter="$event.currentTarget.style.background = selected.id === d.id ? 'var(--color-sidebar-active-bg)' : 'var(--color-base-200)'"
          @mouseleave="$event.currentTarget.style.background = selected.id === d.id ? 'var(--color-sidebar-active-bg)' : 'transparent'">
          <div class="w-8 h-8 rounded-[var(--radius-field-sm)] flex items-center justify-center text-white text-[11px] font-bold shrink-0"
            :style="{ background: d.severity >= 8 ? 'var(--color-error)' : d.severity >= 7 ? 'var(--color-warning)' : 'var(--color-info)' }">
            {{ d.severity }}
          </div>
          <div class="min-w-0 flex-1">
            <div class="text-[11px] font-semibold truncate">{{ d.regency }}</div>
            <div class="text-[9px] truncate" style="opacity:0.5">{{ d.province }} - {{ d.type }}</div>
          </div>
          <span class="badge shrink-0" style="font-size:8px;padding:0 4px"
            :class="d.severityLabel === 'AWAS' ? 'badge-error' : 'badge-warning'">{{ d.severityLabel }}</span>
        </button>
      </div>
    </div>

    <!-- Selected Disaster Info -->
    <div class="p-3 border-b" style="border-color:var(--color-base-300)">
      <div class="flex items-center justify-between mb-2">
        <h2 class="text-[13px] font-semibold">{{ selected.province }} - {{ selected.regency }}</h2>
      </div>
      <div class="alert flex items-start gap-2.5 mb-2" :class="selected.severity >= 8 ? 'alert-error' : 'alert-warning'" style="padding:0.5rem 0.625rem">
        <div class="w-10 h-10 rounded-[var(--radius-field-sm)] flex items-center justify-center text-white font-extrabold text-base shrink-0"
          :style="{ background: selected.severity >= 8 ? 'var(--color-error)' : 'var(--color-warning)' }">{{ selected.severity }}</div>
        <div class="min-w-0">
          <div class="text-[13px] font-bold leading-tight" :style="{ color: selected.severity >= 8 ? 'var(--color-error)' : '#b45309' }">{{ selected.type }}</div>
          <div class="text-[11px] mt-0.5" style="opacity:0.55">Last Updated: Today, {{ selected.updatedAt }}</div>
        </div>
      </div>
    </div>

    <!-- Affected Area Table (clickable rows) -->
    <div class="p-3 border-b" style="border-color:var(--color-base-300)">
      <div class="flex items-center gap-1.5 mb-2">
        <svg class="w-3.5 h-3.5" style="opacity:0.4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 6h16M4 10h16M4 14h16M4 18h16"/></svg>
        <span class="text-[12px] font-semibold">Affected Area</span>
      </div>
      <div class="rounded-[var(--radius-box)] border overflow-hidden" style="border-color:var(--color-base-300)">
        <table class="w-full text-[11px]" style="border-collapse:collapse">
          <thead>
            <tr style="background:var(--color-base-200)">
              <th class="text-left font-semibold px-2.5 py-1.5" style="color:var(--color-secondary-content)">Daerah</th>
              <th class="text-right font-semibold px-2 py-1.5" style="color:var(--color-secondary-content)">Area</th>
              <th class="text-center font-semibold px-2 py-1.5" style="color:var(--color-secondary-content);width:46px"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(a, i) in selected.affected" :key="a.name"
              class="cursor-pointer transition"
              :style="i < selected.affected.length - 1 ? 'border-bottom:1px solid var(--color-base-300)' : ''"
              @mouseenter="$event.currentTarget.style.background = 'var(--color-base-200)'"
              @mouseleave="$event.currentTarget.style.background = 'transparent'"
              @click="zoomToArea(i)">
              <td class="px-2.5 py-1.5">
                <div class="font-medium text-[11px]">{{ a.name }}</div>
                <div class="text-[9px]" style="opacity:0.4">{{ a.sub }}</div>
              </td>
              <td class="px-2 py-1.5 text-right font-mono text-[10px]">{{ a.area }}</td>
              <td class="px-2 py-1.5 text-center">
                <span class="badge" :class="a.status === 'AWAS' ? 'badge-error' : 'badge-warning'" style="font-size:8px;padding:1px 4px">{{ a.status }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="text-[9px] mt-1 text-center" style="opacity:0.35">Klik baris untuk zoom ke area</div>
    </div>

    <!-- Water Level -->
    <div v-if="selected.waterLevels.length" class="p-3 border-b" style="border-color:var(--color-base-300)">
      <div class="flex items-center gap-1.5 mb-2">
        <svg class="w-3.5 h-3.5" style="color:var(--color-info)" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22c-4 0-8-2-8-6 0-6 8-14 8-14s8 8 8 14c0 4-4 6-8 6z"/></svg>
        <span class="text-[12px] font-semibold">Tinggi Muka Air</span>
      </div>
      <div class="flex flex-col gap-1.5">
        <div v-for="w in selected.waterLevels" :key="w.station" class="flex items-center justify-between">
          <span class="text-[11px] truncate mr-2">{{ w.station }}</span>
          <div class="flex items-center gap-1.5 shrink-0">
            <span class="text-[12px] font-bold" :style="{ color: w.color }">{{ w.level }}</span>
            <span class="badge" style="font-size:8px;padding:0 4px" :class="w.status.includes('3') ? 'badge-error' : w.status.includes('2') ? 'badge-warning' : 'badge-soft-success'">{{ w.status }}</span>
          </div>
        </div>
      </div>
      <!-- Chart -->
      <div class="mt-2 flex items-end gap-[2px]" style="height:28px">
        <div v-for="(h, i) in selected.waterChart" :key="i"
          class="flex-1 rounded-t-sm"
          :style="{ height: h + '%', background: h > 70 ? 'var(--color-error)' : h > 50 ? 'var(--color-warning)' : 'var(--color-info)', opacity: 0.7 }">
        </div>
      </div>
      <div class="flex justify-between text-[8px] mt-0.5" style="opacity:0.25"><span>06:00</span><span>14:00</span></div>
    </div>

    <!-- Weather -->
    <div class="p-3 border-b" style="border-color:var(--color-base-300)">
      <div class="flex items-center gap-1.5 mb-2">
        <svg class="w-3.5 h-3.5" style="color:var(--color-warning)" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 15h18M3 19h18M8 12a4 4 0 118 0"/></svg>
        <span class="text-[12px] font-semibold">Cuaca</span>
      </div>
      <div class="grid grid-cols-3 gap-1 text-center">
        <div><div class="text-[9px]" style="opacity:0.4">Suhu</div><div class="text-[13px] font-bold">{{ selected.weather.temp }}°C</div></div>
        <div><div class="text-[9px]" style="opacity:0.4">Hujan</div><div class="text-[13px] font-bold">{{ selected.rainfall }}<span class="text-[9px] font-normal">mm/h</span></div></div>
        <div><div class="text-[9px]" style="opacity:0.4">Angin</div><div class="text-[13px] font-bold">{{ selected.weather.wind }}<span class="text-[9px] font-normal">km/h</span></div></div>
      </div>
    </div>

    <!-- Recent Events -->
    <div class="p-3 border-b" style="border-color:var(--color-base-300)">
      <div class="flex items-center gap-1.5 mb-2">
        <svg class="w-3.5 h-3.5" style="opacity:0.4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
        <span class="text-[12px] font-semibold">Kejadian Terkini</span>
      </div>
      <div class="flex flex-col gap-1.5">
        <div v-for="ev in selected.events" :key="ev.time" class="flex gap-2">
          <div class="flex flex-col items-center shrink-0">
            <span class="w-[6px] h-[6px] rounded-full mt-1" :style="{ background: ev.color }"></span>
            <div class="w-px flex-1" style="background:var(--color-base-300)"></div>
          </div>
          <div class="pb-1.5">
            <span class="text-[9px] font-mono" style="opacity:0.35">{{ ev.time }}</span>
            <div class="text-[10px] leading-snug">{{ ev.text }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="p-3 mt-auto">
      <button class="btn btn-error w-full" style="height:36px" @click="$emit('openReport')">View Damage Report</button>
    </div>
  </aside>
</template>

<script setup>
import { computed } from 'vue'
import { disasters } from '../data/disasters.js'
import { selectedDisaster, selectDisaster, mapRef } from '../store.js'

defineEmits(['openReport'])

const selected = computed(() => selectedDisaster.value)

function onSelectDisaster(d) {
  selectDisaster(d)
  if (mapRef.value) {
    mapRef.value.flyTo(d.center, d.zoom, { duration: 1.5 })
  }
}

function zoomToArea(idx) {
  const poly = selected.value.polygons?.[idx]
  if (poly && mapRef.value) {
    const bounds = poly.coords
    mapRef.value.flyToBounds(bounds, { padding: [40, 40], duration: 1 })
  }
}
</script>
