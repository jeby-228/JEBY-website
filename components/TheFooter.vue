<template>
  <footer class="bg-black text-white text-center py-8 mt-16 relative z-10">
    <p>&copy; {{ currentYear }} {{ $t('design') }} . {{ $t('allRightsReserved') }}</p>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

<style scoped>
footer {
  background-color: #000;
  color: #fff;
  text-align: center;
  padding: 2rem 0;
  margin-top: 4rem;
  position: relative;
  z-index: 10;
}
</style>
