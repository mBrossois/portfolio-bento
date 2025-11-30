<script setup lang="ts">
import { computed } from 'vue';
import AppText from '@/components/AppText.vue';

const props = defineProps<{
    isExpanded: boolean
}>()

const aboutMeClass = computed(() => ({expanded: props.isExpanded}))
</script>

<template>
    <div class="about-me" :class="aboutMeClass">
        <Transition>
            <AppText v-show="isExpanded" class="about-me__title" variant="h1">About me</AppText>
        </Transition>
        <div class="about-me__container">
            <img class="about-me__container__image" src="@/assets/img/me_anime.png" height="150px" width="100px" alt="Me in anime style" />
            
            <div class="about-me__container__content">
                <div class="about-me__content__section">
                    <AppText  variant="h2">Name</AppText>
                    <AppText  variant="p">Mark de Neut Brossois</AppText>
                </div>

                <div class="about-me__content__section">
                    <AppText  variant="h2">Role</AppText>
                    <AppText  variant="p">
                        Frontend developer
                    </AppText>
                </div>

                <div class="about-me__content__section">
                    <AppText  variant="h2">Location</AppText>
                    <AppText  variant="p">
                        France, Rouen
                    </AppText>
                </div>
            </div>
        </div>
        <Transition>
            <div v-if="isExpanded" class="about-me__content">
                <div class="about-me__content__section">
                    <AppText  variant="h2">About me</AppText>
                    <AppText  variant="p">
                        Hello and welcome to my portfolio!
                        I am a <b>Frontend developer</b> originally from Netherlands
                        and currently living in <b>France</b>.
                    </AppText>
                </div>

                <div class="about-me__content__section">
                    <AppText  variant="h2">Interests</AppText>
                    <AppText  variant="p">
                        <ul>
                            <li>Micro animations</li>
                            <li>Design sytems</li>
                            <li>Optimize DX</li>
                        </ul>
                    </AppText>
                </div>
            </div>
        </Transition>
    </div>
</template>

<style lang="scss" scoped>
.v-enter-active {
    transition: height 0.3s ease-in-out 0.5s, width 0.3s ease-in-out 0.5s, opacity .3s ease-in-out .5s;
}

.v-leave-active {
    transition: height 0.5s ease-in-out, width 0.5s ease-in-out, opacity .5s ease-in-out;
}

.v-enter-from,
.v-leave-to {
    height: 0!important;
    opacity: 0!important;
}

.about-me {
    width: 100%;
    height: 202px;
    padding: 0 1rem;
    transition: height 300ms ease-in-out;

    &.expanded {
        transition: height 300ms ease-in-out 500ms;
        height: 100%;

        .about-me__title {
            height: 2rem;
        }

        .about-me__container {
            transition: margin-top 300ms ease-in-out 500ms;
            margin-top: .5rem;

            &__image {
                transition: height 300ms ease-in-out 500ms, width 300ms ease-in-out 500ms, translate 300ms ease-in-out 500ms;
                width: 120px;
                height: 180px;
                translate: 0;

                @media screen and (min-width: $lg) {
                    height: 240px;
                    width: 160px;
                }

            }

            &__content {
                opacity: 1;
                transition: height 0.3s ease-in-out 0.5s, width 0.3s ease-in-out 0.5s, opacity .3s ease-in-out .7s;
            }
        }
    }

    &__title {
        height: 0;
    }

    &__container {
        display: flex;
        gap: 2rem;
        transition: margin-top 300ms ease-in-out;
        margin-top: 3rem;
        @media screen and (min-width: $lg) {
            margin-top: 1rem;
        }

        &__image {
            transition: height 300ms ease-in-out, width 300ms ease-in-out, translate 300ms ease-in-out;

            @media screen and (min-width: $md) {
                translate: 30px;
            }

            @media screen and (min-width: $lg) {
                translate: 0;
                height: 240px;
                width: 160px;
            }
        }

        &__content {
            transition: height 0.5s ease-in-out, width 0.5s ease-in-out, opacity .2s ease-in-out;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            opacity: 0;
        }
    }

    &__content {
        padding-top: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        &__section {
            display: flex;
            flex-direction: column;
            gap: .25rem;
        }
    }
}
</style>