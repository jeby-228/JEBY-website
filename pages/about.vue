<template>
  <div class="about-page">
    <h1>{{ $t('aboutTitle') }}</h1>
    
    <section class="company-intro">
      <h2>{{ $t('companyIntro') }}</h2>
      <p>{{ $t('companyIntroText') }}</p>
    </section>
    
    <section class="our-mission">
      <h2>{{ $t('ourMission') }}</h2>
      <p>{{ $t('ourMissionText') }}</p>
    </section>
    
    <section class="our-values">
      <h2>{{ $t('ourValues') }}</h2>
      <ul>
        <li>{{ $t('valueInnovation') }}</li>
        <li>{{ $t('valueIntegrity') }}</li>
        <li>{{ $t('valueTeamwork') }}</li>
        <li>{{ $t('valueCustomerFirst') }}</li>
      </ul>
    </section>
    
    <section class="our-team">
      <h2>{{ $t('ourTeam') }}</h2>
      <p>{{ $t('ourTeamText') }}</p>
      <!-- 這裡可以添加團隊成員的照片和簡介 -->
    </section>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style>
@import '@/assets/css/about.css';
</style>
