<!-- src/components/ProjectSection.vue -->
<template>
  <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
    <ProjectCard
      v-for="project in projects"
      :key="project.id"
      :project="project"
      @click="$emit('project-click', project)"
    />
  </div>
</template>

<script setup>
import ProjectCard from './ProjectCard.vue'

defineProps({
  projects: {
    type: Array,
    required: true
  }
})

defineEmits(['project-click'])
</script>
