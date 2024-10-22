<template>
  <div class="app-container">
    <TheMenuHeader />
    <!-- <TheHeader /> -->
    <main class="main-content parallax-container">
      <NuxtPage />
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import TheMenuHeader from '~/components/TheMenuHeader.vue'
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'
</script>

<style>
@import '@/assets/css/global.css';

.app-container {
  overflow-x: hidden;
}

.parallax-container {
  perspective: 1px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
}

.main-content {
  position: relative;
  z-index: 1;
}

/* 移除 container-fluid 和 row, col-12 的樣式，因為它們可能會影響視差效果 */
</style>
