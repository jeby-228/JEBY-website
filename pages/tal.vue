<template>
  <div class="basic-page">
    <header>
      <h1>{{ title }}</h1>
    </header>
    <main>
      <p>{{ description }}</p>
      <button @click="handleClick">點擊我</button>
    </main>
    <footer>
      <p>版權 © 2023</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const title = ref('基本頁面')
const description = ref('這是一個基本的 Vue.js 頁面範本。')

const handleClick = () => {
  alert('按鈕被點擊了！')
}
</script>

<style scoped>
.basic-page {
  font-family: Arial, sans-serif;
  padding: 20px;
}
header {
  background-color: #f8f9fa;
  padding: 10px;
  text-align: center;
}
footer {
  text-align: center;
  margin-top: 20px;
}
</style>