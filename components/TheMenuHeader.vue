<template>
  <header :class="['fixed top-0 left-0 w-full z-50 transition-all duration-300']" :style="headerStyle">
    <div class="container mx-auto px-4">
      <nav class="flex items-center justify-between py-4">
        <NuxtLink class="text-2xl font-bold text-white" to="/">{{ $t('siteName') }}</NuxtLink>
        <div class="flex items-center space-x-4">
          <div class="relative">
            <button @click="toggleLanguageMenu" class="flex items-center text-white">
              <span :class="`fi fi-${languageFlags[locale]} mr-2`"></span>
              {{ languageNames[locale] }}
            </button>
            <div v-if="showLanguageMenu" class="bg-black absolute right-0 mt-2 bg-white rounded shadow-lg">
              <button v-for="(flag, lang) in languageFlags" :key="lang" @click="changeLanguage(lang)"
                class="bg-black flex items-center w-full px-4 py-2 text-left hover:bg-gray-100">
                <span :class="`fi fi-${flag} mr-2`"></span>
                {{ languageNames[lang] }}
              </button>
            </div>
          </div>
          <button @click="toggleMenu" class="bg-black text-white hover:text-fuchsia-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  </header>
  <div
    :class="['fixed top-0 right-0 h-full bg-black bg-opacity-80 backdrop-blur-lg transition-all duration-300', menuOpen ? 'w-64' : 'w-0']"
    style="z-index: 1001;">
    <div class="bg-black flex flex-col h-full p-6 overflow-y-auto">
      <button @click="toggleMenu" class="bg-black self-end text-white mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <NuxtLink class="text-white hover:text-gray-300 mb-4" to="/" @click="toggleMenu">{{ $t('home') }}</NuxtLink>
      <NuxtLink class="text-white hover:text-gray-300 mb-4" to="/booking_badminton" @click="toggleMenu">{{
        $t('booking_badminton') }}</NuxtLink>
      <NuxtLink class="text-white hover:text-gray-300 mb-4" to="/about" @click="toggleMenu">{{ $t('about') }}</NuxtLink>
      <NuxtLink class="text-white hover:text-gray-300 mb-4" to="/contact" @click="toggleMenu">{{ $t('contact') }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const scrollY = ref(0)
const lastScrollY = ref(0)
const opacity = ref(1)
const menuOpen = ref(false)
const showLanguageMenu = ref(false)

const languageFlags = {
  en: 'gb',
  tw: 'tw',
  es: 'es',
}

const languageNames = {
  en: 'English',
  tw: '中文',
  es: 'Español',
}

const handleScroll = () => {
  scrollY.value = window.scrollY
  if (scrollY.value > lastScrollY.value) {
    opacity.value = Math.max(0, opacity.value - 0.1)
  } else {
    opacity.value = Math.min(1, opacity.value + 0.1)
  }
  lastScrollY.value = scrollY.value
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const toggleLanguageMenu = () => {
  showLanguageMenu.value = !showLanguageMenu.value
}

const changeLanguage = (lang: string) => {
  locale.value = lang
  showLanguageMenu.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const headerStyle = computed(() => {
  const blur = Math.min(10, scrollY.value / 20)
  return {
    opacity: opacity.value,
    backgroundColor: `rgba(0, 0, 0, ${opacity.value * 0.8})`,
    backdropFilter: `blur(${blur}px)`,
  }
})

watch(locale, (newLocale) => {
  console.log('語言已更改為:', newLocale)
})
</script>

<style scoped>
.absolute{
  background-color: rgba(12, 10, 10, 0.509);
}

/* 如果需要，可以在這裡添加特定的樣式 */
</style>
