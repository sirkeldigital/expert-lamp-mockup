<template>
  <teleport to="body">
    <div v-if="open" class="fixed inset-0 z-[9999] flex" @click.self="$emit('close')">
      <div class="absolute inset-0" style="background:rgba(0,0,0,0.3)" @click="$emit('close')"></div>
      <div class="relative ml-[48px] w-[300px] h-full overflow-y-auto" style="background:var(--color-base-100);box-shadow:4px 0 24px rgba(0,0,0,0.15);border-right:1px solid var(--color-base-300)">
        <!-- Header -->
        <div class="flex items-center justify-between px-4 py-3 border-b" style="border-color:var(--color-base-300)">
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4" style="opacity:0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><circle cx="12" cy="12" r="3"/></svg>
            <h2 class="text-sm font-bold">Settings</h2>
          </div>
          <button class="btn btn-ghost btn-xs" @click="$emit('close')" style="width:28px;height:28px;padding:0;min-width:0">&times;</button>
        </div>

        <!-- Map Settings -->
        <div class="px-4 py-3 border-b" style="border-color:var(--color-base-300)">
          <h3 class="text-[12px] font-semibold mb-3">Pengaturan Peta</h3>
          <div class="flex flex-col gap-2.5">
            <label class="flex items-center justify-between cursor-pointer">
              <span class="text-[12px]">Tampilkan Heatmap</span>
              <input type="checkbox" checked class="checkbox" style="width:16px;height:16px" />
            </label>
            <label class="flex items-center justify-between cursor-pointer">
              <span class="text-[12px]">Tampilkan Sensor</span>
              <input type="checkbox" checked class="checkbox" style="width:16px;height:16px" />
            </label>
            <label class="flex items-center justify-between cursor-pointer">
              <span class="text-[12px]">Tampilkan Polygon Banjir</span>
              <input type="checkbox" checked class="checkbox" style="width:16px;height:16px" />
            </label>
            <label class="flex items-center justify-between cursor-pointer">
              <span class="text-[12px]">Tampilkan Label Jalan</span>
              <input type="checkbox" checked class="checkbox" style="width:16px;height:16px" />
            </label>
          </div>
        </div>

        <!-- Notification Settings -->
        <div class="px-4 py-3 border-b" style="border-color:var(--color-base-300)">
          <h3 class="text-[12px] font-semibold mb-3">Notifikasi</h3>
          <div class="flex flex-col gap-2.5">
            <label class="flex items-center justify-between cursor-pointer">
              <span class="text-[12px]">Alert Bencana</span>
              <input type="checkbox" checked class="checkbox" style="width:16px;height:16px" />
            </label>
            <label class="flex items-center justify-between cursor-pointer">
              <span class="text-[12px]">Update Sensor</span>
              <input type="checkbox" class="checkbox" style="width:16px;height:16px" />
            </label>
            <label class="flex items-center justify-between cursor-pointer">
              <span class="text-[12px]">Laporan Berkala</span>
              <input type="checkbox" checked class="checkbox" style="width:16px;height:16px" />
            </label>
          </div>
        </div>

        <!-- Data Refresh -->
        <div class="px-4 py-3 border-b" style="border-color:var(--color-base-300)">
          <h3 class="text-[12px] font-semibold mb-3">Refresh Data</h3>
          <div class="flex flex-col gap-2">
            <div class="text-[11px]" style="opacity:0.5">Interval auto-refresh</div>
            <select class="input input-sm" style="height:32px;font-size:12px">
              <option>30 detik</option>
              <option selected>1 menit</option>
              <option>5 menit</option>
              <option>10 menit</option>
              <option>Manual</option>
            </select>
          </div>
        </div>

        <!-- Region Selection -->
        <div class="px-4 py-3 border-b" style="border-color:var(--color-base-300)">
          <h3 class="text-[12px] font-semibold mb-3">Wilayah Monitoring</h3>
          <select class="input input-sm w-full mb-2" style="height:32px;font-size:12px">
            <option selected>Kab. Banjar - Kalimantan Selatan</option>
            <option>Kota Banjarmasin</option>
            <option>Kab. Barito Kuala</option>
            <option>Kab. Tanah Laut</option>
            <option>Kab. Hulu Sungai Tengah</option>
          </select>
          <div class="text-[10px]" style="opacity:0.4">Ganti wilayah akan me-refresh seluruh data dashboard</div>
        </div>

        <!-- Account -->
        <div class="px-4 py-3">
          <h3 class="text-[12px] font-semibold mb-3">Akun</h3>
          <div class="flex items-center gap-3 mb-3">
            <div class="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold" style="background:var(--color-primary)">AD</div>
            <div>
              <div class="text-[12px] font-semibold">Admin Dashboard</div>
              <div class="text-[10px]" style="opacity:0.45">admin@kemenko-infra.go.id</div>
            </div>
          </div>
          <button class="btn btn-outline btn-sm w-full">Logout</button>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup>
defineProps({ open: Boolean })
defineEmits(['close'])
</script>
