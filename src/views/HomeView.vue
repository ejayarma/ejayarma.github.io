<script setup>
import IconX from '@/components/icons/IconX.vue';
import IconLinkedIn from '@/components/icons/IconLinkedIn.vue';
import IconPencilSquare from '@/components/icons/IconPencilSquare.vue';
import IconGithub from '@/components/icons/IconGithub.vue';
</script>


<template>
  <section class="seigaiha min-h-[calc(100vh-65px)]">
    <div class="flex flex-col items-center justify-center gap-12 px-6 py-16 mx-auto max-w-6xl lg:flex-row lg:gap-20">
      <!-- Intro -->
      <div class="max-w-xl text-center lg:text-left">
        <p class="section-eyebrow">&gt; hello, I'm</p>
        <h1 class="mt-3 text-4xl font-extrabold tracking-tight uppercase md:text-6xl">
          Emmanuel John<br class="hidden sm:block" /> Ayarma
        </h1>
        <p class="mt-4 text-lg font-medium text-light">
          Full-Stack Software Engineer building &amp; scaling <span class="text-brand">web apps, RESTful APIs, and mobile solutions</span> across fintech, civic-tech, agri-tech, and ERP domains.
        </p>

        <div class="flex flex-wrap justify-center gap-3 mt-8 lg:justify-start">
          <RouterLink class="btn-primary" to="/portfolio">View Portfolio</RouterLink>
          <RouterLink class="btn-secondary" to="/contact">Get in Touch</RouterLink>
          <a class="btn-secondary" href="/Emmanuel-John-Ayarma-CV-SWE-FS.pdf" download>Download CV</a>
        </div>

        <div class="flex gap-4 mt-10 justify-center lg:justify-start">
          <a class="p-2 rounded-full bg-brand text-darkest transition-transform duration-200 hover:scale-110 cursor-pointer" target="_blank" rel="noopener noreferrer" title="LinkedIn" href="https://www.linkedin.com/in/emmanuel-john-ayarma">
            <IconLinkedIn class="size-6" />
          </a>
          <a class="p-2 rounded-full bg-brand text-darkest transition-transform duration-200 hover:scale-110 cursor-pointer" target="_blank" rel="noopener noreferrer" title="X" href="https://twitter.com/ejayarma">
            <IconX class="size-6" />
          </a>
          <a class="p-2 rounded-full bg-brand text-darkest transition-transform duration-200 hover:scale-110 cursor-pointer" target="_blank" rel="noopener noreferrer" title="Blog" href="https://dev.to/ejayarma">
            <IconPencilSquare class="size-6" />
          </a>
          <a class="p-2 rounded-full bg-brand text-darkest transition-transform duration-200 hover:scale-110 cursor-pointer" target="_blank" rel="noopener noreferrer" title="GitHub" href="https://github.com/ejayarma">
            <IconGithub class="size-6" />
          </a>
        </div>
      </div>

      <!-- Stats card -->
      <div id="yarmy-card" class="card-surface w-full max-w-sm p-8">
        <img class="mx-auto rounded-full size-40 border-2 border-brand" src="@/assets/images/moi-hd.jpg" alt="Emmanuel John Ayarma" width="160" height="160" fetchpriority="high">
        <h2 class="mt-5 font-mono text-sm text-brand">// key numbers</h2>
        <dl class="grid grid-cols-2 gap-4 mt-3">
          <div class="p-4 rounded-xl bg-darkest/60">
            <dt class="text-3xl font-extrabold text-brand tabular-nums">3+</dt>
            <dd class="mt-1 text-sm text-light">Years Experience</dd>
          </div>
          <div class="p-4 rounded-xl bg-darkest/60">
            <dt class="text-3xl font-extrabold text-brand tabular-nums">1M+</dt>
            <dd class="mt-1 text-sm text-light">Requests / day</dd>
          </div>
          <div class="p-4 rounded-xl bg-darkest/60">
            <dt class="text-3xl font-extrabold text-brand tabular-nums">99%</dt>
            <dd class="mt-1 text-sm text-light">Uptime sustained</dd>
          </div>
          <div class="p-4 rounded-xl bg-darkest/60">
            <dt class="text-3xl font-extrabold text-brand tabular-nums">50%</dt>
            <dd class="mt-1 text-sm text-light">Faster onboarding</dd>
          </div>
        </dl>
      </div>
    </div>
  </section>

  <!-- CV Download Section -->
  <section class="px-6 py-16 border-t border-mid/40">
    <div class="card-surface max-w-4xl mx-auto p-8 text-center md:p-12">
      <p class="section-eyebrow">&gt; curriculum vitae</p>
      <h2 class="mt-2 mb-4 text-3xl font-bold tracking-tight md:text-4xl">Get My CV</h2>
      <p class="mx-auto mb-8 max-w-2xl text-lg text-light">
        Want the full story? Download my resume for a complete breakdown of my experience,
        projects, and skills — from national-scale systems to mobile apps.
      </p>
      <a class="btn-primary" href="/Emmanuel-John-Ayarma-CV-SWE-FS.pdf" download>
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
        Download CV (PDF)
      </a>
    </div>
  </section>
</template>

<style scoped>
#yarmy-card {
  box-shadow: 0px 5px 24px 2px rgba(91, 192, 190, 0.2);
}
</style>
