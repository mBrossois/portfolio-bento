<script setup lang="ts">
import { computed } from 'vue';
import AppText from '@/components/AppText.vue';
import ProjectsOverview from '@/components/ProjectsOverview.vue';
import { projects } from '@/constants/projects';

const props = defineProps<{
    isExpanded: boolean
}>()

const projectClass = computed(() => ({expanded: props.isExpanded}))
</script>

<template>
    <div class="projects" :class="projectClass">
        <AppText variant="h1" class="projects__title">Projects</AppText>
        <AppText variant="p" class="projects__description">From an integrated Nuxt mocking service to a wedding website</AppText>
        <ProjectsOverview class="projects__overview" :projects="projects" />
    </div>
</template>

<style lang="scss" scoped>
.projects {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    width: 100%;
    padding: .5rem 1rem;
    height: 100%;

    &__description {
        transition: opacity 300ms ease-in-out 700ms, height 300ms ease-in-out 300ms, width 300ms ease-in-out 300ms;
        width: 10rem;
        height: 4.25rem;
        opacity: 1;

        @media screen and (min-width: $md) {
            width: 16rem;
        }

    }

    &__overview {
        transition: opacity 150ms ease-in-out;
        opacity: 0;
    }
}

.expanded.projects {
    .projects {
        &__description {
            transition: opacity 300ms ease-in-out, height 300ms ease-in-out 200ms, width 300ms ease-in-out 200ms;
            opacity: 0;
            height: 0;
            width: 0;
        }

        &__overview {
            transition: opacity 200ms ease-in-out 700ms;
            opacity: 1;
        }
    }
}
</style>