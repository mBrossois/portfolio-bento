<script setup lang="ts">
import type { Component } from 'vue';

interface Images {
    component: Component,
    width: number,
    height: number
}
defineProps<{
    images: Array<Images>
}>()
</script>

<template>
    <div class="image-slider">
        <div>
            <div v-for="image, index in images" :key="index" class="image-slider__container">
                <Component :is="image.component" :height="image.height + 'px'" :width="image.width + 'px'"/>
            </div>
        </div>
        <div class="image-slider__loader mode-transition"></div>
    </div>
</template>

<style scoped lang="scss">
.image-slider {
    width: 10rem;
    height: 10rem;
    overflow: hidden;

    display: flex;
    gap: 1rem;

    &__container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        height: 10rem;
        width: 8rem;

        animation: slide-down 20s ease-in-out infinite;
    }

    &__loader {
        border: 1px solid rgba(var(--foreground-primary-rgb), .5);
        border-radius: 2rem;
        height: 2rem;
        width: .5rem;

        align-self: center;
        overflow: hidden;

        position: relative;

        &::before {
            transition: background var(--mode-transition-timing);
            position: absolute;
            content: '';
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background-color: var(--foreground-primary);

            animation: slide-down-and-up 20s linear infinite;
        }
    }
}

@keyframes slide-down {
    0%, 16.5% {
        translate: 0 -300%;
    } 20%, 49.5% {
        translate: 0 -200%;
    } 53%, 82.5% {
        translate: 0 -100%;
    } 86%, 100% {
        translate: 0 0;
    }
}

@keyframes slide-down-and-up {
     20%, 53%, 86%  {
        translate: 0 0;
    } 0%, 100% {
        translate: 0 50%;
    } 16.5%, 49.5%, 82.5%{
        translate: 0 100%;
    }
}
</style>