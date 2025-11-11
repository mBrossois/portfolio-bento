<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    name:string
    expandedSection: string
}>()

const emit = defineEmits<{
    (e: 'setSelected', name: string): void
}>()

const isExpanded = computed(() => props.expandedSection === props.name)
const isOtherExpanded = computed(() => props.expandedSection !== '' && !isExpanded.value)
const gridSectionClass = computed(() => ([{expand: isExpanded.value, 'translate-out': isOtherExpanded.value}, props.name]))
function onOpen() {
    emit('setSelected', props.name)
}
function onClose() {
    emit('setSelected', '')
}
</script>

<template>
    <div role="button" tabindex="0" :aria-pressed="isExpanded" :class="gridSectionClass" class="grid__section mode-transition" @click="onOpen">
        <button v-show="isExpanded" @click.stop="onClose">Back</button>
        <slot />
    </div>
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
    opacity: 1;

    transition: width 300ms ease-in-out, height 300ms ease-in-out, translate 300ms ease-in-out 300ms, opacity 100ms ease-in-out 300ms;

    &.expand {
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

        transition: width 500ms ease-in-out 400ms, height 500ms ease-in-out 400ms, translate 300ms ease-in-out 100ms;
    }

    &.translate-out {
        opacity: 0;
        transition: translate 300ms ease-in-out, opacity 100ms ease-in-out 200ms;
    }

    &:not(.expand):hover {
        background: rgba(var(--foreground-primary-rgb), .33);
        border: 1px solid rgba(var(--foreground-primary-rgb), 0.30);
        cursor: pointer;
    }
}
</style>