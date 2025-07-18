<!-- src/views/PortfolioView.vue -->
<template>
  <div class="min-h-screen px-4 py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <div class="mx-auto max-w-7xl">
      <!-- Header Section -->
      <div class="mb-16 text-center">
        <h1 class="mb-4 text-5xl font-bold tracking-tight text-white">
          PORTFOLIO
        </h1>
        <p class="max-w-2xl mx-auto text-xl text-slate-300">
          Explore my collection of web and mobile applications built with modern technologies
        </p>
      </div>

      <!-- Web Projects Section -->
      <ProjectSection 
        title="Web Projects" 
        :projects="webProjects"
        @project-click="openModal"
      />

      <!-- Mobile Projects Section -->
      <ProjectSection 
        title="Mobile Projects" 
        :projects="mobileProjects"
        @project-click="openModal"
      />

      <!-- Project Modal -->
      <ProjectModal 
        :isOpen="isModalOpen"
        :project="selectedProject"
        @close="closeModal"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import ProjectSection from '@/components/ProjectSection.vue'
import ProjectModal from '@/components/ProjectModal.vue'

// Modal state
const isModalOpen = ref(false)
const selectedProject = ref(null)

// Sample project data - replace with your actual data
const webProjects = reactive([
  {
    id: 1,
    title: 'The Ghana Knowledge and Skills Bank',
    description: 'A comprehensive digital platform for managing educational resources and skills development programs across Ghana.',
    shortDescription: 'Educational resource management platform',
    image: '/src/assets/images/hero-pic.png',
    images: [
      '/src/assets/images/hero-pic.png',
      '/src/assets/images/hero-pic2.png',
      '/src/assets/images/abstract-cloud.jpeg'
    ],
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Tailwind CSS'],
    liveUrl: 'https://example.com/gksb',
    githubUrl: 'https://github.com/example/gksb',
    category: 'web'
  },
  {
    id: 2,
    title: 'Digitalization of Ghana Births and Deaths Registry',
    description: 'Modern digital solution for managing birth and death certificates, streamlining the registration process and improving accessibility for citizens.',
    shortDescription: 'Government registry digitalization system',
    image: '/src/assets/images/hero-pic2.png',
    images: [
      '/src/assets/images/hero-pic2.png',
      '/src/assets/images/hero-pic.png',
      '/src/assets/images/abstract-cloud.jpeg'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    liveUrl: 'https://example.com/registry',
    githubUrl: 'https://github.com/example/registry',
    category: 'web'
  },
  {
    id: 3,
    title: 'Fidelity Customer Self-Service Portal',
    description: 'A comprehensive self-service portal enabling Fidelity customers to manage their accounts, transactions, and services independently.',
    shortDescription: 'Banking self-service portal',
    image: '/src/assets/images/abstract-cloud.jpeg',
    images: [
      '/src/assets/images/abstract-cloud.jpeg',
      '/src/assets/images/hero-pic.png',
      '/src/assets/images/hero-pic2.png'
    ],
    technologies: ['Angular', 'Spring Boot', 'Oracle', 'Bootstrap'],
    liveUrl: 'https://example.com/fidelity',
    githubUrl: 'https://github.com/example/fidelity',
    category: 'web'
  }
])

const mobileProjects = reactive([
  {
    id: 4,
    title: 'KinzCut Mobile',
    description: 'A modern mobile application for booking hair salon appointments, managing schedules, and connecting customers with professional stylists.',
    shortDescription: 'Hair salon booking app',
    image: '/src/assets/images/hero-pic.png',
    images: [
      '/src/assets/images/hero-pic.png',
      '/src/assets/images/hero-pic2.png',
      '/src/assets/images/abstract-cloud.jpeg'
    ],
    technologies: ['Flutter', 'Firebase', 'Dart', 'Google Maps API'],
    liveUrl: 'https://play.google.com/store/apps/details?id=com.kinzcut',
    githubUrl: 'https://github.com/example/kinzcut',
    category: 'mobile'
  },
  {
    id: 5,
    title: 'Trofare',
    description: 'A comprehensive travel and fare comparison mobile application that helps users find the best transportation options and prices.',
    shortDescription: 'Travel & fare comparison app',
    image: '/src/assets/images/hero-pic2.png',
    images: [
      '/src/assets/images/hero-pic2.png',
      '/src/assets/images/hero-pic.png',
      '/src/assets/images/abstract-cloud.jpeg'
    ],
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Stripe API'],
    liveUrl: 'https://example.com/trofare',
    githubUrl: 'https://github.com/example/trofare',
    category: 'mobile'
  }
])

// Modal functions
const openModal = (project) => {
  selectedProject.value = project
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  selectedProject.value = null
}
</script>

<style scoped>
/* Add any additional styles here */
</style>