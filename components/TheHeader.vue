<template>
  <header :class="['fixed top-0 left-0 w-full z-50 transition-all duration-300']" :style="headerStyle">
    <div class="container mx-auto px-4">
      <nav class="flex items-center justify-between py-4">
        <NuxtLink class="text-2xl font-bold text-white" to="/">{{ $t('siteName') }}</NuxtLink>
        <div class="hidden md:flex space-x-4">
          <NuxtLink class="text-white hover:text-gray-300" to="/">{{ $t('home') }}</NuxtLink>
          <NuxtLink class="text-white hover:text-gray-300" to="/booking_badminton">{{ $t('booking_badminton') }}</NuxtLink>
          <NuxtLink class="text-white hover:text-gray-300" to="/about">{{ $t('about') }}</NuxtLink>
          <NuxtLink class="text-white hover:text-gray-300" to="/contact">{{ $t('contact') }}</NuxtLink>
        </div>
        <select v-model="locale" class="bg-transparent text-white border border-white rounded px-2 py-1">
          <option value="en">EN</option>
          <option value="tw">中文</option>
        </select>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const scrollY = ref(0)
const lastScrollY = ref(0)
const maxScroll = 200 // 滾動 200px 後完全消失
const opacity = ref(1)

const handleScroll = () => {
  scrollY.value = window.scrollY
  if (scrollY.value > lastScrollY.value) {
    // 向下滾動
    opacity.value = Math.max(0, opacity.value - 0.1)
  } else {
    // 向上滾動
    opacity.value = Math.min(1, opacity.value + 0.1)
  }
  lastScrollY.value = scrollY.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const headerStyle = computed(() => {
  const blur = Math.min(10, scrollY.value / 20) // 最大模糊度為 10px
  return {
    opacity: opacity.value,
    backgroundColor: `rgba(0, 0, 0, ${opacity.value * 0.8})`,
    backdropFilter: `blur(${blur}px)`,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000
  }
})

watch(locale, (newLocale) => {
  console.log('Language changed to:', newLocale)
})
</script>

<style scoped>
.language-selector {
  margin-left: 1rem;
}

.language-selector select {
  background-color: transparent;
  color: #fff;
  border: 1px solid #fff;
}

@media (max-width: 991.98px) {
  .language-selector {
    margin-top: 1rem;
  }
}
</style>
