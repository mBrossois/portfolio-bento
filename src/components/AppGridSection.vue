<script setup lang="ts">
</script>

<template>
    <button class="grid__section">
        <slot />
    </button>
</template>

<style scoped lang="scss">
.grid__section {
    background: #ffffff14;
    border-radius: 16px;
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    border: 1px solid #ffffff24;
    overflow: hidden;
    transition: background ease-in-out 200ms, border ease-in-out 200ms;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    &:hover {
        background: #ffffff33;
        border: 1px solid #ffffff4d;
    }
}
</style>