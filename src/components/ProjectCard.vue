<!-- src/components/ProjectCard.vue -->
<template>
  <article
    class="overflow-hidden transition-[transform,box-shadow] duration-200 ease-smooth card-surface group hover:shadow-glow hover:-translate-y-1"
  >
    <!-- Decorative header tile (CSS only, no images) -->
    <div class="relative h-24 overflow-hidden bg-darkest">
      <div class="absolute inset-0 seigaiha-tile" aria-hidden="true"></div>
      <span
        class="absolute bottom-1 left-5 font-mono text-7xl font-bold text-brand/15 select-none"
        aria-hidden="true"
      >
        {{ initial }}
      </span>
    </div>

    <!-- Content Section -->
    <div class="p-6">
      <span class="inline-flex items-center px-3 py-1 text-xs font-medium text-darkest bg-brand rounded-full">
        {{ project.category }}
      </span>

      <h3 class="mt-3 mb-2 text-xl font-bold transition-colors duration-300 group-hover:text-brand">
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
      <button
        class="flex items-center justify-center w-full gap-2 px-4 py-2 font-medium text-darkest transition-colors duration-200 bg-brand rounded-lg hover:bg-brandBright cursor-pointer"
        @click="$emit('click')"
      >
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
import { computed } from 'vue'

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

const initial = computed(() => props.project.title?.trim().charAt(0) || '?')

defineEmits(['click'])
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.seigaiha-tile {
  background-color: rgba(91, 192, 190, 0.06);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 28' width='56' height='28'%3E%3Cpath fill='%233a506b' fill-opacity='0.5' d='M56 26v2h-7.75c2.3-1.27 4.94-2 7.75-2zm-26 2a2 2 0 1 0-4 0h-4.09A25.98 25.98 0 0 0 0 16v-2c.67 0 1.34.02 2 .07V14a2 2 0 0 0-2-2v-2a4 4 0 0 1 3.98 3.6 28.09 28.09 0 0 1 2.8-3.86A8 8 0 0 0 0 6V4a9.99 9.99 0 0 1 8.17 4.23c.94-.95 1.96-1.83 3.03-2.63A13.98 13.98 0 0 0 0 0h7.75c2 1.1 3.73 2.63 5.1 4.45 1.12-.72 2.3-1.37 3.53-1.93A20.1 20.1 0 0 0 14.28 0h2.7c.45.56.88 1.14 1.29 1.74 1.3-.48 2.63-.87 4-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4 28.4 0 0 1 4 0V0h4.09l-.37.59c1.38.28 2.72.67 4.01 1.15.4-.6.84-1.18 1.3-1.74h2.69a20.1 20.1 0 0 0-2.1 2.52c1.23.56 2.41 1.2 3.54 1.93A16.08 16.08 0 0 1 48.25 0H56c-4.58 0-8.65 2.2-11.2 5.6 1.07.8 2.09 1.68 3.03 2.63A9.99 9.99 0 0 1 56 4v2a8 8 0 0 0-6.77 3.74c1.03 1.2 1.97 2.5 2.79 3.86A4 4 0 0 1 56 10v2a2 2 0 0 0-2 2.07 28.4 28.4 0 0 1 2-.07v2c-9.2 0-17.3 4.78-21.91 12H30zM7.75 28H0v-2c2.81 0 5.46.73 7.75 2zM56 20v2c-5.6 0-10.65 2.3-14.28 6h-2.7c4.04-4.89 10.15-8 16.98-8zm-39.03 8h-2.69C10.65 24.3 5.6 22 0 22v-2c6.83 0 12.94 3.11 16.97 8zm15.01-.4a28.09 28.09 0 0 1 2.8-3.86 8 8 0 0 0-13.55 0c1.03 1.2 1.97 2.5 2.79 3.86a4 4 0 0 1 7.96 0zm14.29-11.86c1.3-.48 2.63-.87 4-1.15a25.99 25.99 0 0 0-44.55 0c1.38.28 2.72.67 4.01 1.15a21.98 21.98 0 0 1 36.54 0zm-5.43 2.71c1.13-.72 2.3-1.37 3.54-1.93a19.98 19.98 0 0 0-32.76 0c1.23.56 2.41 1.2 3.54 1.93a15.98 15.98 0 0 1 25.68 0zm-4.67 3.78c.94-.95 1.96-1.83 3.03-2.63a13.98 13.98 0 0 0-22.4 0c1.07.8 2.09 1.68 3.03 2.63a9.99 9.99 0 0 1 16.34 0z'%3E%3C/path%3E%3C/svg%3E");
}
</style>
