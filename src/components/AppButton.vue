<script setup lang="ts">
import { computed } from 'vue';
import AppText from '@/components/AppText.vue';

defineSlots<{
    default: string
}>()

const props = withDefaults(defineProps<{
    size?: 'sm' | 'md'
    to?: string
    target?: '_blank'
}>(),
{
    size: 'md'
}
)

const emit = defineEmits<{
    (e: 'click'): void
}>()

const component = computed(() => props.to ? 'a' : 'button')

function onClick() {
    if(!props.to) emit('click')
}
</script>

<template>
    <component :is="component" class="button" :class="size" :href="to" :target="target" @click="onClick">
        <AppText variant="span">
            <slot />
        </AppText>
    </component>
</template>

<style lang="scss" scoped>
.button {
    border-radius: 8px;
    height: 3rem;
    width: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    background-color: var(--bg-secondary);
    border: 4px solid var(--bg-secondary);
    box-shadow: 1px 1px 10px 0px #00000080;
    text-decoration: none;

    &.sm {
        height: 2.5rem;
        width: 8rem;
    }

    &:hover {
        cursor: pointer;
    }
}
</style>