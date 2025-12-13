<script setup lang="ts">
import AppText from '@/components/AppText.vue';
import ImageLight from '@/components/icons/ImageLight.vue';
import ImageCharacter from '@/components/icons/ImageCharacter.vue';
</script>

<template>
    <div class="learning">
        <AppText variant="h1" class="grid__title">Learning journey</AppText>
        <div class="learning__content absolute">
            <div class="learning__content__road absolute" />
            <div class="learning__content__poi absolute" />
            <ImageLight class="learning__content__light absolute" />
            <ImageCharacter class="learning__content__character absolute" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.learning {
    width: 100%;
    height: 100%;

    padding-top: 5rem;
    padding-left: 1rem;
    text-align: start;

    .grid__title {
        width: 6rem;

        @media screen and (min-width: $md) {
            width: 12rem;
        }

        @media screen and (min-width: $lg) {
            width: 16rem;
        }
    }

    &__content {
        top: 0;
        left: 0;

        &__light {
            width: 44px;
            height: 75px;

            left: 9rem;
            top: .5rem;

            @media screen and (min-width: $md) {
                left: 20rem;
            }

            @media screen and (min-width: $lg) {
                width: 88px;
                height: 150px;
                left: 36rem;
            }
        }

        &__poi {
            transition: background-color 300ms ease-in-out;

            width: 2rem;
            height: 1rem;
            border-radius: 100%;
            background-color: var(--foreground-secondary);

            left: 9.375rem;
            top: 5.5rem;

            @media screen and (min-width: $md) {
                left: 20.375rem;
            }

            @media screen and (min-width: $lg) {
                width: 4rem;
                height: 1.5rem;
                top: 10.25rem;
                left: 36.875rem;
            }

            &::after {
                content: '';
                transition: background-color 300ms ease-in-out;
                position: absolute;
                top: .25rem;
                left: .5rem;
                width: 1rem;
                height: .5rem;
                border-radius: 100%;
                background-color: #000000c7;

                @media screen and (min-width: $lg) {
                    width: 1.75rem;
                    height: .75rem;
                    left: 1rem;
                    top: .375rem;
                }
            }
        }

        &__road {
            transition: border-bottom 300ms ease-in-out, border-right 300ms ease-in-out;
            top: 6rem;
            left: .5rem;
            width: 10rem;
            height: 1.5rem;
            border-bottom-right-radius: 90%;
            border-bottom: 4px solid var(--foreground-secondary);
            border-right: 4px solid var(--foreground-secondary);

            @media screen and (min-width: $md) {
                width: 21rem;
            }

            @media screen and (min-width: $lg) {
                width: 39rem;
                border-width: 6px;
                top: 11rem;
                height: 1rem;
            }
        }

        &__character {
            width: 10.5px;
            height: 22.5px;

            top: 5.5rem;
            left: .5rem;

            @media screen and (min-width: $lg) {
                width: 14px;
                height: 30px;
                top: 9.5rem;
            }

        }
    }
}
</style>