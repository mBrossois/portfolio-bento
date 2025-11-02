<script setup lang="ts">
import { computed, ref } from 'vue';
import AppBackground from '@/components/AppBackground.vue';
import AppGrid from '@/components/AppGrid.vue';
import AppModeToggle from '@/components/AppModeToggle.vue';
import { useCookies } from '@vueuse/integrations/useCookies'

const isDarkMode = ref(false)

const cookies = useCookies(['mode'])
if(cookies.get('mode')) {
    isDarkMode.value = cookies.get('mode') === 'dark'
// If browser default is dark mode
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    isDarkMode.value = true
    cookies.set('mode', 'dark')
} else {
    cookies.set('mode', 'light')
}

const modeClass = computed(() => isDarkMode.value ? 'dark' : 'light')

function setDarkMode(value: boolean) {
  isDarkMode.value = value
}
</script>

<template>
  <div :class="modeClass">
    <AppBackground :isDarkMode="isDarkMode" />
    <div class="mode-toggle relative">
      <AppModeToggle :is-initial-dark-mode="isDarkMode" @update="setDarkMode" />
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