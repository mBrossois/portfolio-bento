<script setup lang="ts">
import { watch, onMounted, shallowRef } from 'vue';
import { useWindowSize } from '@vueuse/core'

import { status } from '@/constants'

import LearningPoi from '@/components/LearningPoi.vue'
import IconRoadSm from '@/components/icons/IconRoadSm.vue';
import IconRoadMd from '@/components/icons/IconRoadMd.vue';
import IconRoadLg from '@/components/icons/IconRoadLg.vue';

type Status = typeof status[keyof typeof status]

defineProps<{
    title: string
    side: 'left' | 'right'
    statusPoi: Status
    hasRoad: boolean
    description?: string
}>()

const roadComponent = shallowRef(IconRoadSm)

const { width } = useWindowSize()
watch(width, (newValue) => {
    setRoadComponent(newValue)
})

function setRoadComponent(width: number) {
    if(width < 768) {
        roadComponent.value = IconRoadSm
        return;
    }
    if(width >= 768 && width < 1024) {
        roadComponent.value = IconRoadMd
        return;
    }
    if(width >= 1024) {
        roadComponent.value = IconRoadLg
        return;
    }
}

onMounted(() => {
    setRoadComponent(width.value)
})
</script>

<template>
    <div class="learning-section relative" :class="side">
        <component :is="roadComponent" v-if="side === 'right' && hasRoad" class="learning-section__road-left relative" />
        <LearningPoi class="learning-section__poi" :class="side" :status-poi="statusPoi" :description="description" :is-right-side="side === 'right'">{{ title }}</LearningPoi>
        <component :is="roadComponent" v-if="side === 'left' && hasRoad" class="learning-section__road-right relative" />
    </div>
</template>

<style scoped lang="scss">
.learning-section {
    width: 17rem;
    height: 14rem;
    position: relative;
    top: -4rem;

    &.left {
        left: 5rem;
    }

    &__poi {
        top: 7rem;

        &.right {
            left: 11rem;

            @media screen and (min-width: $md) {
                left: 30rem;
            }

            @media screen and (min-width: $lg) {
                left: 43rem;
            }
        }
    }

    &__road {
        &-left {
            top: -1.75rem;
            left: 2.8rem;
        }

        &-right {
            top: -1.75rem;
            left: 2.1rem;
            transform: scaleX(-1);
        }
    }
}
</style>