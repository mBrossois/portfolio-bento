<script setup lang="ts">
import { DrawBackground } from '@/utils/DrawBackground';
import { onMounted, ref } from 'vue';

const canvas = ref();
let drawBackground: DrawBackground;

function setCanvas() {
    canvas.value.width = window.innerWidth;
    canvas.value.height= window.innerHeight;
    const ctx = canvas.value.getContext("2d");
    drawBackground = new DrawBackground(ctx, canvas.value.width, canvas.value.height)
    drawBackground.animate(0)
}

onMounted(() => {
    if (canvas.value.getContext) {
    setCanvas()

    window.addEventListener('resize', setCanvas)

    window.addEventListener('mousemove', onMouseMove)
    
    } else {
    // canvas-unsupported code here
    
    }
})

function onMouseMove(e: MouseEvent) {
    drawBackground.setMouse(e.x, e.y);
}
</script>

<template>
    <canvas ref="canvas" class="background"/>
</template>

<style scoped>
.background {
    position: fixed;
    top: 0;
    left: 0;
    background-color: var(--bg-primary, #000);
}
</style>