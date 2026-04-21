<template>
  <aside class="shrink-0 flex flex-col items-center border-r" style="width:48px;background:var(--color-base-100);border-color:var(--color-base-300)">
    <div class="flex items-center justify-center" style="height:44px;border-bottom:1px solid var(--color-base-300);width:100%">
      <div class="w-7 h-7 rounded-full flex items-center justify-center" style="background:var(--color-primary)">
        <svg class="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
      </div>
    </div>

    <nav class="flex flex-col items-center gap-1 py-2 flex-1">
      <button v-for="(item, i) in navItems" :key="i"
        class="w-10 h-10 rounded-[var(--radius-field-md)] flex flex-col items-center justify-center gap-0.5 transition relative"
        :style="item.active
          ? 'background:var(--color-sidebar-active-bg);color:var(--color-sidebar-active-text)'
          : 'color:var(--color-secondary-content)'
        "
        @mouseenter="$event.currentTarget.style.background = item.active ? 'var(--color-sidebar-active-bg)' : 'var(--color-sidebar-hover-bg)'"
        @mouseleave="$event.currentTarget.style.background = item.active ? 'var(--color-sidebar-active-bg)' : 'transparent'">
        <div v-if="item.active" class="absolute left-0 top-1.5 bottom-1.5 w-[2.5px] rounded-r" style="background:var(--color-sidebar-active-border)"></div>
        <svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path :d="item.icon" /></svg>
        <span v-if="item.label" class="text-[8px] font-medium leading-none">{{ item.label }}</span>
      </button>
    </nav>

    <div class="flex flex-col items-center gap-1 pb-2" style="border-top:1px solid var(--color-base-300);padding-top:0.5rem;width:100%">
      <button class="w-10 h-10 rounded-[var(--radius-field-md)] flex items-center justify-center transition"
        style="color:var(--color-secondary-content)"
        @mouseenter="$event.currentTarget.style.background = 'var(--color-sidebar-hover-bg)'"
        @mouseleave="$event.currentTarget.style.background = 'transparent'">
        <svg class="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>
      </button>
      <button class="w-10 h-10 rounded-[var(--radius-field-md)] flex items-center justify-center transition"
        style="color:var(--color-secondary-content)"
        @mouseenter="$event.currentTarget.style.background = 'var(--color-sidebar-hover-bg)'"
        @mouseleave="$event.currentTarget.style.background = 'transparent'"
        @click="$emit('openSettings')">
        <svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><circle cx="12" cy="12" r="3"/></svg>
      </button>
    </div>
  </aside>
</template>

<script setup>
defineEmits(['openSettings'])

const navItems = [
  { icon: 'M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z', label: '', active: false },
  { icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1', label: 'Home', active: true },
  { icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4', label: 'PU', active: false },
  { icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4', label: 'Projects', active: false },
  { icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4', label: 'PU', active: false },
  { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', label: 'SU', active: false },
]
</script>
