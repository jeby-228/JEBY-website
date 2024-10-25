<template>
  <div class="booking-confirmation bg-gradient-to-r from-blue-100 to-purple-100 min-h-screen p-4">
    <h1 class="text-4xl font-bold text-center text-indigo-800 mb-8 p-4 bg-white rounded-lg shadow-lg">
      {{ $t('bookingConfirmation') }}
    </h1>

    <div class="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
      <h2 class="text-2xl font-semibold text-gray-800 mb-4">{{ $t('bookingDetails') }}</h2>
      <p class="text-xl mb-4">
        {{ $t('selectedDate') }}: <span class="font-bold">{{ formatFullDate(decodedDate) }}</span>
      </p>
      <!-- 在這裡添加更多預訂詳情 -->

      <div class="mt-8 text-center">
        <button
          @click="goBack"
          class="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300 mr-4"
        >
          {{ $t('goBack') }}
        </button>
        <button
          @click="finalizeBooking"
          class="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
        >
          {{ $t('finalizeBooking') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()

const decodedDate = ref('')

onMounted(() => {
  // 從路由參數中獲取並解碼日期
  decodedDate.value = decodeURIComponent(route.params.date)
})

const formatFullDate = (dateString) => {
  const date = new Date(dateString)
  const locale = useI18n().locale.value
  return date.toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' })
}

const goBack = () => {
  router.push('/booking_badminton')
}

const finalizeBooking = () => {
  // 在這裡實現最終的預訂邏輯
  console.log('預訂已完成:', decodedDate.value)
  // 可以添加成功提示或重定向到成功頁面
}
</script>
