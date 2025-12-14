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
    description?: string
}>()

const dialog = useTemplateRef('dialog');

function openDialog() {
    console.log('click')
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
        <dialog ref="dialog" closedby='any' class="poi__dialog">
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

    &__point {
        transition: background-color 300ms ease-in-out;

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
            background-color: #000000c7;

            @media screen and (min-width: $lg) {
                width: 3.5rem;
                height: 1.5rem;
                left: 2rem;
                top: .75rem;
            }
        }

        &:hover {
            background-color: var(--background-secondary);

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