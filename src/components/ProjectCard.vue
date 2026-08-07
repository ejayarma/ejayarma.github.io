<!-- src/components/ProjectCard.vue -->
<template>
  <article
    class="overflow-hidden transition-[transform,box-shadow] duration-300 card-surface hover:shadow-glow hover:-translate-y-1 cursor-pointer group"
    @click="$emit('click')"
  >
    <!-- Image Section -->
    <div class="relative h-44 overflow-hidden">
      <img
        :src="project.image"
        :alt="project.title"
        width="640"
        height="360"
        loading="lazy"
        class="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
      />
      <div class="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-darkest to-transparent group-hover:opacity-70"></div>

      <!-- Category Badge -->
      <div class="absolute top-4 left-4">
        <span class="inline-flex items-center px-3 py-1 text-xs font-medium text-darkest bg-brand rounded-full">
          {{ project.category }}
        </span>
      </div>
    </div>

    <!-- Content Section -->
    <div class="p-6">
      <h3 class="mb-2 text-xl font-bold transition-colors duration-300 group-hover:text-brand">
        {{ project.title }}
      </h3>

      <p class="mb-4 text-sm text-light line-clamp-2">
        {{ project.shortDescription }}
      </p>

      <!-- Technologies -->
      <div class="flex flex-wrap gap-2 mb-4">
        <span
          v-for="tech in project.technologies.slice(0, 3)"
          :key="tech"
          class="inline-flex items-center px-2 py-1 text-xs font-medium rounded-md bg-dark text-lightest"
        >
          {{ tech }}
        </span>
        <span
          v-if="project.technologies.length > 3"
          class="inline-flex items-center px-2 py-1 text-xs font-medium rounded-md bg-mid text-light"
        >
          +{{ project.technologies.length - 3 }} more
        </span>
      </div>

      <!-- View Project Button -->
      <button class="flex items-center justify-center w-full gap-2 px-4 py-2 font-medium text-darkest transition-colors duration-200 bg-brand rounded-lg hover:bg-brandBright cursor-pointer">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
        </svg>
        View Project
      </button>
    </div>
  </article>
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
