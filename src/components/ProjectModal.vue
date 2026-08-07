<!-- src/components/ProjectModal.vue -->
<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 backdrop-blur-sm"
        @click="closeModal"
      >
        <div
          class="card-surface rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden overscroll-contain"
          @click.stop
        >
          <!-- Modal Header -->
          <div class="flex items-center justify-between p-6 border-b border-mid/50">
            <h2 class="text-2xl font-bold text-lightest">{{ project?.title }}</h2>
            <button
              @click="closeModal"
              class="transition-colors duration-200 cursor-pointer text-light hover:text-lightest"
              aria-label="Close project details"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <!-- Modal Content -->
          <div class="grid grid-cols-1 lg:grid-cols-2 max-h-[calc(90vh-120px)] overflow-y-auto">
            <!-- Image Section -->
            <div class="p-6 border-b lg:border-b-0 lg:border-r border-mid/50">
              <div class="relative">
                <img
                  :src="project?.images[currentSlide]"
                  :alt="`${project?.title} - Image ${currentSlide + 1}`"
                  width="640"
                  height="400"
                  class="object-cover w-full h-64 lg:h-80 rounded-lg"
                />

                <button
                  v-if="project?.images?.length > 1"
                  @click="prevSlide"
                  class="absolute left-2 top-1/2 -translate-y-1/2 p-2 text-darkest bg-brand/90 rounded-full transition-colors duration-200 hover:bg-brand cursor-pointer"
                  aria-label="Previous image"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                </button>
                <button
                  v-if="project?.images?.length > 1"
                  @click="nextSlide"
                  class="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-darkest bg-brand/90 rounded-full transition-colors duration-200 hover:bg-brand cursor-pointer"
                  aria-label="Next image"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>

                <p v-if="project?.images?.length > 1" class="mt-2 text-xs text-center font-mono text-light">
                  {{ currentSlide + 1 }} / {{ project.images.length }}
                </p>
              </div>
            </div>

            <!-- Project Details Section -->
            <div class="p-6">
              <div class="space-y-6">
                <!-- Description -->
                <div>
                  <h3 class="mb-3 font-mono text-sm text-brand">// description</h3>
                  <p class="leading-relaxed text-light">
                    {{ project?.description }}
                  </p>
                </div>

                <!-- Technologies -->
                <div>
                  <h3 class="mb-3 font-mono text-sm text-brand">// stack</h3>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="tech in project?.technologies"
                      :key="tech"
                      class="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-dark text-lightest"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>

                <!-- Project Links -->
                <div v-if="project?.liveUrl || project?.githubUrl">
                  <h3 class="mb-3 font-mono text-sm text-brand">// links</h3>
                  <div class="flex gap-3">
                    <a
                      v-if="project?.liveUrl"
                      :href="project.liveUrl"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex items-center gap-2 px-4 py-2 font-medium text-darkest transition-colors duration-200 bg-brand rounded-lg hover:bg-brandBright cursor-pointer"
                    >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                      Live Demo
                    </a>

                    <a
                      v-if="project?.githubUrl"
                      :href="project.githubUrl"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex items-center gap-2 px-4 py-2 font-medium text-lightest transition-colors duration-200 rounded-lg bg-dark hover:bg-mid cursor-pointer"
                    >
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  project: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['close'])

const currentSlide = ref(0)

const nextSlide = () => {
  if (!props.project?.images?.length) return
  currentSlide.value = (currentSlide.value + 1) % props.project.images.length
}

const prevSlide = () => {
  if (!props.project?.images?.length) return
  currentSlide.value =
    (currentSlide.value - 1 + props.project.images.length) % props.project.images.length
}

const closeModal = () => {
  emit('close')
}

const handleEscape = (e) => {
  if (e.key === 'Escape') {
    closeModal()
  }
}

watch(
  () => props.isOpen,
  (newVal) => {
    if (newVal) {
      currentSlide.value = 0
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    } else {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'auto'
    }
  }
)

watch(
  () => props.project,
  () => {
    currentSlide.value = 0
  }
)
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .card-surface,
.modal-leave-active .card-surface {
  transition: transform 0.3s ease;
}

.modal-enter-from .card-surface,
.modal-leave-to .card-surface {
  transform: scale(0.95);
}
</style>
