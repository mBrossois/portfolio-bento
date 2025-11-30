<script setup lang="ts">
import type { ProjectDetails } from '@/types/Projects';
import AppText from '@/components/AppText.vue';

defineProps<{project: ProjectDetails}>()
</script>

<template>
    <div class="project-details relative">
        <div class="project-details__title absolute">
            <AppText variant="h2">{{ project.name }}</AppText>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.project-details {
    height: 8rem;
    width: 17.325rem;
    border: 1px solid var(--foreground-primary);
    border-radius: 15px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

    &__title {
        bottom: 1rem;
        left: 1rem;

        padding: .25rem 1rem;
        border-radius: 10px;
        width: fit-content;
        background-color: rgba($color: var(--foreground-primary-rgb), $alpha: .2);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border: 1px solid rgba($color: var(--foreground-primary-rgb), $alpha: .3);
    }
}
</style>