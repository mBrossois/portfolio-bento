<script setup lang="ts">
import { computed } from 'vue'
import AppText from '@/components/AppText.vue'
import ImageSlider from '@/components/ImageSlider.vue'
import nuxtIcon from '@/components/icons/LogoNuxt.vue'
import vueIcon from '@/components/icons/LogoVue.vue'
import tsIcon from '@/components/icons/LogoTs.vue'

const props = defineProps<{
    isExpanded: boolean
}>()

const aboutMeClass = computed(() => ({expanded: props.isExpanded}))

const logos = [
    {component: nuxtIcon, alt: 'Nuxt logo', width: 110, height: 71},
    {component: vueIcon, alt: 'Vue logo', width: 82, height: 71},
    {component: tsIcon, alt: 'Ts logo', width: 75, height: 71},
    {component: nuxtIcon, alt: 'Nuxt logo', width: 110, height: 71}
]
</script>

<template>
    <div class="skills" :class="aboutMeClass">
        <div class="skills__header">
            <AppText variant="h1" class="skills__header__title">Skill set</AppText>
            <AppText variant="p" class="skills__header__description hide-s">Technical & other profesional skills</AppText>
        </div>
        <ImageSlider class="skills__slider" :images="logos" />
    </div>
</template>

<style lang="scss" scoped>
.skills {
    transition: width 300ms ease-in-out, height 300ms ease-in-out;
    display: flex;
    gap: 2rem; 
    width: 428px;
    height: 160px;

    &__slider {
        transition: opacity 300ms ease-in-out 400ms;
        opacity: 1;
    }

    &__header {
        transition: width 300ms ease-in-out, height 300ms ease-in-out;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: .5rem;

        height: 160px;
        width: 236px;
        padding-left: 0;
    }
}

.expanded.skills {
    transition: width 500ms ease-in-out 400ms, height 500ms ease-in-out 400ms;
    width: 100%;
    height: 100%;

    .skills {
        &__header {
            transition: width 300ms ease-in-out, height 300ms ease-in-out 400ms, padding-left 300ms ease-in-out 400ms;
            width: 100%;
            height: 72px;
            padding-left: 2rem;
        }

        &__slider {
            transition: opacity 300ms ease-in-out;
            opacity: 0;
        }
    }
}
</style>