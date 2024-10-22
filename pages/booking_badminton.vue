<template>
  <div class="booking-system">
    <h1>{{ $t('badmintonBookingSystem') }}</h1>
    <div class="courts-container">
      <div v-for="court in courts" :key="court.id" class="court">
        <h2>{{ $t('court') }} {{ court.name }}</h2>
        <div class="time-slots">
          <div v-for="slot in court.timeSlots" :key="slot.id" class="time-slot">
            <span>{{ formatTime(slot.startTime) }} - {{ formatTime(slot.endTime) }}</span>
            <button 
              @click="bookCourt(court.id, slot.id)" 
              :disabled="slot.isBooked"
              :class="{ 'booked': slot.isBooked }"
            >
              {{ slot.isBooked ? $t('booked') : $t('book') }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const courts = ref([
  {
    id: 1,
    name: 'A',
    timeSlots: [
      { id: 1, startTime: '09:00', endTime: '10:00', isBooked: false },
      { id: 2, startTime: '10:00', endTime: '11:00', isBooked: false },
      { id: 3, startTime: '11:00', endTime: '12:00', isBooked: false },
      // 添加更多時段...
    ]
  },
  {
    id: 2,
    name: 'B',
    timeSlots: [
      { id: 1, startTime: '09:00', endTime: '10:00', isBooked: false },
      { id: 2, startTime: '10:00', endTime: '11:00', isBooked: false },
      { id: 3, startTime: '11:00', endTime: '12:00', isBooked: false },
      // 添加更多時段...
    ]
  },
  {
    id: 3,
    name: 'C',
    timeSlots: [
      { id: 1, startTime: '09:00', endTime: '10:00', isBooked: false },
      { id: 2, startTime: '10:00', endTime: '11:00', isBooked: false },
      { id: 3, startTime: '11:00', endTime: '12:00', isBooked: false },
      // 添加更多時段...
    ]
  },
  {
    id: 4,
    name: 'D',
    timeSlots: [
      { id: 1, startTime: '09:00', endTime: '10:00', isBooked: false },
      { id: 2, startTime: '10:00', endTime: '11:00', isBooked: false },
      { id: 3, startTime: '11:00', endTime: '12:00', isBooked: false },
      // 添加更多時段...
    ]
  }
])

const formatTime = (time) => {
  return time // 如果需要，可以在這裡添加時間格式化邏輯
}

const bookCourt = (courtId, slotId) => {
  const court = courts.value.find(c => c.id === courtId)
  if (court) {
    const slot = court.timeSlots.find(s => s.id === slotId)
    if (slot) {
      slot.isBooked = !slot.isBooked
      if (slot.isBooked) {
        alert(t('bookingSuccess', { court: court.name, startTime: formatTime(slot.startTime), endTime: formatTime(slot.endTime) }))
      } else {
        alert(t('bookingCancel', { court: court.name, startTime: formatTime(slot.startTime), endTime: formatTime(slot.endTime) }))
      }
    }
  }
}
</script>

<style>
@import '@/assets/css/booking.css';
</style>
