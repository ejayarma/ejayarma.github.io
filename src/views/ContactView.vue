<!-- src/views/ContactView.vue -->
<template>
  <div class="min-h-screen px-4 py-16">
    <div class="mx-auto max-w-4xl">

      <!-- Header Section -->
      <div class="mb-12 text-center">
        <p class="section-eyebrow">&gt; say hello</p>
        <h1 class="mt-2 mb-4 text-4xl font-bold tracking-tight md:text-5xl">
          CONTACT ME
        </h1>
        <div class="w-24 h-1 mx-auto rounded-full bg-brand"></div>
        <p class="max-w-2xl mx-auto mt-6 text-lg text-light">
          Open to full-time roles, freelance work, and collaborations. If you've got a project in mind, I'd love to hear about it.
        </p>
        <p class="mt-3 font-mono text-sm text-light">
          // based in Accra, Ghana &middot; GMT
        </p>
      </div>

      <!-- Contact Cards Grid -->
      <div class="grid gap-8 mb-12 md:grid-cols-2">

        <!-- Email Card -->
        <div class="p-8 card-surface transition-shadow duration-300 hover:shadow-glow">
          <h3 class="mb-2 text-xl font-bold text-lightest">Email</h3>
          <p class="mb-4 text-sm text-light">Send me a message — I reply fast.</p>
          <a href="mailto:johnayarmahe@gmail.com"
             class="text-lg font-medium text-brand transition-colors duration-300 hover:text-brandBright">
            johnayarmahe@gmail.com
          </a>
        </div>

        <!-- Start a Project Card -->
        <div class="p-8 card-surface transition-shadow duration-300 hover:shadow-glow">
          <h3 class="mb-2 text-xl font-bold text-lightest">Start a Project</h3>
          <p class="mb-4 text-sm text-light">Skip the small talk — send your pitch straight to my inbox.</p>
          <a href="mailto:johnayarmahe@gmail.com?subject=Project%20inquiry"
             class="text-lg font-medium text-brand transition-colors duration-300 hover:text-brandBright">
            Pitch your idea
          </a>
        </div>

      </div>

      <!-- Social Links Section -->
      <div class="p-8 card-surface">
        <h2 class="mb-6 font-mono text-sm text-brand">// find me online</h2>
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <!-- GitHub -->
          <a href="https://github.com/ejayarma" target="_blank" rel="noopener noreferrer"
             class="flex items-center p-5 transition-[border-color,background-color] duration-300 border cursor-pointer rounded-xl border-mid/50 hover:border-brand/50 hover:bg-dark">
            <div class="flex items-center justify-center w-10 h-10 mr-4 transition-transform duration-300 bg-darkest rounded-full group-hover:scale-110">
              <svg class="w-5 h-5 text-lightest" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </div>
            <div>
              <div class="font-medium text-lightest">GitHub</div>
              <div class="text-sm text-light">ejayarma</div>
            </div>
          </a>

          <!-- LinkedIn -->
          <a href="https://linkedin.com/in/emmanuel-john-ayarma" target="_blank" rel="noopener noreferrer"
             class="flex items-center p-5 transition-[border-color,background-color] duration-300 border cursor-pointer rounded-xl border-mid/50 hover:border-brand/50 hover:bg-dark">
            <div class="flex items-center justify-center w-10 h-10 mr-4 transition-transform duration-300 rounded-full bg-[#0A66C2]">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <div>
              <div class="font-medium text-lightest">LinkedIn</div>
              <div class="text-sm text-light">emmanuel-john-ayarma</div>
            </div>
          </a>

          <!-- Dev.to -->
          <a href="https://dev.to/ejayarma" target="_blank" rel="noopener noreferrer"
             class="flex items-center p-5 transition-[border-color,background-color] duration-300 border cursor-pointer rounded-xl border-mid/50 hover:border-brand/50 hover:bg-dark">
            <div class="flex items-center justify-center w-10 h-10 mr-4 transition-transform duration-300 rounded-full bg-[#0A0A0A]">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23-.65 0-1.15.48-1.15 1.23 0 .75.48 1.23 1.15 1.23.38 0 .66-.08.84-.23v-.76c-.17.15-.37.21-.61.21-.36 0-.6-.24-.6-.65 0-.4.24-.65.6-.65.24 0 .44.06.61.21v-.76zm1.44 1.77c0 .75.48 1.23 1.15 1.23.67 0 1.15-.48 1.15-1.23 0-.75-.48-1.23-1.15-1.23-.67 0-1.15.48-1.15 1.23zm.76 0c0-.4.24-.65.6-.65.36 0 .6.24.6.65 0 .4-.24.65-.6.65-.36 0-.6-.24-.6-.65zm3.92 1.77h.76v-4.27h-.76v1.77c-.17-.15-.37-.21-.61-.21-.65 0-1.15.48-1.15 1.23 0 .75.48 1.23 1.15 1.23.24 0 .44-.06.61-.21v.46zm0-1.77c-.17.15-.37.21-.61.21-.36 0-.6-.24-.6-.65 0-.4.24-.65.6-.65.24 0 .44.06.61.21v.88zM24 0H0v24h24V0zM8.5 18.5l-5.5-5.5 5.5-5.5 1.5 1.5-4 4 4 4-1.5 1.5zm7-11l5.5 5.5-5.5 5.5-1.5-1.5 4-4-4-4 1.5-1.5z"/>
              </svg>
            </div>
            <div>
              <div class="font-medium text-lightest">Dev.to</div>
              <div class="text-sm text-light">ejayarma</div>
            </div>
          </a>

          <!-- X (Twitter) -->
          <a href="https://twitter.com/ejayarma" target="_blank" rel="noopener noreferrer"
             class="flex items-center p-5 transition-[border-color,background-color] duration-300 border cursor-pointer rounded-xl border-mid/50 hover:border-brand/50 hover:bg-dark">
            <div class="flex items-center justify-center w-10 h-10 mr-4 transition-transform duration-300 rounded-full bg-[#111827]">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </div>
            <div>
              <div class="font-medium text-lightest">X (Twitter)</div>
              <div class="text-sm text-light">ejayarma</div>
            </div>
          </a>

        </div>
      </div>

      <!-- Call to Action -->
      <div class="mt-12 text-center">
        <div class="p-10 card-surface border-brand/30">
          <h3 class="mb-4 text-2xl font-bold">Have a Project in Mind?</h3>
          <p class="max-w-2xl mx-auto mb-6 text-light">
            Tell me what you're building and I'll reply with honest thoughts on scope, timeline,
            and how I'd approach it — no fluff, no pressure.
          </p>
          <a href="mailto:johnayarmahe@gmail.com" class="btn-primary">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            Get in Touch
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
</script>
