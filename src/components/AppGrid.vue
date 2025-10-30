<script setup lang="ts">
import AppGridSection from '@/components/AppGridSection.vue';
import ImageSlider from '@/components/ImageSlider.vue';
import AppText from '@/components/AppText.vue'
import nuxtIcon from '@/components/icons/NuxtLogo.vue';
import vueIcon from '@/components/icons/VueLogo.vue';
import tsIcon from '@/components/icons/TsLogo.vue';

const logos = [
    {component: nuxtIcon, alt: 'Nuxt logo', width: 110, height: 71},
    {component: vueIcon, alt: 'Vue logo', width: 82, height: 71},
    {component: tsIcon, alt: 'Ts logo', width: 75, height: 71},
    {component: nuxtIcon, alt: 'Nuxt logo', width: 110, height: 71}
]
</script>

<template>
    <div class="grid">
        <AppGridSection class="grid-col-1-3 grid-row-1-3">
            <!-- <p class="grid__title">About me</p> -->
            <img class="grid__me" src="@/assets/img/me_anime.png" height="150px" width="100px" alt="Me in anime style" />
        </AppGridSection>

        <AppGridSection class="grid-col-3-6 grid-row-1-3">
            <div>
                <AppText variant="h1" class="grid__title">Projects</AppText>
                <AppText variant="p" class="grid__description">From an intergrated Nuxt mocking service to a wedding website</AppText>
            </div>
        </AppGridSection>
        
        <AppGridSection class="grid-col-1-6 grid-row-3-6">
            <AppText variant="h1" class="grid__title">Skill set</AppText>
            <ImageSlider :images="logos" />
        </AppGridSection>
        
        <AppGridSection class="grid-col-1-3 grid-row-6-10">
            <AppText variant="h1" class="grid__title">Experience</AppText>

        </AppGridSection>

        <AppGridSection class="grid-col-3-6 grid-row-6-8">
            <AppText variant="h1" class="grid__title">Insights</AppText>

        </AppGridSection>

        <AppGridSection class="grid-col-3-6 grid-row-8-10">
            <AppText variant="h1" class="grid__title">Contact me</AppText>

        </AppGridSection>
    </div>
</template>

<style scoped lang="scss">
.grid {
    display: grid;
    grid-template-rows: repeat(9, 3.5rem);
    grid-template-columns: repeat(5, 3.5rem);
    gap: 1rem;

    padding: 1rem 0;
    justify-content: center;

    &__title {
        padding-top: 1rem;
    }

    &__description {
        width: 10rem;
    }

    &__me {
        margin-top: 3rem;
    }
}
</style>