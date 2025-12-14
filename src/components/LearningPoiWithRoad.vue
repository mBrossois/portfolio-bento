<script setup lang="ts">
import { status } from '@/constants'
import LearningPoi from '@/components/LearningPoi.vue'
import IconRoad from './icons/IconRoad.vue';

type Status = typeof status[keyof typeof status]

defineProps<{
    title: string
    side: 'left' | 'right'
    statusPoi: Status
}>()
</script>

<template>
    <div class="learning-section relative" :class="side">
        <IconRoad v-if="side === 'right'" class="learning-section__road-left relative" />
        <LearningPoi class="learning-section__poi" :class="side" :status-poi="statusPoi" description="Using canvas to build 2d scenes" :is-right-side="side === 'right'">{{ title }}</LearningPoi>
        <IconRoad v-if="side === 'left'" class="learning-section__road-right relative" />
    </div>
</template>

<style scoped lang="scss">
.learning-section {
    width: 17rem;
    height: 14rem;
    position: relative;
    top: 9rem;

    &.left {
        left: 6rem;
    }

    &__poi {
        top: 7rem;

        &.right {
            left: 12rem;
        }
    }

    &__road {
        &-left {
            top: -1.75rem;
            left: 2.1rem;
        }

        &-right {
            top: -1.75rem;
            left: 2.1rem;
            transform: scaleX(-1);
        }
    }
}
</style>