<template>
  <div class="home-page">
    <section class="hero parallax-layer bg-layer" style="background-image: url('/images/hero-bg.jpg')">
      <h1 class="text-6xl mb-4 text-white">{{ $t('welcomeMessage') }}</h1>
      <p class="text-xl mb-8 text-white">{{ $t('heroSubtitle') }}</p>
      <a href="#projects" class="absolute bottom-8 text-white no-underline text-lg">{{ $t('scrollDown') }}</a>
    </section>

    <section id="about" class="py-24 px-8 bg-gray-100 parallax-layer content-layer">
      <div class="container mx-auto">
        <h2 class="text-4xl mb-8 text-center text-black">{{ $t('aboutTitle') }}</h2>
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-8 md:mb-0">
            <img src="/images/checklist.png" alt="About Us" class="rounded-lg shadow-lg w-full max-w-md mx-auto">
          </div>
          <div class="md:w-1/2 md:pl-8">
            <p class="text-lg text-black">{{ $t('aboutDescription') }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="services" class="bg-gray-900 py-24 px-8 parallax-layer content-layer">
      <div class="container mx-auto">
        <h2 class="text-4xl mb-12 text-center text-white">{{ $t('servicesTitle') }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="service in services" :key="service.id" class="bg-gray-800 p-6 rounded-lg transition-transform duration-300 hover:-translate-y-2">
            <img :src="service.icon" :alt="service.title" class="w-16 h-16 mb-4 mx-auto">
            <h3 class="text-2xl mb-4 text-white text-center">{{ service.title }}</h3>
            <p class="text-gray-300">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="projects" class="py-24 px-8 bg-white parallax-layer content-layer">
      <div class="container mx-auto">
        <h2 class="text-4xl mb-12 text-center text-gray-800">{{ $t('featuredProjects') }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="project in featuredProjects" :key="project.id" class="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
            <img :src="project.image" :alt="project.name" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-2xl mb-2 text-gray-800">{{ project.name }}</h3>
              <p class="text-gray-600">{{ project.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="testimonials" class="bg-gray-100 py-24 px-8 parallax-layer content-layer">
      <div class="container mx-auto">
        <h2 class="text-4xl mb-12 text-center text-gray-800">{{ $t('testimonialsTitle') }}</h2>
        <div class="flex overflow-x-auto space-x-8 pb-8">
          <div v-for="testimonial in testimonials" :key="testimonial.id" class="bg-white p-6 rounded-lg shadow-lg min-w-[300px]">
            <!-- <img :src="testimonial.avatar" :alt="testimonial.author" class="w-16 h-16 rounded-full mb-4 mx-auto"> -->
            <p class="mb-4 text-gray-600">"{{ testimonial.content }}"</p>
            <h4 class="font-bold text-gray-800">{{ testimonial.author }}</h4>
          </div>
        </div>
      </div>；
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const featuredProjects = [
  { id: 1, name: 'Project 1', description: 'Description 1', image: '/images/checklist.png' },
  { id: 2, name: 'Project 2', description: 'Description 2', image: '/images/gr.png' },
  { id: 3, name: 'Project 3', description: 'Description 3', image: '/images/checklist.png' },
]

const services = [
  { id: 1, title: 'Web Design', description: 'Creative and responsive web design solutions.', icon: '/images/gr.png' },
  { id: 2, title: 'Branding', description: 'Comprehensive branding strategies for your business.', icon: '/images/gr.png' },
  { id: 3, title: 'UX/UI Design', description: 'User-centric interface and experience design.', icon: '/images/gr.png' },
]

const testimonials = [
  { id: 1, content: 'Amazing work! Exceeded our expectations.', author: 'John Doe, CEO', avatar: '' },
  { id: 2, content: 'Highly professional and creative team.', author: 'Jane Smith, Marketing Director', avatar: '' },
]
</script>

<style>
@import '@/assets/css/main.css';

.parallax-layer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.bg-layer {
  transform: translateZ(-1px) scale(2);
}

.content-layer {
  transform: translateZ(0);
}

.hero {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-size: cover;
  background-position: center;
  position: relative;
}

#about, #services, #projects, #testimonials {
  position: relative;
  z-index: 1;
  background-color: #fff;
}
</style>
