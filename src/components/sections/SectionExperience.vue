<script setup lang="ts">
import { computed } from 'vue';
import AppText from '@/components/AppText.vue';
import LogoJm from '@/components/icons/LogoJm.vue';
import LogoRel from '@/components/icons/LogoRel.vue';
import LogoBol from '@/components/icons/LogoBol.vue';
import ExperienceDetails from '@/components/ExperienceDetails.vue';

const props = defineProps<{
    isExpanded: boolean
}>()

const workingClass = computed(() => ({expanded: props.isExpanded}))

const techStacks = {
    jm: [
        'Vue',
        'Nuxt',
        'TS',
        'Pinia',
        'Nuxt Modules',
        'Nuxt Layers',
        'Nuxt Content',
        'Nuxt Studio',
        'Vite',
        'Docker',
        'Gitlab',
        'Figma'
    ],
    rel: [
        'Vue',
        'Nuxt',
        'TS',
        'Pinia',
        'Vite',
        'Docker',
        'Github',
        'Figma'
    ],
    bol: [
        'Angular',
        'Kotlin',
        'Vue',
        'Nuxt',
        'JS',
        'TS',
        'GraphQL',
        'Cyperess',
        'Jest'
    ]
}
 </script>

<template>
    <div class="work relative" :class="workingClass">
        <AppText variant="h1" class="work__title">Experience</AppText>
        <div class="work__logos absolute">
            <LogoJm class="work__logos__jm absolute logo"/>
            <LogoRel class="work__logos__rel absolute logo"/>
            <LogoBol class="work__logos__bol absolute logo"/>
        </div>
        <div class="work__description">
            <div class="work__description__content">
                <ExperienceDetails 
                    company="Jus Mundi" 
                    job-title="Senior Frontend Developer"
                    :start="2024"
                    end="Present"
                    description="Leading the development of the design system, migration to Vue & Nuxt 3 and setting up the Marketing CMS."
                    :tags="techStacks.jm"
                    />
            </div>
            <div class="work__description__content">
                <ExperienceDetails 
                    company="Regionaal Energieloket" 
                    job-title="Frontend Developer"
                    :start="2022"
                    :end="2024"
                    description="Set up design system, lead in making the website WCAG 3.0 and migration of codebase from Vue 2 to Vue 3."
                    :tags="techStacks.rel"
                    />
            </div>
            <div class="work__description__content">
                <ExperienceDetails 
                    company="Bol.com" 
                    job-title="Software engineer"
                    :start="2019"
                    :end="2022"
                    description="Developed & designed internal tooling for commision & worked on partner side applications."
                    :tags="techStacks.bol"
                    />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.work {
    transition: width 300ms ease-in-out, padding 300ms ease-in-out;
    height: 100%;
    width: 152px;
    padding: 1rem;

    @media screen and (min-width: $lg) {
        padding: 0;
    }

    &__title {
        align-self: start;
        margin-top: 2rem;
    }

    &__logos {
        transition: left 300ms ease-in-out;
        top: 6rem; 
        opacity: 90%;

        .logo {
            transition: height 300ms ease-in-out, translate 300ms ease-in-out, transform 300ms ease-in-out;
        }

        @media screen and (min-width: $lg) {
            scale: 1.5;
            left: -.25rem;
        }

        &__rel {
            top: 3.75rem;
            left: .5rem;
        }

        &__bol {
            transform-origin: left top;
            transform:  rotate(90deg) translateY(-100%);

            left: 3.25rem;
        }

        :deep(.logo-text) {
            display: none;
        }
    }

    &__description {
        transition: opacity 300ms ease-in-out;
        opacity: 0;
        padding: 1rem 0;
    }
}

.expanded.work {
    transition: width 500ms ease-in-out 400ms, padding 500ms ease-in-out 400ms;
    width: 330px;
    padding: 1rem;

    @media screen and (min-width: $md) {
        width: 680px;
    }

    @media screen and (min-width: $lg) {
        width: 990px;
    }

    .work {
        &__title {
            transition: margin-top 500ms ease-in-out 400ms;
            margin-top: 0rem;
        }

        &__logos {
            transition: left 500ms ease-in-out 400ms;
            left: 1rem;

            .logo {
                transition: height 500ms ease-in-out 400ms, translate 500ms ease-in-out 400ms, transform 500ms ease-in-out 400ms;
                height: 16px;
                width: auto;
            }

            &__jm {
                translate: 72px -29px;
            }

            &__rel {
                translate: 156px 227px;
            }

            &__bol {
                transform: rotate(0deg) translate(10px, 537px);
            }

            @media screen and (min-width: $md) {
                &__jm {
                    translate: 73px -28px;
                }

                &__rel {
                    translate: 156px 139px;
                }

                &__bol {
                    transform: rotate(0deg) translate(10px, 395px);
                }
            }

            @media screen and (min-width: $lg) {
                .logo {
                    height: 11px;
                }

                &__jm {
                    translate: 47px -12px;
                }

                &__rel {
                    translate: 100px 43px;
                }

                &__bol {
                    transform: rotate(0deg) translate(-11px, 220px);
                }
            }
        }

        &__description {
            transition: opacity 300ms ease-in-out 900ms;
            display: flex;
            flex-direction: column;
            gap: 3rem;
            opacity: 1;

            &__content {
                width: 100%;
            }
        }
    }
}
</style>