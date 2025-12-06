<script setup lang="ts">
import AppText from '@/components/AppText.vue';
import AppTag from '@/components/AppTag.vue';

defineProps<{
    company: string,
    jobTitle: string,
    start: number,
    end: number | 'Present',
    description: string,
    tags: Array<string>
}>()
</script>

<template>
    <div class="experience-details">
        <div>
            <AppText class="experience-details__company" variant="h3">{{ company }}</AppText>
            <AppText variant="h2">{{ jobTitle }}</AppText>
        </div>
        <AppText variant="p">{{ description }}</AppText>
        <div class="experience-details__tags"><AppText variant="span">Tech stack:</AppText><AppTag v-for="tag in tags" :key="tag" color="white" size="sm">{{tag}}</AppTag> </div>
        <AppText variant="span">{{ start }} - {{ end }}</AppText>
    </div>
</template>

<style lang="scss" scoped>
.experience-details {
    display: flex;
    flex-direction: column;
    gap: .25rem;

    &__tags {
        display: flex;
        gap: .5rem;
        align-items: center;
        flex-wrap: wrap;
    }
}
</style>