<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { onKeyDown } from '@vueuse/core'
import AppGridSection from '@/components/AppGridSection.vue'
import SectionAboutMe from '@/components/sections/SectionAboutMe.vue'
import SectionProject from '@/components/sections/SectionProject.vue'
import SectionExperience from '@/components/sections/SectionExperience.vue'
import SectionLearning from '@/components/sections/SectionLearning.vue'
import SectionContact from '@/components/sections/SectionContact.vue'
import ImageSlider from '@/components/ImageSlider.vue'
import AppText from '@/components/AppText.vue'
import nuxtIcon from '@/components/icons/LogoNuxt.vue'
import vueIcon from '@/components/icons/LogoVue.vue'
import tsIcon from '@/components/icons/LogoTs.vue'

const logos = [
    {component: nuxtIcon, alt: 'Nuxt logo', width: 110, height: 71},
    {component: vueIcon, alt: 'Vue logo', width: 82, height: 71},
    {component: tsIcon, alt: 'Ts logo', width: 75, height: 71},
    {component: nuxtIcon, alt: 'Nuxt logo', width: 110, height: 71}
]

const selectedSection = ref('')

function setSelectedSection(section: string) {
    selectedSection.value = section
}

function resetSection(e: KeyboardEvent) {
    setSelectedSection('')
}

onMounted(() => {
    onKeyDown('Escape', resetSection)
})
</script>

<template>
    <div class="grid">
        <AppGridSection 
            class="grid-row-1-3 grid-col-1-3
                md-grid-row-1-3 md-grid-col-1-4
                lg-grid-row-1-4"
            name="about-me"  
            :expanded-section="selectedSection"
            @set-selected="setSelectedSection"
        >
            <SectionAboutMe :is-expanded="selectedSection === 'about-me'"/>
        </AppGridSection>

        <AppGridSection 
            class="grid-row-1-3 grid-col-3-6
                md-gid-row-1-3 md-grid-col-4-8
                lg-grid-row-1-4 lg-grid-col-4-10"
            name="projects" 
            :expanded-section="selectedSection"
            @set-selected="setSelectedSection"   
        >
            <SectionProject :is-expanded="selectedSection === 'projects'" />
        </AppGridSection>
        
        <AppGridSection 
            class="grid-row-3-6 grid-col-1-6
                md-grid-row-3-5 md-grid-col-1-8
                lg-grid-row-4-6 lg-grid-col-1-10"
            name="skill-set"    
            :expanded-section="selectedSection"
            :is-under-construction="true"
            @set-selected="setSelectedSection"
        >
            <div class="grid__content">
                <AppText variant="h1" class="grid__title">Skill set</AppText>
                <AppText variant="p" class="grid__description hide-s">Technical & other profesional skills</AppText>
            </div>
            <ImageSlider :images="logos" />
        </AppGridSection>
        
        <AppGridSection 
            class="grid-row-6-10 grid-col-1-3
                md-grid-row-1-5 md-grid-col-8-11
                lg-grid-row-1-6 lg-grid-col-10-15"
            name="experience"
            :expanded-section="selectedSection"
            :is-under-construction="true"
            @set-selected="setSelectedSection"
        >
            <SectionExperience />
        </AppGridSection>

        <AppGridSection 
            class="grid-row-6-8 grid-col-3-6
                md-grid-row-5-7 md-grid-col-1-7
                lg-grid-row-6-9 lg-grid-col-1-11"
            name="learning-journey"
            :expanded-section="selectedSection"
            :is-under-construction="true"
            @set-selected="setSelectedSection"
        >
            <SectionLearning />
        </AppGridSection>

        <AppGridSection 
            class="grid__section grid-row-8-10 grid-col-3-6
                md-grid-row-5-7 md-grid-col-7-11
                lg-grid-row-6-9 lg-grid-col-11-15"
            name="contact-me"
            :expanded-section="selectedSection"  
            @set-selected="setSelectedSection"
        >
            <SectionContact :is-expanded="selectedSection === 'contact-me'"/>
        </AppGridSection>
    </div>
</template>

<style scoped lang="scss">
.grid {
    display: grid;
    grid-template-rows: repeat(9, 3.5rem);
    grid-template-columns: repeat(5, 3.5rem);
    gap: 1rem;

    padding-bottom: 1rem;
    justify-content: center;
    align-content: center;
    $spacing-bottom: calc($height-topbar / 2);
    min-height: calc(100vh - $height-topbar - $spacing-bottom);

    @media screen and (min-width: $md) {
            grid-template-columns: repeat(10, 3.5rem);
            grid-template-rows: repeat(6, 3.5rem);
    }

    @media screen and (min-width: $lg) {
            grid-template-columns: repeat(14, 3.5rem);
            grid-template-rows: repeat(8, 3.5rem);
    }

    &__content {
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }

    &__description {
        width: 10rem;

        @media screen and (min-width: $md) {
            width: 16rem;
        }
    }
}
</style>