<!-- src/views/PortfolioView.vue -->
<template>
  <div class="min-h-screen px-4 py-16">
    <div class="mx-auto max-w-6xl">
      <!-- Header Section -->
      <div v-reveal class="mb-12 text-center">
        <p class="section-eyebrow">&gt; selected work</p>
        <h1 class="mt-2 mb-4 text-4xl font-bold tracking-tight md:text-5xl">
          PORTFOLIO
        </h1>
        <p class="max-w-2xl mx-auto text-lg text-light">
          National-scale systems, enterprise platforms, and mobile apps I've designed, built, and shipped.
        </p>
      </div>

      <!-- Filter Tabs -->
      <div v-reveal="80" class="flex flex-wrap justify-center gap-2 mb-12" role="tablist" aria-label="Filter projects">
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
    description: 'Full-stack features for the Ghana Births and Deaths Registry Harmonisation and Digitalisation programme, a World Bank funded national digital identity and civil registration system.',
    approach: 'The Registry runs inside the World Bank\u2019s Public Sector Reform for Results programme, so continuity matters more than speed. As part of the team, I built my assigned features on Laravel with MySQL behind Nginx, keeping schema changes migration-based so each phased rollout stayed isolated.',
    shortDescription: 'National digital identity & civil registration system (World Bank funded)',
    technologies: ['Laravel', 'JavaScript', 'MySQL', 'Nginx'],
    liveUrl: null,
    githubUrl: null,
    confidential: true,
    category: 'web'
  },
  {
    id: 2,
    title: 'Ghana Knowledge and Skills Bank',
    description: 'A national educational platform launched by Ghana’s Ministry of Education and Ministry of Communications in 2024. Free, AI-powered learning for students at every level, accessible even offline. Built by the team at Npontu Technologies.',
    approach: 'Learners and administrators live in very different workflows, so instead of one monolithic page we split the work into a Laravel API consumed by a Vue.js and Tailwind front end. A shared content model keeps the platform extensible. Today it carries 5M+ learning archives and serves 575k+ active users, making Ghana the second country in Africa, after Egypt, to run a national digital learning infrastructure.',
    shortDescription: 'National educational resource management platform',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Tailwind CSS'],
    liveUrl: null,
    githubUrl: null,
    confidential: true,
    category: 'web'
  },
  {
    id: 3,
    title: 'Kedebah ERP System',
    description: 'Scalable, loosely coupled module APIs for Kedebah, a multi-tenant ERP built by Npontu Technologies that unifies finance, HR, project management, retail and CRM. My work on the API layer helped cut latency by 20% and support over 100 concurrent tenants.',
    approach: 'Multi-tenancy forced isolation and scale at the same time. One codebase serves multiple client companies nationwide, so the team decomposed it into loosely coupled module APIs across Flask and Laravel. My focus was the API layer: Redis in front of hot reads to cut latency by about 20%, and relational state in PostgreSQL. The system now sustains 100+ concurrent tenants.',
    shortDescription: 'Multi-tenant ERP with loosely coupled module APIs',
    technologies: ['Flask', 'Laravel', 'Redis', 'Nginx', 'PostgreSQL'],
    liveUrl: null,
    githubUrl: null,
    confidential: true,
    category: 'web'
  },
  {
    id: 4,
    title: 'HubConnect Mobile Application',
    description: 'A mobile marketplace on Google Play that connects farmers, suppliers and buyers across the agricultural value chain. The app expanded farmer access to agrochemical and agri-input resources for over 1,000 users and helped push post-harvest losses toward zero.',
    approach: 'Ghana loses about $1.9B a year to post-harvest loss, so the fix had to reach farmers on phones, not desktops. The team chose Flutter for one cross-platform codebase on top of a Laravel REST API, so updates ship to Android and iOS together. The app now serves 1,000+ users while helping push post-harvest losses toward zero.',
    shortDescription: 'Agri-tech mobile platform connecting agricultural stakeholders',
    technologies: ['Flutter', 'Laravel', 'REST APIs'],
    liveUrl: null,
    githubUrl: null,
    confidential: true,
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
