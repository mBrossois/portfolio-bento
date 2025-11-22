<script setup lang="ts">
import { computed } from 'vue';
import IconBack from '@/components/icons/IconBack.vue';
import ImageConstructionDigger from '@/components/icons/ImageConstructionDigger.vue';
import AppText from '@/components/AppText.vue';

const props = defineProps<{
    name:string
    expandedSection: string
    isUnderConstruction?: boolean
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
        <div class="top-bar">        
            <button class="back-button" aria-label="back button" @click.stop="onClose"><IconBack /></button>
        </div>
        <div class="content">
            <div class="content__under-construction" v-if="isExpanded && isUnderConstruction">
                <AppText variant="h1">Under construction</AppText>
                <image-construction-digger />
            </div>
            <slot v-else />
        </div>
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
    flex-direction: column;
    gap: 0;
    width: 100%;
    height: 100%;
    opacity: 1;

    transition: width 300ms ease-in-out, height 300ms ease-in-out, translate 300ms ease-in-out 300ms, opacity 100ms ease-in-out 300ms, gap 300ms ease-in-out;

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

        .top-bar {
            padding: 1rem;
            height: 4rem;
            opacity: 1;

            transition: height 300ms ease-in-out 500ms, opacity 300ms ease-in-out 500ms, padding 300ms ease-in-out 500ms;
        }

        .content {
            overflow: scroll;
        }
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

    .top-bar {
        width: 100%;
        padding: 0;

        overflow: hidden;
        height: 0;
        opacity: 0;

        transition: height 300ms ease-in-out, opacity 300ms ease-in-out, padding 300ms ease-in-out;

        .back-button {
            width: 2rem;
            height: 2rem;

            background-color: unset;
            border: unset;
            outline: unset;

            &:hover {
                cursor: pointer;
            }
        }
    }

    .content {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        gap: 2rem;

        &__under-construction {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
    }
}
</style>