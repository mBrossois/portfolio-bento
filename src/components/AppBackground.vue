<script setup lang="ts">
import { DrawBackground } from '@/utils/DrawBackground';
import { onMounted, ref, watch } from 'vue';
import { useEventListener } from '@vueuse/core'

const props = defineProps<{
    isDarkMode: boolean
}>()

const canvas = ref();
let drawBackground: DrawBackground;

function setCanvas() {
    canvas.value.width = window.innerWidth
    canvas.value.height= window.innerHeight
    const ctx = canvas.value.getContext("2d")
    drawBackground = new DrawBackground(ctx, canvas.value.width, canvas.value.height)
    drawBackground.setMode(props.isDarkMode)
    drawBackground.animate(0)
}

function onMouseMove(e: MouseEvent) {
    drawBackground.setMouse(e.x, e.y);
}

function onModeChange() {
    drawBackground.setMode(props.isDarkMode);
}

onMounted(() => {
    if (canvas.value.getContext) {
    setCanvas()

    useEventListener(window, 'resize', setCanvas)

    useEventListener(window, 'mousemove', onMouseMove)

    watch(() => props.isDarkMode, () => {
        onModeChange()
    })
    
    } else {
    // canvas-unsupported code here
    
    }
})
</script>

<template>
    <canvas ref="canvas" class="background"/>
</template>

<style scoped>
.background {
    transition: background 200ms ease-in-out;
    position: fixed;
    top: 0;
    left: 0;
    background-color: var(--bg-primary, #000);
}
</style>