<script setup lang="ts">
import { computed } from 'vue'
import AppText from '@/components/AppText.vue'
import ImageSlider from '@/components/ImageSlider.vue'
import nuxtIcon from '@/components/icons/LogoNuxt.vue'
import vueIcon from '@/components/icons/LogoVue.vue'
import tsIcon from '@/components/icons/LogoTs.vue'
import AppTag from '@/components/AppTag.vue'

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

const skillTags = {
    technical: [
        'vue', 'nuxt', 'ts', 'js', 'hmtl', 'css', 'scss', 'tailwind', 
        'angular', 'vite', 'webpack', 'jest', 'cypress', 'playright', 'storybook',
        'eslint', 'git'
    ],
    tools: [
        'cursor', 'vs code', 'figma', 'github', 'gitlab', 'jira', 'asana',
        'sketch', 'adobe illustrator', 'cloudinary', 'cloudflare', 'netlify',
        'vercel'
    ],
    other: [
        'nuxt modules', 'nuxt layers', 'nuxt content', 'nuxt studio', 'contentful',
        'github actions', 'npm'
    ] 
}
</script>

<template>
    <div class="skills" :class="aboutMeClass">
        <div class="skills__home">
            <div class="skills__home__header">
                <AppText variant="h1" class="skills__home__header__title">Skill set</AppText>
                <AppText variant="p" class="skills__home__header__description hide-s">Technical & other profesional skills</AppText>
            </div>
            <ImageSlider class="skills__home__slider" :images="logos" />
        </div>

        <div class="skills__technical skills__details">
            <AppText variant="h2" class="skills__technical__title">Technical skills</AppText>
            <div class="skills__technical__tags tags-list">
                <AppTag v-for="tag in skillTags.technical" :key="tag" color="white">{{ tag }}</AppTag>
            </div>
        </div>

        <div class="skills__tools skills__details">
            <AppText variant="h2" class="skills__tools__title">Tools</AppText>
            <div class="skills__tools__tags tags-list">
                <AppTag v-for="tag in skillTags.tools" :key="tag" color="white">{{ tag }}</AppTag>
            </div>
        </div>

        <div class="skills__other skills__details">
            <AppText variant="h2" class="skills__other__title">Other skills</AppText>
            <div class="skills__other__tags tags-list">
                <AppTag v-for="tag in skillTags.other" :key="tag" color="white">{{ tag }}</AppTag>
            </div>
        </div>

        <div class="skills__human-language skills__details">
            <AppText variant="h2" class="skills__human-language__title">I speak the following languages</AppText>
            <div class="skill__human-language__details tags-list">
                <AppTag class="skills__human-language__details__text" color="white">EN - C1</AppTag>
                <AppTag class="skills__human-language__details__text" color="white">NL - C1</AppTag>
                <AppTag class="skills__human-language__details__text" color="white">FR - B1</AppTag>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.tags-list {
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
}

.skills {
    transition: width 300ms ease-in-out, height 300ms ease-in-out;
    width: 258px;
    height: 160px;

    @media screen and (min-width: $md) {
        width: 428px;
    }

    &__home {
        display: flex;
        gap: 2rem; 
        padding-bottom: 2rem;

        &__slider {
            transition: opacity 300ms ease-in-out 400ms, height 300ms ease-in-out 300ms;
            opacity: 1;
        }

        &__header {
            transition: width 300ms ease-in-out, height 300ms ease-in-out;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: .5rem;

            height: 160px;
            width: 122px;
            padding-left: 0;

            @media screen and (min-width: $md) {
                width: 236px;
            }
        }
    }

    &__details {
        transition: opacity 300ms ease-in-out;
        display: flex;
        flex-direction: column;
        gap: .5rem;
        padding-left: 2rem;
        padding-bottom: 1rem;
        opacity: 0;
    }
}

.expanded.skills {
    transition: width 500ms ease-in-out 400ms, height 500ms ease-in-out 400ms;
    width: 100%;
    height: 100%;

    .skills__home {
        &__header {
            transition: width 300ms ease-in-out, height 300ms ease-in-out 400ms, padding-left 300ms ease-in-out 400ms;
            width: 100%;
            height: 72px;
            padding-left: 2rem;
        }

        &__slider {
            transition: opacity 300ms ease-in-out, height 100ms ease-in-out 200ms;
            opacity: 0;
            height: 1rem;
        }
    }

    .skills {
        &__details {
            transition: opacity 200ms ease-in-out 700ms;
            opacity: 1;
        }
    }
}
</style>