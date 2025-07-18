<!-- src/components/ProjectSection.vue -->
<template>
  <div class="mb-16">
    <h2 class="mb-8 text-3xl font-bold text-center text-white">
      {{ title }}
    </h2>
    
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
        @click="$emit('project-click', project)"
      />
    </div>
  </div>
</template>

<script setup>
import ProjectCard from './ProjectCard.vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  projects: {
    type: Array,
    required: true
  }
})

defineEmits(['project-click'])
</script>