<!-- src/components/ProjectModal.vue -->
<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="isOpen"
        ref="dialogRef"
        tabindex="-1"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80 backdrop-blur-md"
        @click="closeModal"
      >
        <div
          class="card-surface rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden overscroll-contain"
          @click.stop
        >
          <!-- Modal Header -->
          <div class="flex items-center justify-between p-6 border-b border-mid/50">
            <h2 id="modal-title" class="text-2xl font-bold text-lightest">{{ project?.title }}</h2>
            <button
              @click="closeModal"
              class="p-2 -mr-2 transition-colors duration-200 cursor-pointer rounded-lg text-light hover:text-lightest hover:bg-dark"
              aria-label="Close project details"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <!-- Modal Content -->
          <div class="max-h-[calc(90vh-120px)] overflow-y-auto">
            <div class="p-6 pb-10">
              <div class="space-y-6">
                <!-- Description -->
                <div>
                  <h3 class="mb-3 font-mono text-sm text-brand">// description</h3>
                  <p class="leading-relaxed text-light">
                    {{ project?.description }}
                  </p>
                </div>

                <!-- Approach / engineering decisions -->
                <div v-if="project?.approach">
                  <h3 class="mb-3 font-mono text-sm text-brand">// approach</h3>
                  <p class="leading-relaxed text-light">
                    {{ project?.approach }}
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
                      View Source
                    </a>
                  </div>
                </div>

                <!-- Confidentiality notice for NDA projects -->
                <div v-else-if="project?.confidential">
                  <h3 class="mb-3 font-mono text-sm text-brand">// access</h3>
                  <p class="leading-relaxed text-light">
                    Client project under NDA. The codebase and live demo aren't public.
                    <a
                      href="mailto:johnayarmahe@gmail.com?subject=Portfolio%20walkthrough%20request"
                      class="font-medium text-brand hover:text-brandBright"
                    >Request a walkthrough</a>.
                  </p>
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

const dialogRef = ref(null)
let lastFocused = null

const closeModal = () => {
  emit('close')
}

const handleEscape = (e) => {
  if (e.key === 'Escape') {
    closeModal()
  }
}

const trapFocus = (e) => {
  if (e.key !== 'Tab') return
  const nodes = dialogRef.value?.querySelectorAll(
    'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
  )
  if (!nodes || nodes.length === 0) return
  const first = nodes[0]
  const last = nodes[nodes.length - 1]
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault()
    last.focus()
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault()
    first.focus()
  }
}

watch(
  () => props.isOpen,
  (newVal) => {
    if (newVal) {
      lastFocused = document.activeElement
      document.addEventListener('keydown', handleEscape)
      document.addEventListener('keydown', trapFocus)
      document.body.style.overflow = 'hidden'
      requestAnimationFrame(() => {
        const closeBtn = dialogRef.value?.querySelector('button[aria-label="Close project details"]')
        ;(closeBtn || dialogRef.value)?.focus()
      })
    } else {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('keydown', trapFocus)
      document.body.style.overflow = 'auto'
      lastFocused?.focus?.()
    }
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
