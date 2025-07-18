<!-- src/views/AboutView.vue -->
<template>
  <div class="min-h-screen px-4 py-12 bg-gradient-to-br from-lightest via-light to-mid/20">
    <div class="container max-w-4xl mx-auto">
      <!-- Header Section -->
      <div class="mb-12 text-center">
        <h1 class="mb-4 text-5xl font-bold tracking-tight md:text-6xl text-darkest">
          ABOUT
        </h1>
        <div class="w-24 h-1 mx-auto rounded-full bg-brand"></div>
      </div>

      <!-- Main Content Grid -->
      <div class="grid items-start gap-12 lg:grid-cols-2">
        
        <!-- Bio Section -->
        <div class="p-8 transition-shadow duration-300 bg-white border shadow-xl rounded-2xl border-light/50 hover:shadow-2xl">
          <div class="flex items-center mb-6">
            <div class="flex items-center justify-center w-12 h-12 mr-4 rounded-full bg-brand">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-darkest">Bio</h2>
          </div>
          
          <p class="text-lg leading-relaxed text-dark">
            Full-stack Web Developer with over 3 years of experience in developing and managing robust web
            applications, mobile apps, and APIs using modern front-end and back-end technologies. Proficient in
            leveraging valuable skills to build end-to-end solutions that enhance digital presence and operational
            efficiency. Strong leadership and collaboration skills with a solid foundation in Computer Engineering and
            agile methodologies.
          </p>
        </div>

        <!-- Tech Stack Section -->
        <div class="p-8 transition-shadow duration-300 bg-white border shadow-xl rounded-2xl border-light/50 hover:shadow-2xl">
          <div class="flex items-center mb-6">
            <div class="flex items-center justify-center w-12 h-12 mr-4 rounded-full bg-brand">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-darkest">Tech Stack</h2>
          </div>
          
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div v-for="tech in techStack" :key="tech.name" 
                 class="flex items-center p-4 transition-all duration-300 border group rounded-xl bg-gradient-to-r from-lightest to-light/50 hover:from-brand/10 hover:to-brand/20 border-light/30 hover:border-brand/30">
              <div class="w-3 h-3 mr-4 transition-colors duration-300 rounded-full"
                   :class="tech.color"></div>
              <span class="font-medium transition-colors duration-300 text-dark group-hover:text-darkest">
                {{ tech.name }}
              </span>
            </div>
          </div>
        </div>

      </div>

      <!-- Experience Highlights -->
      <div class="p-8 mt-12 bg-white border shadow-xl rounded-2xl border-light/50">
        <div class="flex items-center mb-6">
          <div class="flex items-center justify-center w-12 h-12 mr-4 rounded-full bg-brand">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-darkest">Key Strengths</h2>
        </div>
        
        <div class="grid gap-6 md:grid-cols-3">
          <div class="p-6 text-center border rounded-xl bg-gradient-to-b from-lightest to-light/30 border-light/30">
            <div class="mb-2 text-3xl font-bold text-brand">3+</div>
            <div class="font-medium text-dark">Years Experience</div>
          </div>
          <div class="p-6 text-center border rounded-xl bg-gradient-to-b from-lightest to-light/30 border-light/30">
            <div class="mb-2 text-3xl font-bold text-brand">∞</div>
            <div class="font-medium text-dark">End-to-End Solutions</div>
          </div>
          <div class="p-6 text-center border rounded-xl bg-gradient-to-b from-lightest to-light/30 border-light/30">
            <div class="mb-2 text-3xl font-bold text-brand">🎯</div>
            <div class="font-medium text-dark">Agile Methodologies</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      techStack: [
        { name: 'Laravel', color: 'bg-red-500' },
        { name: 'Tailwind CSS', color: 'bg-brand' },
        { name: 'Vue.js', color: 'bg-green-500' },
        { name: 'React', color: 'bg-blue-500' },
        { name: 'Next.js', color: 'bg-darkest' },
        { name: 'Flutter', color: 'bg-blue-400' }
      ]
    }
  }
}
</script>

<style scoped>
/* Additional custom styles if needed */
</style>