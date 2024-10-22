<template>
  <div class="contact-page">
    <h1>{{ $t('contactTitle') }}</h1>
    <form @submit.prevent="submitForm" class="contact-form">
      <input type="text" :placeholder="$t('namePlaceholder')" v-model="form.name" required>
      <input type="email" :placeholder="$t('emailPlaceholder')" v-model="form.email" required>
      <textarea :placeholder="$t('messagePlaceholder')" v-model="form.message" required></textarea>
      <button type="submit" :disabled="isSubmitting">
        {{ isSubmitting ? $t('sendingButton') : $t('sendButton') }}
      </button>
    </form>
    <p v-if="submitMessage" :class="{ 'success': submitSuccess, 'error': !submitSuccess }">
      {{ submitMessage }}
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const form = ref({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)

const submitForm = async () => {
  isSubmitting.value = true
  submitMessage.value = ''

  try {
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: form.value
    })

    if (response.success) {
      submitSuccess.value = true
      submitMessage.value = t('successMessage')
      form.value = { name: '', email: '', message: '' }
    } else {
      throw new Error(response.message)
    }
  } catch (error) {
    submitSuccess.value = false
    submitMessage.value = t('errorMessage')
    console.error('Error submitting form:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style>
@import '@/assets/css/contact.css';

.success {
  color: green;
}

.error {
  color: red;
}
</style>
