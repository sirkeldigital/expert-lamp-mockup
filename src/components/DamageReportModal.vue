<template>
  <teleport to="body">
    <div v-if="open" class="fixed inset-0 z-[9999] flex items-center justify-center" style="background:rgba(0,0,0,0.4);backdrop-filter:blur(2px)" @click.self="$emit('close')">
      <div class="card w-[720px] max-h-[85vh] overflow-y-auto" style="padding:0;box-shadow:0 16px 48px rgba(0,0,0,0.2)">
        <!-- Header -->
        <div class="flex items-center justify-between px-5 py-3 border-b" style="border-color:var(--color-base-300)">
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5" style="color:var(--color-error)" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            <h2 class="text-base font-bold">Damage Report - Kab. Banjar</h2>
          </div>
          <button class="btn btn-ghost btn-sm" @click="$emit('close')" style="width:32px;height:32px;padding:0;min-width:0">&times;</button>
        </div>

        <!-- Summary -->
        <div class="px-5 py-4 border-b" style="border-color:var(--color-base-300);background:var(--color-base-200)">
          <div class="grid grid-cols-4 gap-3">
            <div v-for="s in summary" :key="s.label" class="card" style="padding:0.75rem">
              <div class="text-[10px] font-medium uppercase tracking-wider" style="opacity:0.5">{{ s.label }}</div>
              <div class="text-xl font-bold mt-0.5" :style="{ color: s.color }">{{ s.value }}</div>
              <div class="text-[10px] mt-0.5" style="opacity:0.45">{{ s.sub }}</div>
            </div>
          </div>
        </div>

        <!-- Area Detail -->
        <div class="px-5 py-4 border-b" style="border-color:var(--color-base-300)">
          <h3 class="text-[13px] font-semibold mb-3">Detail Kerusakan per Wilayah</h3>
          <div class="flex flex-col gap-2">
            <div v-for="d in damageDetails" :key="d.area" class="card" style="padding:0.75rem">
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full" :style="{ background: d.levelColor }"></span>
                  <span class="text-[13px] font-semibold">{{ d.area }}</span>
                  <span class="badge" :class="d.badgeClass" style="font-size:9px">{{ d.level }}</span>
                </div>
                <span class="text-[11px] font-mono" style="opacity:0.5">{{ d.time }}</span>
              </div>
              <div class="grid grid-cols-3 gap-2">
                <div v-for="stat in d.stats" :key="stat.label">
                  <div class="text-[10px]" style="opacity:0.45">{{ stat.label }}</div>
                  <div class="text-sm font-bold">{{ stat.value }}</div>
                </div>
              </div>
              <p class="text-[11px] mt-2" style="opacity:0.55;line-height:1.5">{{ d.notes }}</p>
            </div>
          </div>
        </div>

        <!-- Infrastructure Damage -->
        <div class="px-5 py-4 border-b" style="border-color:var(--color-base-300)">
          <h3 class="text-[13px] font-semibold mb-3">Kerusakan Infrastruktur</h3>
          <div class="rounded-[var(--radius-box)] border overflow-hidden" style="border-color:var(--color-base-300)">
            <table class="w-full text-[12px]" style="border-collapse:collapse">
              <thead>
                <tr style="background:var(--color-base-200)">
                  <th class="text-left font-semibold px-3 py-2" style="color:var(--color-secondary-content)">Infrastruktur</th>
                  <th class="text-left font-semibold px-3 py-2" style="color:var(--color-secondary-content)">Lokasi</th>
                  <th class="text-center font-semibold px-3 py-2" style="color:var(--color-secondary-content)">Kondisi</th>
                  <th class="text-right font-semibold px-3 py-2" style="color:var(--color-secondary-content)">Est. Biaya</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(inf, i) in infraDamage" :key="i" :style="i < infraDamage.length - 1 ? 'border-bottom:1px solid var(--color-base-300)' : ''">
                  <td class="px-3 py-2 font-medium">{{ inf.name }}</td>
                  <td class="px-3 py-2" style="opacity:0.6">{{ inf.location }}</td>
                  <td class="px-3 py-2 text-center">
                    <span class="badge" :class="inf.badgeClass" style="font-size:10px">{{ inf.condition }}</span>
                  </td>
                  <td class="px-3 py-2 text-right font-mono font-semibold">{{ inf.cost }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Footer -->
        <div class="flex items-center justify-between px-5 py-3">
          <span class="text-[11px]" style="opacity:0.4">Generated: 21 Apr 2026, 14:28 WIB</span>
          <div class="flex gap-2">
            <button class="btn btn-outline btn-sm">Export PDF</button>
            <button class="btn btn-primary btn-sm">Kirim Laporan</button>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup>
defineProps({ open: Boolean })
defineEmits(['close'])

const summary = [
  { label: 'Total Terdampak', value: '1,307', sub: 'Km\u00b2 area', color: 'var(--color-error)' },
  { label: 'Rumah Rusak', value: '342', sub: 'unit bangunan', color: 'var(--color-warning)' },
  { label: 'Pengungsi', value: '1,856', sub: 'jiwa terdata', color: 'var(--color-info)' },
  { label: 'Korban', value: '0', sub: 'meninggal', color: 'var(--color-success)' },
]

const damageDetails = [
  {
    area: 'Martapura', level: 'AWAS', levelColor: '#ee3032', badgeClass: 'badge-error', time: '14:21 WIB',
    stats: [
      { label: 'Luas Banjir', value: '0.379 Km\u00b2' },
      { label: 'Rumah Rusak', value: '186 unit' },
      { label: 'Pengungsi', value: '1,024 jiwa' },
    ],
    notes: 'Genangan setinggi 80-150cm di kawasan permukiman. Jembatan utama retak parah. Akses jalan terputus dari arah selatan.'
  },
  {
    area: 'Sungai Tabuk', level: 'AWAS', levelColor: '#ee3032', badgeClass: 'badge-error', time: '14:18 WIB',
    stats: [
      { label: 'Luas Banjir', value: '1,076 Km\u00b2' },
      { label: 'Rumah Rusak', value: '128 unit' },
      { label: 'Pengungsi', value: '689 jiwa' },
    ],
    notes: 'Tanggul sungai jebol di 2 titik. Sawah 240 hektar terendam. Evakuasi masih berlangsung dengan 3 perahu karet.'
  },
  {
    area: 'Aranio', level: 'WASPADA', levelColor: '#f59e0b', badgeClass: 'badge-warning', time: '14:15 WIB',
    stats: [
      { label: 'Luas Terdampak', value: '0.231 Km\u00b2' },
      { label: 'Rumah Rusak', value: '28 unit' },
      { label: 'Pengungsi', value: '143 jiwa' },
    ],
    notes: 'Longsor kecil di lereng pegunungan. Akses jalan ke desa masih terbuka satu jalur. Perlu pemantauan intensif.'
  },
]

const infraDamage = [
  { name: 'Jembatan Martapura', location: 'KM 8 Jl. Nasional', condition: 'Rusak Berat', badgeClass: 'badge-error', cost: 'Rp 12.5 M' },
  { name: 'Tanggul Sungai Tabuk', location: 'Desa Simpang', condition: 'Jebol', badgeClass: 'badge-error', cost: 'Rp 5.8 M' },
  { name: 'Jalan Akses Aranio', location: 'KM 3-5', condition: 'Rusak Ringan', badgeClass: 'badge-warning', cost: 'Rp 1.2 M' },
  { name: 'PDAM Intake', location: 'Sungai Tabuk Hilir', condition: 'Terganggu', badgeClass: 'badge-soft-warning', cost: 'Rp 0.8 M' },
  { name: 'Jaringan Listrik', location: 'Martapura Timur', condition: 'Terputus', badgeClass: 'badge-error', cost: 'Rp 2.3 M' },
  { name: 'Sekolah SDN 3', location: 'Martapura Kota', condition: 'Terendam', badgeClass: 'badge-warning', cost: 'Rp 0.5 M' },
]
</script>
