<script setup lang="ts">
import AppText from '@/components/AppText.vue';

defineProps<{
    company: string,
    jobTitle: string,
    start: number,
    end: number | 'Present',
    description: string
}>()
</script>

<template>
    <div>
        <AppText variant="p">{{ company }}</AppText>
        <AppText variant="h2">{{ jobTitle }}</AppText>
        <AppText variant="p">{{ description }}</AppText>
        <div><AppText variant="span">{{ start }}</AppText> - <AppText variant="span">{{ end }}</AppText></div>
    </div>
</template>