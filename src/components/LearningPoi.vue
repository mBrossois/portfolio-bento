<script setup lang="ts">
import { status } from '@/constants';
import AppText from '@/components/AppText.vue';
import { useTemplateRef } from 'vue';
type Status = typeof status[keyof typeof status]

defineSlots<{
    default: string
}>()

defineProps<{
    statusPoi: Status
    description: string
    isRightSide?: boolean
}>()

const dialog = useTemplateRef('dialog');

function openDialog() {
    dialog.value?.show()
}
</script>

<template>
    <div class="poi absolute">
        <div class="poi__title">
            <AppText variant="h2">
                <slot />
            </AppText>
        </div>
        <div class="poi__point relative" @click="openDialog" />
        <dialog ref="dialog" closedby='any' class="poi__dialog" :class="{right: isRightSide}">
            <AppText variant="span">{{ description }}</AppText>
        </dialog>
    </div>
</template>

<style scoped lang="scss">
.poi {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    &__title {
        height: 1.5rem;

        .text {
            position: absolute;
            width: 12rem;
            left: 50%;
            text-align: center;
            translate: -50%;
        }
    }

    &__point {
        transition: background-color 300ms ease-in-out;
        z-index: 10;

        width: 4rem;
        height: 2rem;
        border-radius: 100%;
        background-color: var(--foreground-secondary);
        outline: 2px solid var(--foreground-secondary);

        @media screen and (min-width: $lg) {
            width: 8rem;
            height: 3rem;
        }

        &::after {
            content: '';
            transition: background-color 300ms ease-in-out;
            position: absolute;
            top: .5rem;
            left: 1rem;
            width: 2rem;
            height: 1rem;
            border-radius: 100%;
            background-color: #242424;

            @media screen and (min-width: $lg) {
                width: 3.5rem;
                height: 1.5rem;
                left: 2rem;
                top: .75rem;
            }
        }

        &:hover {
            background-color: #242424;

            &::after {
                background-color: var(--foreground-secondary);
            }
        }
    }

    &__dialog {
        padding: .5rem;
        top: 7rem;
        width: 14rem;
        translate: -20%;
        left: 50%;
        background: unset;
        border-color: white;
        border-radius: 10px;

        &.right {
            translate: -50%;
            left: -50%;

            &::before {
                left: unset;
                right: 2.2rem;
            }
        }

        &::before {
            content: "";
            position: absolute;
            translate: 0 -10px;
            top: 0;
            left: 2.2rem;
            width: 0; 
            height: 0; 
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-bottom: 10px solid white;
        }
    }
}

</style>