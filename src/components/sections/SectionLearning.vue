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
    display: flex;
    width: 100%;
    padding-left: 1rem;
    text-align: start;

    .grid__title {
        width: 6rem;
    }

    &__content {
        top: 0;
        left: 0;

        &__light {
            width: 44px;
            height: 75px;

            left: 9rem;
            top: .5rem;
        }

        &__poi {
            width: 2rem;
            height: 1rem;
            border-radius: 100%;
            background-color: var(--foreground-secondary);

            left: 9.3125rem;
            top: 5.5rem;

            &::after {
                content: '';
                position: absolute;
                top: .25rem;
                left: .5rem;
                width: 1rem;
                height: .5rem;
                border-radius: 100%;
                background-color: #000000c7;
            }
        }

        &__road {
            top: 6rem;
            left: .5rem;
            width: 10rem;
            height: 1.5rem;
            border-bottom-right-radius: 90%;
            border-bottom: 4px solid var(--foreground-secondary);
            border-right: 4px solid var(--foreground-secondary);
        }

        &__character {
            width: 10.5px;
            height: 22.5;

            top: 5.5rem;
            left: .5rem;
        }
    }
}
</style>