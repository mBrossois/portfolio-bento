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
    letter-spacing: .5px;
}

h1 {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: .5px;
    @media screen and (min-width: map.get($screen-sizes, 'lg')) {
        font-size: 2rem;
    }
}

h2 {
    font-size: 1.125rem;
    font-weight: 600;
}
</style>