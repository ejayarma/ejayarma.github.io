<!-- src/views/PortfolioView.vue -->
<template>
  <div class="min-h-screen px-4 py-16">
    <div class="mx-auto max-w-6xl">
      <!-- Header Section -->
      <div class="mb-12 text-center">
        <p class="section-eyebrow">&gt; selected work</p>
        <h1 class="mt-2 mb-4 text-4xl font-bold tracking-tight md:text-5xl">
          PORTFOLIO
        </h1>
        <p class="max-w-2xl mx-auto text-lg text-light">
          National-scale systems, enterprise platforms, and mobile apps I've designed, built, and shipped.
        </p>
      </div>

      <!-- Filter Tabs -->
      <div class="flex flex-wrap justify-center gap-2 mb-12" role="tablist" aria-label="Filter projects">
        <button
          v-for="filter in filters"
          :key="filter.key"
          type="button"
          role="tab"
          :aria-selected="activeFilter === filter.key"
          class="px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full cursor-pointer"
          :class="activeFilter === filter.key ? 'bg-brand text-darkest' : 'bg-dark text-light hover:text-lightest border border-mid/50'"
          @click="activeFilter = filter.key"
        >
          {{ filter.label }}
        </button>
      </div>

      <!-- Projects -->
      <ProjectSection
        v-if="filteredProjects.length"
        :projects="filteredProjects"
        @project-click="openModal"
      />

      <div v-else class="py-20 text-center text-light">
        <p class="text-lg font-medium text-lightest">No projects in this category yet.</p>
        <p class="mt-1 text-light">New work is always on the way. Browse everything instead.</p>
        <button
          type="button"
          class="mt-6 btn-secondary"
          @click="activeFilter = 'all'"
        >
          Show All Projects
        </button>
      </div>

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
import { ref, computed } from 'vue'
import ProjectSection from '@/components/ProjectSection.vue'
import ProjectModal from '@/components/ProjectModal.vue'
import cloudImg from '@/assets/images/abstract-cloud.jpeg'
import portraitImg from '@/assets/images/hero-pic.png'
import portraitImg2 from '@/assets/images/hero-pic2.png'
import bdrImg from '@/assets/projects/bdr.svg'
import gksbImg from '@/assets/projects/gksb.svg'
import erpImg from '@/assets/projects/erp.svg'
import hubconnectImg from '@/assets/projects/hubconnect.svg'

const isModalOpen = ref(false)
const selectedProject = ref(null)
const activeFilter = ref('all')

const filters = [
  { key: 'all', label: 'All' },
  { key: 'web', label: 'Web' },
  { key: 'mobile', label: 'Mobile' }
]

const projects = [
  {
    id: 1,
    title: 'Ghana Births & Deaths Registry Digitalisation',
    description: 'Full-stack features for a World Bank–funded national digital identity and civil registration system serving millions of citizens. Delivered assigned milestones ahead of schedule for the Ghana Births and Deaths Registry Harmonisation and Digitalisation programme.',
    shortDescription: 'National digital identity & civil registration system (World Bank–funded)',
    image: bdrImg,
    images: [bdrImg, cloudImg, portraitImg],
    technologies: ['Laravel', 'JavaScript', 'MySQL', 'Nginx'],
    liveUrl: null,
    githubUrl: null,
    category: 'web'
  },
  {
    id: 2,
    title: 'Ghana Knowledge and Skills Bank',
    description: 'A national platform for managing educational resources and skills development programmes across Ghana — built to give learners and administrators one clear place to work.',
    shortDescription: 'National educational resource management platform',
    image: gksbImg,
    images: [gksbImg, cloudImg, portraitImg2],
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Tailwind CSS'],
    liveUrl: null,
    githubUrl: null,
    category: 'web'
  },
  {
    id: 3,
    title: 'Kedebah ERP System',
    description: 'Scalable, loosely coupled module APIs for a multi-tenant ERP system. Reduced API latency by 20% and increased throughput to support over 100 concurrent tenants.',
    shortDescription: 'Multi-tenant ERP with loosely coupled module APIs',
    image: erpImg,
    images: [erpImg, cloudImg, portraitImg],
    technologies: ['Flask', 'Laravel', 'Redis', 'Nginx', 'PostgreSQL'],
    liveUrl: null,
    githubUrl: null,
    category: 'web'
  },
  {
    id: 4,
    title: 'HubConnect Mobile Application',
    description: 'A mobile platform connecting agricultural stakeholders. Reduced post-harvest losses to near-zero and expanded farmer access to agrochemical and agri-input resources for over 1,000 users.',
    shortDescription: 'Agri-tech mobile platform connecting agricultural stakeholders',
    image: hubconnectImg,
    images: [hubconnectImg, cloudImg, portraitImg2],
    technologies: ['Flutter', 'Laravel', 'REST APIs'],
    liveUrl: null,
    githubUrl: null,
    category: 'mobile'
  }
]

const filteredProjects = computed(() =>
  activeFilter.value === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter.value)
)

const openModal = (project) => {
  selectedProject.value = project
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  selectedProject.value = null
}
</script>
