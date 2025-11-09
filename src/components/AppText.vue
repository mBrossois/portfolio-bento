<script setup lang="ts">
defineSlots<{
    default: string
}>()

defineProps<{
    variant: 'p' | 'h1' | 'h2'
}>()
</script>

<template>
    <component :is="variant" class="text mode-transition">
        <slot />
    </component>
</template>

<style scoped lang="scss">
@use "sass:map";

.text {
    color: var(--foreground-primary);
}

p {
    font-size: 1rem;
}

h1 {
    font-size: 1.25rem;
    font-weight: 600;
    @media screen and (min-width: map.get($screen-sizes, 'lg')) {
        font-size: 1.75rem;
    }
}

h2 {
    font-size: 1.125rem;
    font-weight: 600;
}
</style>