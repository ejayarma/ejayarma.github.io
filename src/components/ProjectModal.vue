<!-- src/components/ProjectModal.vue -->
<template>
  <Teleport to="body">
    <Transition name="modal">
      <div 
        v-if="isOpen" 
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
        @click="closeModal"
      >
        <div 
          class="bg-slate-800 rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
          @click.stop
        >
          <!-- Modal Header -->
          <div class="flex items-center justify-between p-6 border-b border-slate-700">
            <h2 class="text-2xl font-bold text-white">{{ project?.title }}</h2>
            <button 
              @click="closeModal"
              class="transition-colors duration-200 text-slate-400 hover:text-white"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <!-- Modal Content -->
          <div class="grid grid-cols-1 lg:grid-cols-2 max-h-[calc(90vh-120px)] overflow-y-auto">
            <!-- Image Slider Section -->
            <div class="p-6 border-b lg:border-b-0 lg:border-r border-slate-700">
              <div class="relative">
                <div class="mb-4 overflow-hidden rounded-lg swiper-container" ref="swiperContainer">
                  <div class="swiper-wrapper">
                    <div 
                      v-for="(image, index) in project?.images" 
                      :key="index"
                      class="swiper-slide"
                    >
                      <img 
                        :src="image" 
                        :alt="`${project?.title} - Image ${index + 1}`"
                        class="object-cover w-full h-64 lg:h-80"
                      />
                    </div>
                  </div>
                  
                  <!-- Navigation buttons -->
                  <div class="swiper-button-next !text-white !w-8 !h-8 !mt-0 !right-4 !top-1/2 !transform !-translate-y-1/2"></div>
                  <div class="swiper-button-prev !text-white !w-8 !h-8 !mt-0 !left-4 !top-1/2 !transform !-translate-y-1/2"></div>
                  
                  <!-- Pagination -->
                  <div class="swiper-pagination !bottom-4"></div>
                </div>

                <!-- Thumbnail navigation -->
                <div class="flex gap-2 overflow-x-auto">
                  <button
                    v-for="(image, index) in project?.images"
                    :key="index"
                    @click="goToSlide(index)"
                    class="flex-shrink-0 w-16 h-16 overflow-hidden transition-all duration-200 border-2 rounded-md"
                    :class="currentSlide === index ? 'border-blue-500' : 'border-slate-600 hover:border-slate-500'"
                  >
                    <img 
                      :src="image" 
                      :alt="`Thumbnail ${index + 1}`"
                      class="object-cover w-full h-full"
                    />
                  </button>
                </div>
              </div>
            </div>

            <!-- Project Details Section -->
            <div class="p-6">
              <div class="space-y-6">
                <!-- Description -->
                <div>
                  <h3 class="mb-3 text-lg font-semibold text-white">Description</h3>
                  <p class="leading-relaxed text-slate-300">
                    {{ project?.description }}
                  </p>
                </div>

                <!-- Technologies -->
                <div>
                  <h3 class="mb-3 text-lg font-semibold text-white">Technologies Used</h3>
                  <div class="flex flex-wrap gap-2">
                    <span 
                      v-for="tech in project?.technologies" 
                      :key="tech"
                      class="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-slate-700 text-slate-300"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>

                <!-- Project Links -->
                <div>
                  <h3 class="mb-3 text-lg font-semibold text-white">Project Links</h3>
                  <div class="flex gap-3">
                    <a 
                      :href="project?.liveUrl" 
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex items-center gap-2 px-4 py-2 font-medium text-white transition-colors duration-200 bg-blue-600 rounded-lg hover:bg-blue-700"
                    >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                      Live Demo
                    </a>
                    
                    <a 
                      :href="project?.githubUrl" 
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex items-center gap-2 px-4 py-2 font-medium text-white transition-colors duration-200 rounded-lg bg-slate-700 hover:bg-slate-600"
                    >
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
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
import { ref, watch, onMounted, onUnmounted } from 'vue'

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

const swiperContainer = ref(null)
const currentSlide = ref(0)
let swiper = null

// Initialize Swiper
const initSwiper = async () => {
  if (!swiperContainer.value || !props.project?.images?.length) return
  
  try {
    // Load Swiper from CDN
    if (!window.Swiper) {
      await loadSwiper()
    }
    
    swiper = new window.Swiper(swiperContainer.value, {
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      on: {
        slideChange: function() {
          currentSlide.value = this.realIndex
        }
      }
    })
  } catch (error) {
    console.error('Error initializing Swiper:', error)
  }
}

// Load Swiper CSS and JS
const loadSwiper = () => {
  return new Promise((resolve, reject) => {
    // Load CSS
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css'
    document.head.appendChild(link)
    
    // Load JS
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js'
    script.onload = resolve
    script.onerror = reject
    document.head.appendChild(script)
  })
}

// Go to specific slide
const goToSlide = (index) => {
  if (swiper) {
    swiper.slideToLoop(index)
  }
}

// Close modal
const closeModal = () => {
  emit('close')
}

// Handle escape key
const handleEscape = (e) => {
  if (e.key === 'Escape') {
    closeModal()
  }
}

// Watch for modal open/close
watch(() => props.isOpen, async (newVal) => {
  if (newVal) {
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    await initSwiper()
  } else {
    document.removeEventListener('keydown', handleEscape)
    document.body.style.overflow = 'auto'
    if (swiper) {
      swiper.destroy(true, true)
      swiper = null
    }
  }
})

onMounted(() => {
  if (props.isOpen) {
    initSwiper()
  }
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
  document.body.style.overflow = 'auto'
  if (swiper) {
    swiper.destroy(true, true)
  }
})
</script>

<style scoped>
.modal-enter-active, .modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from, .modal-leave-to {
  opacity: 0;
}

.modal-enter-active .bg-slate-800,
.modal-leave-active .bg-slate-800 {
  transition: transform 0.3s ease;
}

.modal-enter-from .bg-slate-800,
.modal-leave-to .bg-slate-800 {
  transform: scale(0.9);
}

/* Swiper custom styles */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  width: 40px !important;
  height: 40px !important;
  margin-top: -20px !important;
}

:deep(.swiper-button-next:after),
:deep(.swiper-button-prev:after) {
  font-size: 16px !important;
}

:deep(.swiper-pagination-bullet) {
  background: white;
  opacity: 0.5;
}

:deep(.swiper-pagination-bullet-active) {
  opacity: 1;
  background: #3b82f6;
}
</style>