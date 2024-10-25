<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <header class="bg-white shadow w-full p-4">
      <h1 class="text-2xl font-bold text-center">{{ title }}</h1>
    </header>
    <main class="flex flex-col items-center mt-8">
      <p class="text-lg text-gray-700">{{ description }}</p>
      <button @click="handleClick" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        點擊我
      </button>
    </main>
    <footer class="mt-8 text-center">
      <p class="text-gray-500">版權 © 2023</p>
    </footer>
  </div>
</template>

<script setup>




</script>
