<script setup lang="ts">
import AppText from '@/components/AppText.vue';
import LogoJm from '@/components/icons/LogoJm.vue';
import LogoRel from '@/components/icons/LogoRel.vue';
import LogoBol from '@/components/icons/LogoBol.vue';
 </script>

<template>
    <div class="section__work relative">
        <AppText variant="h1" class="grid__title">Experience</AppText>
        <div class="section__work__logos absolute">
            <LogoJm class="absolute"/>
            <LogoRel class="section__work__logos__rel absolute"/>
            <LogoBol class="section__work__logos__bol absolute"/>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "sass:map";

.section__work {
    height: 100%;
    .grid__title {
        align-self: start;
        margin-top: 2rem;
    }

    &__logos {
        top: 6rem; 
        opacity: 90%;

        @media screen and (min-width: map.get($screen-sizes, 'lg')) {
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
}
</style>