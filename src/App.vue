<script setup lang="ts">
import { computed, ref } from 'vue';
import AppBackground from '@/components/AppBackground.vue';
import AppGrid from '@/components/AppGrid.vue';
import AppModeToggle from '@/components/AppModeToggle.vue';

const isDarkMode = ref(false)

const modeClass = computed(() => isDarkMode.value ? 'dark' : 'light')

function setDarkMode(value: boolean) {
  isDarkMode.value = value
}
</script>

<template>
  <div :class="modeClass">
    <AppBackground :isDarkMode="isDarkMode" />
    <div class="mode-toggle relative">
      <AppModeToggle @update="setDarkMode" />
    </div>
    <AppGrid />
  </div>
</template>

<style lang="scss" scoped>
.mode-toggle {
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
}
</style>