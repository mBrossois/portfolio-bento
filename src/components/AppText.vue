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
.text {
    color: var(--foreground-primary);
}

p {
    font-size: 1rem;
}

h1 {
    font-size: 1.25rem;
    font-weight: 600;
}

h2 {
    font-size: 1.125rem;
    font-weight: 600;
}
</style>