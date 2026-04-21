<template>
  <div class="h-screen w-screen flex overflow-hidden" style="background:var(--color-base-200)">
    <Sidebar @openSettings="showSettings = true" />
    <div class="flex-1 flex flex-col min-w-0">
      <HeaderBar />
      <TabNav :activeTab="activeTab" @change="activeTab = $event" />
      <div class="flex-1 flex min-h-0 overflow-hidden">
        <template v-if="activeTab === 'home'">
          <LeftPanel @openReport="showReport = true" />
          <div class="flex-1 flex flex-col min-w-0">
            <MapView class="flex-1" />
            <BottomStats />
          </div>
          <RightPanel />
        </template>
        <ProjectsTab v-else-if="activeTab === 'projects'" />
        <TenderTab v-else-if="activeTab === 'tender'" />
        <RiskTab v-else-if="activeTab === 'risk'" />
      </div>
    </div>
    <DamageReportModal :open="showReport" @close="showReport = false" />
    <SettingsPanel :open="showSettings" @close="showSettings = false" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Sidebar from './components/Sidebar.vue'
import HeaderBar from './components/HeaderBar.vue'
import TabNav from './components/TabNav.vue'
import LeftPanel from './components/LeftPanel.vue'
import MapView from './components/MapView.vue'
import BottomStats from './components/BottomStats.vue'
import RightPanel from './components/RightPanel.vue'
import ProjectsTab from './components/ProjectsTab.vue'
import TenderTab from './components/TenderTab.vue'
import RiskTab from './components/RiskTab.vue'
import DamageReportModal from './components/DamageReportModal.vue'
import SettingsPanel from './components/SettingsPanel.vue'

const activeTab = ref('home')
const showReport = ref(false)
const showSettings = ref(false)
</script>
