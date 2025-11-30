<script setup lang="ts">
import type { ProjectDetails } from '@/types/Projects';
import AppText from '@/components/AppText.vue';
import AppButton from '@/components/AppButton.vue';
import AppTag from '@/components/AppTag.vue';

defineProps<{project: ProjectDetails}>()
</script>

<template>
    <div class="project-details ">
        <div class="project-details__image relative">
            <img :src="project.image" :alt="'cover ' + project.name" class="project-details__image__inner" />
            <AppTag class="project-details__image__title absolute">
                {{ project.status }}
            </AppTag>
        </div>
        <div class="project-details__description">
            <div class="project-details__description__text">
                <AppText variant="h2">{{ project.name }}</AppText>
                <AppText class="project-details__description__text__details" variant="p">{{ project.description }}</AppText>
            </div>
            <div class="project-details__description__cta">
                <AppButton v-if="project.links.code" size="sm" :to="project.links.code" target="_blank">Go to code</AppButton>
                <AppButton v-if="project.links.website" size="sm" :to="project.links.website" target="_blank">Go to website</AppButton>
            </div>
            <div class="project-details__description__tags">
                <AppTag v-for="tag in project.tags" :key="tag" :variant="tag" size="sm">
                    {{ tag }}
                </AppTag>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.project-details {
    height: 26rem;
    width: 17.325rem;
    border: 1px solid var(--foreground-primary);
    border-radius: 15px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    overflow: hidden;

    &__image {
        height: 8rem;
        color: white;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid white;

        &__inner {
            max-width: 336px;
        }

        &__title {
            bottom: 1rem;
            left: 1rem;
        }
    }

    &__description {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        &__text {
            display: flex;
            flex-direction: column;
            gap: .5rem;

            &__details {
                height: 5.375rem;
            }
        }

        &__cta {
            display: flex;
            gap: .5rem;
        }

        &__tags {
            height: 3.625rem;

            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: .5rem;
        }
    }
}
</style>