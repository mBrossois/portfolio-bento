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
        'Nuxt Modules',
        'Nuxt Layers',
        'Nuxt Content',
        'Nuxt Studio',
        'Vite',
        'Docker',
        'Gitlab',
        'Figma'
    ]
}
 </script>

<template>
    <div class="work relative" :class="workingClass">
        <AppText variant="h1" class="work__title">Experience</AppText>
        <div class="work__logos absolute">
            <LogoJm class="work__logos__jm absolute"/>
            <LogoRel class="work__logos__rel absolute"/>
            <LogoBol class="work__logos__bol absolute"/>
        </div>
        <div class="work__description">
            <div class="work__description__content">
                <ExperienceDetails 
                    company="Jus Mundi" 
                    job-title="Senior Frontend Engineer"
                    :start="2024"
                    end="Present"
                    description="Leading the development of the design system, migration to Vue & Nuxt 3 and setting up the Marketing CMS."
                    :tags="techStacks.jm"
                    />
            </div>
            <div class="work__description__content"></div>
            <div class="work__description__content"></div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.work {
    transition: width 300ms ease-in-out;
    height: 100%;
    width: 152px;
    padding: 1rem;

    &__title {
        align-self: start;
        margin-top: 2rem;
    }

    &__logos {
        transition: left 300ms ease-in-out;
        top: 6rem; 
        opacity: 90%;

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
    transition: width 500ms ease-in-out 400ms;
    width: 990px;

    .work {
        &__title {
            transition: margin-top 500ms ease-in-out 400ms;
            margin-top: 0rem;
        }

        &__logos {
            transition: left 500ms ease-in-out 400ms;
            left: 1rem;

            &__jm {
                height: 11px;
                width: auto;
                translate: 0 -12px;
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