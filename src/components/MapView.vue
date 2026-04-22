<template>
  <div class="flex-1 relative min-h-0">
    <div ref="mapContainer" class="absolute inset-0 z-0"></div>

    <!-- Quick Summary Cards -->
    <div class="absolute top-3 left-1/2 -translate-x-1/2 z-[1000] flex items-center gap-2">
      <div v-for="s in quickStats" :key="s.label" class="card flex items-center gap-2 cursor-default" style="padding:0.375rem 0.75rem;box-shadow:0 2px 8px rgba(0,0,0,0.1)">
        <span class="w-2 h-2 rounded-full" :style="{ background: s.color }"></span>
        <span class="text-[10px] font-medium" style="opacity:0.5">{{ s.label }}</span>
        <span class="text-[13px] font-bold">{{ s.value }}</span>
      </div>
    </div>

    <!-- Layer Filter -->
    <div class="absolute top-14 left-3 z-[1000] card" style="padding:0;width:190px;box-shadow:0 2px 8px rgba(0,0,0,0.1)">
      <button class="flex items-center justify-between w-full px-3 py-2 text-[11px] font-semibold" @click="showFilters = !showFilters"
        style="border-bottom:1px solid var(--color-base-300)">
        <span class="flex items-center gap-1.5">
          <svg class="w-3.5 h-3.5" style="opacity:0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
          Layer Filter
        </span>
        <svg class="w-3 h-3 transition" :style="{ transform: showFilters ? 'rotate(180deg)' : '' }" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"/></svg>
      </button>
      <div v-show="showFilters" class="px-2 py-2 flex flex-col gap-1">
        <label v-for="layer in layers" :key="layer.id"
          class="flex items-center gap-2 px-1.5 py-1 rounded-[var(--radius-field-sm)] cursor-pointer transition text-[11px]"
          @mouseenter="$event.currentTarget.style.background='var(--color-base-200)'"
          @mouseleave="$event.currentTarget.style.background='transparent'">
          <div class="relative w-7 h-4 rounded-full transition cursor-pointer shrink-0"
            :style="{ background: layer.visible ? layer.color : 'var(--color-base-300)' }"
            @click.prevent="layer.visible=!layer.visible;toggleLayer(layer)">
            <div class="absolute top-0.5 w-3 h-3 rounded-full bg-white shadow transition-all"
              :style="{ left: layer.visible ? '13px' : '2px' }"></div>
          </div>
          <span class="flex-1">{{ layer.label }}</span>
          <svg class="w-3.5 h-3.5 shrink-0" :style="{ color: layer.color }" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path :d="layer.icon"/></svg>
        </label>
      </div>
    </div>

    <!-- Map Style Switcher -->
    <div class="absolute top-14 right-3 z-[1000] card" style="padding:0;box-shadow:0 2px 8px rgba(0,0,0,0.1)">
      <div class="grid grid-cols-6 gap-0.5 p-1">
        <button v-for="mode in mapModes" :key="mode.id"
          @click="switchMapMode(mode.id)"
          class="px-2 py-1.5 rounded-[var(--radius-field-sm)] text-[9px] font-semibold transition text-center"
          :style="activeMapMode === mode.id
            ? 'background:var(--color-primary);color:white'
            : 'background:transparent;color:inherit;opacity:0.6'"
          @mouseenter="activeMapMode !== mode.id &amp;&amp; ($event.currentTarget.style.background='var(--color-base-200)')"
          @mouseleave="activeMapMode !== mode.id &amp;&amp; ($event.currentTarget.style.background='transparent')">
          {{ mode.label }}
        </button>
      </div>
    </div>

    <!-- Bottom Legend -->
    <div class="card absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-4 px-3 py-1.5 z-[1000]" style="box-shadow:0 2px 8px rgba(0,0,0,0.1)">
      <div class="flex items-center gap-1.5 text-[10px]"><span class="w-3 h-2 rounded-sm" style="background:rgba(238,48,50,0.35);border:1px solid rgba(238,48,50,0.5)"></span> Area Bencana</div>
      <div class="flex items-center gap-1.5 text-[10px]"><span class="w-2.5 h-2.5 rounded-full" style="background:var(--color-warning)"></span> Darurat</div>
      <div class="flex items-center gap-1.5 text-[10px]"><span class="w-2.5 h-2.5 rounded-full" style="background:#8b5cf6"></span> Sensor</div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, watch, computed } from 'vue'
import L from 'leaflet'
import 'leaflet.heat'
import 'leaflet-relief'
import { selectedDisaster, mapRef } from '../store.js'
import { generateHeatmap, generateSensors } from '../data/disasters.js'

const mapContainer = ref(null)
const showFilters = ref(true)
let mapInstance = null
const layerGroups = {}
let activeTileLayer = null
let reliefLayer = null
const activeMapMode = ref('satellite')

const mapModes = [
  { id: 'satellite', label: 'Satellite', url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', maxZoom: 20 },
  { id: 'terrain', label: 'Terrain', url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}', maxZoom: 20 },
  { id: 'topo', label: 'Topo', url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', maxZoom: 17 },
  { id: 'dem', label: 'DEM' },
  { id: 'dark', label: 'Dark', url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', maxZoom: 20 },
  { id: 'night', label: 'Night', url: 'https://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default/GoogleMapsCompatible_Level8/{z}/{y}/{x}.jpg', maxZoom: 8 },
  { id: 'esri', label: 'Esri', url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', maxZoom: 19 },
  { id: 'roads', label: 'Roads', url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', maxZoom: 20 },
  { id: 'hillshade', label: 'Hillshade' },
  { id: 'hot', label: 'HOT', url: 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', maxZoom: 19 },
  { id: 'shaded', label: 'Shaded', url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}', maxZoom: 13 },
  { id: 'light', label: 'Light', url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', maxZoom: 20 },
]

function switchMapMode(modeId) {
  if (!mapInstance || activeMapMode.value === modeId) return
  activeMapMode.value = modeId

  if (reliefLayer) { mapInstance.removeLayer(reliefLayer); reliefLayer = null }
  if (activeTileLayer) mapInstance.removeLayer(activeTileLayer)

  if (modeId === 'dem') {
    activeTileLayer = L.tileLayer('https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', { maxZoom: 20 }).addTo(mapInstance)
    reliefLayer = new L.GridLayer.Relief({ mode: 'slope', opacity: 0.55, slopeColorScheme: 'earth' }).addTo(mapInstance)
  } else if (modeId === 'hillshade') {
    activeTileLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', { maxZoom: 19 }).addTo(mapInstance)
    reliefLayer = new L.GridLayer.Relief({ mode: 'hillshade', opacity: 0.45 }).addTo(mapInstance)
  } else {
    const mode = mapModes.find(m => m.id === modeId)
    activeTileLayer = L.tileLayer(mode.url, { maxZoom: mode.maxZoom }).addTo(mapInstance)
  }
}

const d = computed(() => selectedDisaster.value)

const quickStats = computed(() => [
  { label: 'Bencana Aktif', value: '10', color: 'var(--color-error)' },
  { label: 'Pengungsi', value: d.value.stats.refugees.toLocaleString(), color: 'var(--color-warning)' },
  { label: 'Area', value: d.value.stats.floodArea + ' Km\u00b2', color: 'var(--color-info)' },
  { label: 'Korban', value: d.value.stats.deaths, color: d.value.stats.deaths > 0 ? 'var(--color-error)' : 'var(--color-success)' },
])

const layers = reactive([
  { id: 'flood', label: 'Area Bencana', color: '#ee3032', visible: true, icon: 'M4 4h16v16H4z' },
  { id: 'heatmap', label: 'Heatmap', color: '#f59e0b', visible: true, icon: 'M17.657 18.657A8 8 0 016.343 7.343' },
  { id: 'markers', label: 'Markers', color: '#025097', visible: true, icon: 'M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' },
  { id: 'sensors', label: 'Sensor', color: '#8b5cf6', visible: true, icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6m6 0h6m-6 0V9a2 2 0 012-2h2a2 2 0 012 2v10' },
])

function toggleLayer(layer) {
  const lg = layerGroups[layer.id]
  if (!lg || !mapInstance) return
  layer.visible ? lg.addTo(mapInstance) : mapInstance.removeLayer(lg)
}

function createIcon(type) {
  const cfg = { bridge:{bg:'#ee3032',t:'!',s:26}, truck:{bg:'#025097',t:'\u25B6',s:20}, excavator:{bg:'#d97706',t:'\u2692',s:20}, house:{bg:'#ee3032',t:'\u25B2',s:18}, warning:{bg:'#f59e0b',t:'!',s:24}, traffic:{bg:'#ef4444',t:'\u25A0',s:22}, road_damage:{bg:'#b91c1c',t:'\u2716',s:22} }
  const c = cfg[type]||cfg.warning
  return L.divIcon({ className:'custom-marker', html:`<div style="width:${c.s}px;height:${c.s}px;background:${c.bg};border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:${c.s*0.4}px;color:white;box-shadow:0 1px 4px rgba(0,0,0,0.3);border:2px solid white;cursor:pointer">${c.t}</div>`, iconSize:[c.s,c.s], iconAnchor:[c.s/2,c.s/2] })
}

function sensorIcon(status) {
  const bg = {critical:'#ee3032',warning:'#f59e0b',active:'#22c55e'}[status]||'#8b5cf6'
  return L.divIcon({ className:'custom-marker', html:`<div style="width:10px;height:10px;background:${bg};border-radius:50%;border:2px solid white;box-shadow:0 0 6px ${bg}80;cursor:pointer"></div>`, iconSize:[10,10], iconAnchor:[5,5] })
}

function clearLayers() {
  ['flood','heatmap','markers','sensors'].forEach(k => {
    if (layerGroups[k]) { mapInstance.removeLayer(layerGroups[k]); delete layerGroups[k] }
  })
}

function renderDisaster() {
  if (!mapInstance) return
  clearLayers()
  const dv = d.value

  // Polygons
  const fg = L.layerGroup()
  dv.polygons.forEach(p => {
    L.polygon(p.coords, { color: p.color.replace('80','cc'), fillColor: p.color, fillOpacity: 0.25, weight: 2 })
      .addTo(fg)
      .bindPopup(`<div style="font-family:Inter,sans-serif"><b>${p.name}</b><br><span style="opacity:0.6">Severity: ${p.sev}</span></div>`)
  })
  if (layers.find(l=>l.id==='flood').visible) fg.addTo(mapInstance)
  layerGroups['flood'] = fg

  // Heatmap (per disaster)
  const hg = L.layerGroup()
  const heatData = generateHeatmap(dv)
  if (L.heatLayer) {
    L.heatLayer(heatData, {
      radius: 25, blur: 15, maxZoom: 15,
      gradient: {0:'transparent',0.2:'#3b82f680',0.4:'#22c55e80',0.6:'#f59e0b80',0.8:'#ef444480',1:'#dc262680'}
    }).addTo(hg)
  }
  if (layers.find(l=>l.id==='heatmap').visible) hg.addTo(mapInstance)
  layerGroups['heatmap'] = hg

  // Markers
  const mg = L.layerGroup()
  dv.markers.forEach(m => {
    const mk = L.marker(m.pos, { icon: createIcon(m.type) }).addTo(mg)
    mk.bindPopup(`<div style="font-family:Inter,sans-serif;min-width:140px"><b>${m.name}</b><br><span style="opacity:0.6">${m.status}</span></div>`)
    if (m.type === 'bridge') {
      mk.bindTooltip(`<div style="font-weight:600;color:#ee3032;font-size:11px">${m.name}</div><div style="font-size:9px;opacity:0.6">${m.status}</div>`,
        { permanent:true, direction:'top', offset:[0,-14], className:'bridge-tip' })
    }
  })
  if (layers.find(l=>l.id==='markers').visible) mg.addTo(mapInstance)
  layerGroups['markers'] = mg

  // Sensors (per disaster)
  const sg = L.layerGroup()
  const sensors = generateSensors(dv)
  sensors.forEach(s => {
    const mk = L.marker(s.position, { icon: sensorIcon(s.status) }).addTo(sg)
    const sc = {critical:'#ee3032',warning:'#f59e0b',active:'#22c55e'}[s.status]||'#8b5cf6'
    const statusLabel = {critical:'CRITICAL',warning:'WARNING',active:'NORMAL'}[s.status]||s.status
    mk.bindPopup(`<div style="min-width:200px;font-family:Inter,sans-serif;font-size:12px">
      <div style="display:flex;align-items:center;gap:5px;margin-bottom:4px"><span style="width:7px;height:7px;border-radius:50%;background:${sc};display:inline-block"></span><b>${s.name}</b></div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px"><span style="font-size:18px;font-weight:800">${s.value}</span><span style="font-size:9px;font-weight:700;padding:2px 6px;border-radius:4px;background:${sc}18;color:${sc};border:1px solid ${sc}30">${statusLabel}</span></div>
      <div style="font-size:11px;opacity:0.6;line-height:1.4">${s.detail}</div>
      <div style="font-size:9px;opacity:0.35;margin-top:4px;border-top:1px solid #e5e7eb;padding-top:3px">${s.lastUpdate} | ${s.id}</div>
    </div>`)
  })
  if (layers.find(l=>l.id==='sensors').visible) sg.addTo(mapInstance)
  layerGroups['sensors'] = sg
}

watch(d, () => {
  if (!mapInstance) return
  mapInstance.flyTo(d.value.center, d.value.zoom, { duration: 1.5 })
  setTimeout(renderDisaster, 200)
})

onMounted(() => {
  const map = L.map(mapContainer.value, { center: d.value.center, zoom: d.value.zoom, zoomControl: false, attributionControl: false })
  mapInstance = map
  mapRef.value = map
  activeTileLayer = L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', { maxZoom: 20 }).addTo(map)
  L.control.zoom({ position: 'topright' }).addTo(map)
  renderDisaster()
})
</script>

<style>
.bridge-tip { background:white!important; border:1px solid #ee3032!important; border-radius:0.5rem!important; padding:4px 8px!important; box-shadow:0 2px 8px rgba(0,0,0,0.12)!important; color:#1e293b!important; font-family:Inter,sans-serif!important }
.bridge-tip::before { border-top-color:#ee3032!important }
.leaflet-popup-content-wrapper { background:white!important; border-radius:0.5rem!important; box-shadow:0 4px 16px rgba(0,0,0,0.12)!important; border:1px solid #e5e7eb!important }
.leaflet-popup-tip { background:white!important }
.leaflet-popup-content { margin:8px 10px!important }
</style>
