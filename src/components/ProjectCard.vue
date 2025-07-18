<!-- src/components/ProjectCard.vue -->
<template>
  <div 
    class="overflow-hidden transition-all duration-300 transform shadow-xl cursor-pointer bg-slate-800 rounded-2xl hover:scale-105 hover:shadow-2xl group"
    @click="$emit('click')"
  >
    <!-- Image Section -->
    <div class="relative h-48 overflow-hidden">
      <img 
        :src="project.image" 
        :alt="project.title"
        class="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
      />
      <div class="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-slate-900/50 to-transparent group-hover:opacity-100"></div>
      
      <!-- Category Badge -->
      <div class="absolute top-4 left-4">
        <span class="inline-flex items-center px-3 py-1 text-xs font-medium text-white bg-blue-500 rounded-full">
          {{ project.category }}
        </span>
      </div>
    </div>

    <!-- Content Section -->
    <div class="p-6">
      <h3 class="mb-2 text-xl font-bold text-white transition-colors duration-300 group-hover:text-blue-400">
        {{ project.title }}
      </h3>
      
      <p class="mb-4 text-sm text-slate-300 line-clamp-2">
        {{ project.shortDescription }}
      </p>

      <!-- Technologies -->
      <div class="flex flex-wrap gap-2 mb-4">
        <span 
          v-for="tech in project.technologies.slice(0, 3)" 
          :key="tech"
          class="inline-flex items-center px-2 py-1 text-xs font-medium rounded-md bg-slate-700 text-slate-300"
        >
          {{ tech }}
        </span>
        <span 
          v-if="project.technologies.length > 3"
          class="inline-flex items-center px-2 py-1 text-xs font-medium rounded-md bg-slate-600 text-slate-400"
        >
          +{{ project.technologies.length - 3 }} more
        </span>
      </div>

      <!-- View Project Button -->
      <button class="flex items-center justify-center w-full gap-2 px-4 py-2 font-medium text-white transition-colors duration-200 bg-blue-600 rounded-lg hover:bg-blue-700">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
        </svg>
        View Project
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})

defineEmits(['click'])
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>