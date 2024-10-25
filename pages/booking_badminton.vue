<template>
  <div class="booking-system bg-gradient-to-r from-blue-100 to-purple-100 min-h-screen p-4">
    <h1 class="text-4xl font-bold text-center text-indigo-800 mb-8 p-4 bg-white rounded-lg shadow-lg">
      {{ $t('badmintonBookingSystem') }}
    </h1>

    <div class="time-selector bg-white rounded-xl shadow-lg p-6">
      <h2 class="text-2xl font-semibold text-gray-800 mb-4"></h2>
      <div class="grid grid-cols-7 gap-2 sm:gap-4">
        <div 
          v-for="date in availableDates" 
          :key="date" 
          class="date-item"
          :class="{ 'selected': date === selectedDate }"
          @click="selectedDate = date"
        >
          <div class="day text-sm font-medium text-gray-600">{{ formatDay(date) }}</div>
          <div class="date text-lg font-bold">{{ formatDateNumber(date) }}</div>
        </div>
      </div>
    </div>

    <div class="mt-8 text-center">
      <p class="text-xl text-indigo-800 font-medium">
        {{ $t('selectedDate') }}: <span class="font-bold">{{ formatFullDate(selectedDate) }}</span>
      </p>
    </div>

    <!-- 新增確認送出按 -->
    <div class="mt-8 text-center">
      <button
        @click="confirmBooking"
        class="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
      >
        {{ $t('confirmBooking') }}
      </button>
    </div>

    <!-- 新增提示窗口 -->
    <div v-if="showConfirmModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div class="bg-white p-8 rounded-lg shadow-xl">
        <h2 class="text-2xl font-bold mb-4">{{ $t('confirmBookingTitle') }}</h2>
        <p class="mb-6">{{ $t('confirmBookingMessage', { date: formatFullDate(selectedDate) }) }}</p>
        <div class="flex justify-end space-x-4">
          <button
            @click="showConfirmModal = false"
            class="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition duration-300"
          >
            {{ $t('cancel') }}
          </button>
          <button
            @click="submitBooking"
            class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            {{ $t('confirm') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const router = useRouter()
const { t } = useI18n()

const selectedDate = ref(new Date().toISOString().split('T')[0])

const availableDates = computed(() => {
  const dates = []
  const today = new Date()
  const oneMonthLater = new Date(today)
  oneMonthLater.setMonth(today.getMonth() + 1)

  for (let date = new Date(today); date < oneMonthLater; date.setDate(date.getDate() + 1)) {
    dates.push(new Date(date).toISOString().split('T')[0])
  }
  return dates
})

const formatDay = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('zh-TW', { weekday: 'short' })
}

const formatDateNumber = (dateString) => {
  const date = new Date(dateString)
  return date.getDate()
}
// 格式化完整日期的函數
const formatFullDate = (dateString) => {
  // 將日期字串轉換為 Date 物件
  const date = new Date(dateString)
  
  // 使用 toLocaleDateString 方法格式化日期
  // 使用當前語系格式化日期
  // 選項包括：年（數字）、月（完整名稱）、日（數字）、星期（完整名稱）
  const locale = useI18n().locale.value
  return date.toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' })
}

// 新增狀態和方法
const showConfirmModal = ref(false)

const confirmBooking = () => {
  showConfirmModal.value = true
}

const submitBooking = () => {
  // 將選擇的日期編碼為 URL 安全的字符串
  const encodedDate = encodeURIComponent(selectedDate.value)
  // 導航到新的確認頁面，並傳遞選擇的日期作為參數
  router.push(`/booking-confirmation/${encodedDate}`)
  showConfirmModal.value = false
}
</script>

<style scoped>
.date-item {
  @apply text-center cursor-pointer p-2 rounded-lg transition-all duration-300 ease-in-out;
}

.date-item:hover {
  @apply bg-indigo-100 transform scale-105;
}

.date-item.selected {
  @apply bg-indigo-500 text-white transform scale-110;
}

.day {
  @apply mb-1;
}

.date {
  @apply leading-none;
}
</style>
