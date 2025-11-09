<script setup lang="ts">
</script>

<template>
    <button class="grid__section mode-transition">
        <slot />
    </button>
</template>

<style scoped lang="scss">
.grid__section {
    background: rgba(var(--foreground-primary-rgb), .14);
    border-radius: 16px;
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    border: 1px solid rgba(var(--foreground-primary-rgb), .24);
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    &:hover {
        background: rgba(var(--foreground-primary-rgb), .33);
        border: 1px solid rgba(var(--foreground-primary-rgb), 0.30);
        cursor: pointer;
    }
}
</style>