<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';

onMounted(() => {});

onUnmounted(() => {});
</script>

<template>
  <div
    id="viewerContainer"
    class="viewer-container"
  >
    <canvas
      id="renderCanvas"
      width="100"
      height="100"
    />
  </div>
</template>

<style lang="scss" scoped></style>
