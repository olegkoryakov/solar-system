<template>
  <canvas
    ref="canvasRef"
    class="canvas-scene"
    :width="data.width"
    :height="data.height"
  ></canvas>
</template>

<script lang="ts" setup>
import {
  ref, onMounted, onUnmounted, reactive,
} from 'vue';
import SolarSystem from '@/babylon/SolarSystem';
import * as types from './types';

const canvasRef = ref<HTMLCanvasElement | null>(null);
const data = reactive<types.DataType>({
  baseScene: null,
  height: window.innerHeight,
  width: window.innerWidth,
});
const onWindowResize = () => {
  data.width = window.innerWidth;
  data.height = window.innerHeight;
  data.baseScene?.resizeEngine();
};

onMounted(() => {
  if (canvasRef.value) {
    data.baseScene = new SolarSystem(canvasRef.value);
    window.addEventListener('resize', onWindowResize);
  }
});

onUnmounted(() => {
  window.removeEventListener('resize', onWindowResize);
});

</script>
<style lang="scss" scoped>
@import url('./style.scss');
</style>
