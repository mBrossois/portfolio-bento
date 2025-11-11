<script setup lang="ts">
import { computed, ref } from 'vue';

const props = defineProps<{name:string}>()

const isExpanded = ref(false)
const gridSectionClass = computed(() => ([{expanded: isExpanded.value}, props.name]))
function onClick() {
    isExpanded.value = !isExpanded.value
}
</script>

<template>
    <button :class="gridSectionClass" class="grid__section mode-transition" @click="onClick">
        <slot />
    </button>
</template>

<style scoped lang="scss">
@use "/src/assets/style/translate-sections.scss" as *;

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
    width: 100%;
    height: 100%;

    transition: width 300ms ease-in-out, height 300ms ease-in-out, translate 200ms ease-in-out 200ms;

    &.expanded {
        width: 344px;
        height: 632px;

        @media screen and (min-width: $md){
            width: 704px;
            height: 416px;
        }

        @media screen and (min-width: $lg){
            width: 992px;
            height: 560px;
        }

        transition: width 300ms ease-in-out 100ms, height 300ms ease-in-out 100ms, translate 200ms ease-in-out;
    }

    &:not(.expanded):hover {
        background: rgba(var(--foreground-primary-rgb), .33);
        border: 1px solid rgba(var(--foreground-primary-rgb), 0.30);
        cursor: pointer;
    }
}
</style>