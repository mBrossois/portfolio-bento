<script setup lang="ts">
import AppText from '@/components/AppText.vue';
import type { ProjectTags } from '@/types/Projects';
import { computed } from 'vue';

defineSlots<{
    default: string
}>()

const props = defineProps<{
    variant?: ProjectTags
    size?: 'sm'
}>()

const tagClasses = computed(() => [props.variant, props.size])
</script>

<template>
    <div class="tag" :class="tagClasses">
        <AppText class="tag__text" variant="p">
            <slot />
        </AppText>
    </div>
</template>

<style lang="scss" scoped>
.tag {
    padding: .25rem 1rem;
    border-radius: 10px;
    width: fit-content;
    background-color: rgba($color: var(--foreground-primary-rgb), $alpha: .2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba($color: var(--foreground-primary-rgb), $alpha: .3);

    &.sm {
        padding: .125rem .5rem;

        .tag__text {
            font-size: 14px;
        }
    }
}
</style>