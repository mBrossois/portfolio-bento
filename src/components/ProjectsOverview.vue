<script setup lang="ts">
import type { ProjectsOverview } from '@/types/Projects';
import ProjectDetails from '@/components/ProjectDetails.vue';

defineProps<ProjectsOverview>()
</script>

<template>
    <div class="projects__overview">
        <ProjectDetails v-for="project in projects" :key="project.name" :project="project" />
    </div>
</template>

<style lang="scss" scoped>
.projects__overview {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
}
</style>