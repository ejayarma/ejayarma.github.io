<!-- src/views/ContactView.vue -->
<template>
  <div class="min-h-screen px-4 py-12 bg-gradient-to-br from-lightest via-light to-mid/20">
    <div class="container max-w-4xl mx-auto">
      
      <!-- Header Section -->
      <div class="mb-12 text-center">
        <h1 class="mb-4 text-5xl font-bold tracking-tight md:text-6xl text-darkest">
          CONTACT ME
        </h1>
        <div class="w-24 h-1 mx-auto rounded-full bg-brand"></div>
        <p class="max-w-2xl mx-auto mt-6 text-lg text-dark">
          Let's connect and build something amazing together. Feel free to reach out through any of these channels.
        </p>
      </div>

      <!-- Contact Cards Grid -->
      <div class="grid gap-8 mb-12 md:grid-cols-2">
        
        <!-- Email Card -->
        <div class="p-8 transition-all duration-300 bg-white border shadow-xl group rounded-2xl border-light/50 hover:shadow-2xl hover:border-brand/30">
          <div class="flex items-center mb-6">
            <div class="flex items-center justify-center mr-4 transition-transform duration-300 rounded-full w-14 h-14 bg-gradient-to-r from-brand to-brand/80 group-hover:scale-110">
              <svg class="text-white w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-darkest">Email</h3>
              <p class="text-sm text-mid">Send me a message</p>
            </div>
          </div>
          <a href="mailto:johnayarmahe@gmail.com" 
             class="block text-lg font-medium transition-colors duration-300 text-dark hover:text-brand">
            johnayarmahe@gmail.com
          </a>
        </div>

        <!-- Phone/Direct Contact Card -->
        <div class="p-8 transition-all duration-300 bg-white border shadow-xl group rounded-2xl border-light/50 hover:shadow-2xl hover:border-brand/30">
          <div class="flex items-center mb-6">
            <div class="flex items-center justify-center mr-4 transition-transform duration-300 rounded-full w-14 h-14 bg-gradient-to-r from-brand to-brand/80 group-hover:scale-110">
              <svg class="text-white w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-darkest">Let's Chat</h3>
              <p class="text-sm text-mid">Quick response guaranteed</p>
            </div>
          </div>
          <p class="text-lg font-medium text-dark">
            Available for freelance projects
          </p>
        </div>

      </div>

      <!-- Social Links Section -->
      <div class="p-8 bg-white border shadow-xl rounded-2xl border-light/50">
        <div class="flex items-center mb-8">
          <div class="flex items-center justify-center w-12 h-12 mr-4 rounded-full bg-brand">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-darkest">Find Me Online</h2>
        </div>
        
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          
          <!-- GitHub -->
          <a href="https://github.com/ejayarma" target="_blank" 
             class="flex items-center p-6 transition-all duration-300 border group rounded-xl bg-gradient-to-r from-lightest to-light/50 hover:from-gray-50 hover:to-gray-100 border-light/30 hover:border-gray-400 hover:shadow-lg">
            <div class="flex items-center justify-center w-10 h-10 mr-4 transition-transform duration-300 bg-gray-800 rounded-full group-hover:scale-110">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </div>
            <div>
              <div class="font-medium transition-colors duration-300 text-darkest group-hover:text-gray-800">GitHub</div>
              <div class="text-sm text-mid">ejayarma</div>
            </div>
          </a>

          <!-- LinkedIn -->
          <a href="https://linkedin.com/in/emmanuel-john-ayarma" target="_blank" 
             class="flex items-center p-6 transition-all duration-300 border group rounded-xl bg-gradient-to-r from-lightest to-light/50 hover:from-blue-50 hover:to-blue-100 border-light/30 hover:border-blue-400 hover:shadow-lg">
            <div class="flex items-center justify-center w-10 h-10 mr-4 transition-transform duration-300 bg-blue-600 rounded-full group-hover:scale-110">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <div>
              <div class="font-medium transition-colors duration-300 text-darkest group-hover:text-blue-800">LinkedIn</div>
              <div class="text-sm text-mid">emmanuel-john-ayarma</div>
            </div>
          </a>

          <!-- Dev.to -->
          <a href="https://dev.to/ejayarma" target="_blank" 
             class="flex items-center p-6 transition-all duration-300 border group rounded-xl bg-gradient-to-r from-lightest to-light/50 hover:from-green-50 hover:to-green-100 border-light/30 hover:border-green-400 hover:shadow-lg">
            <div class="flex items-center justify-center w-10 h-10 mr-4 transition-transform duration-300 bg-green-600 rounded-full group-hover:scale-110">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23-.65 0-1.15.48-1.15 1.23 0 .75.48 1.23 1.15 1.23.38 0 .66-.08.84-.23v-.76c-.17.15-.37.21-.61.21-.36 0-.6-.24-.6-.65 0-.4.24-.65.6-.65.24 0 .44.06.61.21v-.76zm1.44 1.77c0 .75.48 1.23 1.15 1.23.67 0 1.15-.48 1.15-1.23 0-.75-.48-1.23-1.15-1.23-.67 0-1.15.48-1.15 1.23zm.76 0c0-.4.24-.65.6-.65.36 0 .6.24.6.65 0 .4-.24.65-.6.65-.36 0-.6-.24-.6-.65zm3.92 1.77h.76v-4.27h-.76v1.77c-.17-.15-.37-.21-.61-.21-.65 0-1.15.48-1.15 1.23 0 .75.48 1.23 1.15 1.23.24 0 .44-.06.61-.21v.46zm0-1.77c-.17.15-.37.21-.61.21-.36 0-.6-.24-.6-.65 0-.4.24-.65.6-.65.24 0 .44.06.61.21v.88zM24 0H0v24h24V0zM8.5 18.5l-5.5-5.5 5.5-5.5 1.5 1.5-4 4 4 4-1.5 1.5zm7-11l5.5 5.5-5.5 5.5-1.5-1.5 4-4-4-4 1.5-1.5z"/>
              </svg>
            </div>
            <div>
              <div class="font-medium transition-colors duration-300 text-darkest group-hover:text-green-800">Dev.to</div>
              <div class="text-sm text-mid">ejayarma</div>
            </div>
          </a>

          <!-- Twitter -->
          <a href="https://twitter.com/ejayarma" target="_blank" 
             class="flex items-center p-6 transition-all duration-300 border group rounded-xl bg-gradient-to-r from-lightest to-light/50 hover:from-sky-50 hover:to-sky-100 border-light/30 hover:border-sky-400 hover:shadow-lg">
            <div class="flex items-center justify-center w-10 h-10 mr-4 transition-transform duration-300 rounded-full bg-sky-500 group-hover:scale-110">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </div>
            <div>
              <div class="font-medium transition-colors duration-300 text-darkest group-hover:text-sky-800">Twitter</div>
              <div class="text-sm text-mid">ejayarma</div>
            </div>
          </a>

        </div>
      </div>

      <!-- Call to Action -->
      <div class="mt-12 text-center">
        <div class="p-8 text-white bg-gradient-to-r from-brand to-brand/80 rounded-2xl">
          <h3 class="mb-4 text-2xl font-bold">Ready to Start a Project?</h3>
          <p class="max-w-2xl mx-auto mb-6 text-brand-light">
            I'm always excited to work on new challenges and collaborate with amazing people. 
            Let's discuss how we can bring your ideas to life!
          </p>
          <a href="mailto:johnayarmahe@gmail.com" 
             class="inline-flex items-center px-8 py-3 font-semibold transition-colors duration-300 bg-white rounded-full shadow-lg text-brand hover:bg-lightest hover:shadow-xl">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            Get In Touch
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
/* Additional custom styles if needed */
</style>