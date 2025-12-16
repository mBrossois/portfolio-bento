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
    {title: 'react', status: status.todo, description: 'Building a React app, to learn how React works.'},
    {title: 'svelte', status: status.todo, description: 'Building a Svelte app, to learn how Svelte works.'},
    {title: 'ai', status: status.todo, description: 'Setting up a dockerized Claude code, with a Open Source AI model and self build MCP server.'},
    {title: 'canvas', status: status.inProgress, description: 'Building games with Canvas, to learn more about math and OOP programming.'},
    {title: 'Micro FE', status: status.inProgress, description: 'Reading "Building Micro-Frontends" from Luca Mezzalira'},
    {title: 'Vue', status: status.done}
]

const activeLearning = [...learnings].reverse().findIndex(learning => learning.status === status.inProgress)
console.log(learnings.length - 1 - activeLearning)
</script>

<template>
    <div class="learning relative" :class="learningClass">
        <AppText variant="h1" class="learning__title">Learning journey</AppText>
        <div class="learning__content absolute">
            <div class="learning__content__road absolute" />
            <div class="learning__content__poi absolute" />
            <ImageLight class="learning__content__light absolute" />
            <ImageCharacter class="learning__content__character absolute" />
            <LearningPoiWithRoad 
                v-for="(learning, index) in learnings" 
                :key="learning.title" 
                class="learning__content__extra-learnings" 
                :has-road="index !== 0"
                :title="learning.title" 
                :side="index % 2 === 1 ? 'right' : 'left'" 
                :status-poi="learning.status"  
                :description="learning.description"
                />
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
        transition: top 300ms ease-in-out;
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
            transition: left 300ms ease-in-out, top 300ms ease-in-out;
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
            transition: background-color 300ms ease-in-out, left 300ms ease-in-out, top 300ms ease-in-out;

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
            transition: border-bottom 300ms ease-in-out, border-right 300ms ease-in-out, left 300ms ease-in-out, width 300ms ease-in-out, top 300ms ease-in-out;
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
            transition: top 300ms ease-in-out 400ms;
            top: 8rem;

            .first-poi {
                transition: opacity 300ms ease-in-out 400ms;
                opacity: 1;
            }

            &__light {
                transition: left 300ms ease-in-out 400ms, top 300ms ease-in-out 400ms;
                left: 17rem;
            }

            &__poi {
                transition: left 300ms ease-in-out 400ms, top 300ms ease-in-out 400ms;
                left: 17.375rem;
            }

            &__road {
                transition: left 300ms ease-in-out 400ms, width 300ms ease-in-out 400ms, top 300ms ease-in-out 400ms;
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