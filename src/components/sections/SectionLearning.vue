<script setup lang="ts">
import { computed } from 'vue';
import AppText from '@/components/AppText.vue';
import ImageLight from '@/components/icons/ImageLight.vue';
import ImageCharacter from '@/components/icons/ImageCharacter.vue';
import LearningPoi from '@/components/LearningPoi.vue';
import LearningPoiWithRoad from '@/components/LearningPoiWithRoad.vue';
import { status } from '@/constants';

const props = defineProps<{
    isExpanded: boolean
}>()

const learningClass = computed(() => ({
    expanded: props.isExpanded
}))

const learnings = [
    {title: 'react', status: status.todo},
    {title: 'svelte', status: status.todo},
    {title: 'ai', status: status.todo},
    {title: 'Micro FE', status: status.inProgress},
    {title: 'Vue', status: status.done}

    ]
</script>

<template>
    <div class="learning relative" :class="learningClass">
        <AppText variant="h1" class="learning__title">Learning journey</AppText>
        <div class="learning__content absolute">
            <div class="learning__content__road absolute" />
            <div class="learning__content__poi absolute" />
            <ImageLight class="learning__content__light absolute" />
            <ImageCharacter class="learning__content__character absolute" />
            <LearningPoi class="first-poi" :status-poi="status.todo" description="Using canvas to build 2d scenes">Canvas</LearningPoi>
            <LearningPoiWithRoad v-for="(learning, index) in learnings" :key="learning.title" class="learning__content__extra-learnings" :title="learning.title" :side="index % 2 === 0 ? 'right' : 'left'" :status-poi="learning.status" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.learning {
    transition: padding 300ms ease-in-out;
    width: 100%;
    height: 100%;

    padding-top: 1rem;
    padding-left: 2rem;

    @media screen and (min-width: $md) {
        padding-top: 2.5rem;
        padding-left: 3rem;
    }

    @media screen and (min-width: $lg) {
        padding-top: 5rem;
        padding-left: 10rem;
    }

    &__title {
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

        .first-poi {
            transition: opacity 300ms ease-in-out;
            opacity: 0;
            left: 4.5rem;
            top: 3rem;

            @media screen and (min-width: $lg) {
                top: 2rem;
            }
        }

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
        &__extra-learnings {
            transition: opacity 300ms ease-in-out;
            opacity: 0;
        }
    }
}

.expanded.learning {
    transition: padding 300ms ease-in-out 400ms;

    padding-top: 1rem;
    padding-left: 2rem;

    .learning {
        &__title {
            width: 16rem;
        }

        &__content {
            top: 8rem;

            .first-poi {
                transition: opacity 300ms ease-in-out 400ms;
                opacity: 1;
            }

            &__light {
                left: 17rem;
            }

            &__poi {
                left: 17.375rem;
            }

            &__road {
                left: 8.5rem;
            }

            &__extra-learnings {
                transition: opacity 300ms ease-in-out 400ms;
                opacity: 1;

                &:last-child {
                    height: 17rem;
                }
            }

            @media screen and (min-width: $md) {
                &__light {
                    left: 37rem;
                }

                &__poi {
                    left: 37.375rem;
                }

                &__road {
                    width: 30rem;
                }
            }

            @media screen and (min-width: $lg) {
                &__light {
                    left: 53rem;
                    top: -5.5rem;
                }

                &__poi {
                    left: 53.8rem;
                    top: 5.25rem;
                }

                &__road {
                    top: 6rem;
                    width: 48rem;
                }
            }
        }

    }

}
</style>