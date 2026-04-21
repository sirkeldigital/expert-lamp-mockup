<template>
  <nav class="tabs shrink-0 px-4" style="background:var(--color-base-100)">
    <button v-for="t in tabs" :key="t.id"
      @click="$emit('change', t.id)"
      class="tab"
      :class="{ 'tab-active': activeTab === t.id }">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" v-html="t.iconPath"></svg>
      {{ t.label }}
    </button>
  </nav>
</template>

<script setup>
defineProps({ activeTab: String })
defineEmits(['change'])

const tabs = [
  { id: 'home', label: 'Home', iconPath: '<path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4"/>' },
  { id: 'projects', label: 'Projects', iconPath: '<path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>' },
  { id: 'tender', label: 'Tender', iconPath: '<path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>' },
  { id: 'risk', label: 'Risk', iconPath: '<path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"/>' },
]
</script>
