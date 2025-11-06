<script setup lang="ts">
import AppGridSection from '@/components/AppGridSection.vue';
import SectionExperience from '@/components/sections/SectionExperience.vue';
import SectionLearning from '@/components/sections/SectionLearning.vue';
import ImageSlider from '@/components/ImageSlider.vue';
import AppText from '@/components/AppText.vue'
import nuxtIcon from '@/components/icons/LogoNuxt.vue';
import vueIcon from '@/components/icons/LogoVue.vue';
import tsIcon from '@/components/icons/LogoTs.vue';

const logos = [
    {component: nuxtIcon, alt: 'Nuxt logo', width: 110, height: 71},
    {component: vueIcon, alt: 'Vue logo', width: 82, height: 71},
    {component: tsIcon, alt: 'Ts logo', width: 75, height: 71},
    {component: nuxtIcon, alt: 'Nuxt logo', width: 110, height: 71}
]
</script>

<template>
    <div class="grid">
        <AppGridSection 
            class="grid-row-1-3 grid-col-1-3
                md-grid-row-1-3 md-grid-col-1-4
        ">
            <!-- <p class="grid__title">About me</p> -->
            <img class="grid__me" src="@/assets/img/me_anime.png" height="150px" width="100px" alt="Me in anime style" />
        </AppGridSection>

        <AppGridSection 
            class="grid-row-1-3 grid-col-3-6
                md-gid-row-1-3 md-grid-col-4-8
            ">
            <div class="grid__content">
                <AppText variant="h1" class="grid__title">Projects</AppText>
                <AppText variant="p" class="grid__description">From an intergrated Nuxt mocking service to a wedding website</AppText>
            </div>
        </AppGridSection>
        
        <AppGridSection 
            class="grid-row-3-6 grid-col-1-6
                md-grid-row-3-5 md-grid-col-1-8"
        >
            <div class="grid__content">
                <AppText variant="h1" class="grid__title">Skill set</AppText>
                <AppText variant="p" class="grid__description hide-s">Technical & other profesional skills</AppText>
            </div>
            <ImageSlider :images="logos" />
        </AppGridSection>
        
        <AppGridSection 
            class="grid-row-6-10 grid-col-1-3
                md-grid-row-1-5 md-grid-col-8-11
        ">
            <SectionExperience />
        </AppGridSection>

        <AppGridSection 
            class="grid-row-6-8 grid-col-3-6
                md-grid-row-5-7 md-grid-col-1-7
        ">
            <SectionLearning />
        </AppGridSection>

        <AppGridSection 
            class="grid__section grid-row-8-10 grid-col-3-6
                md-grid-row-5-7 md-grid-col-7-11
        ">
            <div class="grid__as-button">
                <AppText variant="h1" class="grid__title">Contact me</AppText>
            </div>
        </AppGridSection>
    </div>
</template>

<style scoped lang="scss">
@use '../assets/style/screen-sizes.scss' as *;
@use "sass:map";

.grid {
    display: grid;
    grid-template-rows: repeat(9, 3.5rem);
    grid-template-columns: repeat(5, 3.5rem);
    gap: 1rem;

    padding-bottom: 1rem;
    justify-content: center;

    @media screen and (min-width: map.get($screen-sizes, 'm')) {
            grid-template-columns: repeat(10, 3.5rem);
            grid-template-rows: repeat(6, 3.5rem);
    }

    &__content {
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }

    &__description {
        width: 10rem;

        @media screen and (min-width: map.get($screen-sizes, 'm')) {
            width: 16rem;
        }
    }

    &__me {
        margin-top: 3rem;
    }

    &__as-button {
        transition: background-color var(--mode-transition-timing), border var(--mode-transition-timing);
        border-radius: 8px;
        height: 3rem;
        width: 10rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--bg-secondary);
        border: 4px solid var(--bg-secondary);
        box-shadow: 1px 1px 10px 0px #00000080;
    }
}
</style>