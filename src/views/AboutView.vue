<!-- src/views/AboutView.vue -->
<template>
  <div class="min-h-screen px-4 py-16">
    <div class="mx-auto max-w-5xl">
      <!-- Header Section -->
      <div class="mb-12 text-center">
        <p class="section-eyebrow">&gt; who am i</p>
        <h1 class="mt-2 mb-4 text-4xl font-bold tracking-tight md:text-5xl">
          ABOUT
        </h1>
        <div class="w-24 h-1 mx-auto rounded-full bg-brand"></div>
      </div>

      <!-- Main Content Grid -->
      <div class="grid items-start gap-8 lg:grid-cols-2">

        <!-- Bio Section -->
        <div class="p-8 card-surface">
          <h2 class="mb-4 font-mono text-sm text-brand">// bio</h2>
          <p class="text-lg leading-relaxed text-light">
            I'm a full-stack software engineer with <strong class="text-lightest">3+ years</strong> building and scaling web
            applications, RESTful APIs, and mobile solutions across fintech, civic-tech, agri-tech, and ERP domains.
            I've shipped national-scale systems ahead of schedule, cut developer onboarding time by 50%, and kept
            platforms serving thousands of users at 99%+ uptime.
          </p>
          <p class="mt-4 text-lg leading-relaxed text-light">
            I'm happiest owning a feature from API design through deployment and production support — and I enjoy
            turning business requirements into reliable, secure systems alongside the people I build with.
          </p>
        </div>

        <!-- Tech Stack Section -->
        <div class="p-8 card-surface">
          <h2 class="mb-4 font-mono text-sm text-brand">// stack</h2>
          <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div
              v-for="tech in techStack"
              :key="tech.name"
              class="flex items-center p-3 transition-colors duration-200 border rounded-lg border-mid/50 hover:border-brand/50"
            >
              <Icon
                class="w-6 h-6 mr-3 text-brand shrink-0"
                :icon="tech.icon"
                aria-hidden="true"
              />
              <span class="text-sm font-medium text-lightest">
                {{ tech.name }}
              </span>
            </div>
          </div>
        </div>

      </div>

      <!-- Experience Highlights -->
      <div class="p-8 mt-8 card-surface">
        <h2 class="mb-6 font-mono text-sm text-brand">// key strengths</h2>
        <div class="grid gap-4 md:grid-cols-4">
          <div v-for="stat in stats" :key="stat.label" class="p-5 text-center rounded-xl bg-darkest/60">
            <div class="mb-1 text-3xl font-extrabold text-brand tabular-nums">{{ stat.value }}</div>
            <div class="text-sm text-light">{{ stat.label }}</div>
          </div>
        </div>
      </div>

      <!-- Experience Timeline -->
      <div class="mt-8">
        <h2 class="mb-6 font-mono text-sm text-brand">// experience</h2>
        <div class="space-y-6">
          <div v-for="job in experience" :key="job.role + job.company" class="p-8 card-surface">
            <div class="flex flex-wrap items-baseline justify-between gap-2">
              <h3 class="text-xl font-bold text-lightest">{{ job.role }}</h3>
              <span class="font-mono text-sm text-brand">{{ job.period }}</span>
            </div>
            <p class="mt-1 font-medium text-light">{{ job.company }}</p>
            <ul class="mt-4 space-y-2 text-light">
              <li v-for="(point, i) in job.points" :key="i" class="flex gap-3">
                <span class="text-brand">▸</span>
                <span>{{ point }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Education & Certifications -->
      <div class="mt-8 p-8 card-surface">
        <h2 class="mb-4 font-mono text-sm text-brand">// education &amp; certifications</h2>
        <div class="grid gap-6 md:grid-cols-2">
          <div>
            <h3 class="font-bold text-lightest">Bachelor of Science, Computer Engineering</h3>
            <p class="mt-1 text-light">Kwame Nkrumah University of Science and Technology (KNUST)</p>
          </div>
          <div>
            <h3 class="font-bold text-lightest">AWS Certified Cloud Practitioner</h3>
            <p class="mt-1 text-light">Amazon Web Services (2026 – 2029)</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'

const techStack = [
  { name: 'Spring Boot', icon: 'si:springboot' },
  { name: '.NET Core', icon: 'si:dotnet' },
  { name: 'Laravel', icon: 'si:laravel' },
  { name: 'FastAPI', icon: 'si:fastapi' },
  { name: 'Vue.js', icon: 'si:vuedotjs' },
  { name: 'Flutter', icon: 'si:flutter' },
  { name: 'PostgreSQL', icon: 'si:postgresql' },
  { name: 'Redis', icon: 'si:redis' },
  { name: 'Nginx', icon: 'si:nginx' },
  { name: 'AWS', icon: 'si:amazonwebservices' },
  { name: 'Microservices', icon: 'lucide:boxes' },
  { name: 'CI/CD', icon: 'lucide:workflow' }
]

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '1M+', label: 'Requests / day' },
  { value: '99%', label: 'Uptime sustained' },
  { value: '50%', label: 'Faster onboarding' }
]

const experience = [
  {
    role: 'Full Stack Developer',
    period: 'Jan 2026 – Present',
    company: 'Adaptive Computer Solutions, Ghana',
    points: [
      'Re-engineered enterprise developer environments to cut provisioning and testing time by 50%.',
      'Built secure, scalable backend APIs in Spring Boot and .NET Core supporting 1M+ requests/day.',
      'Partnered with client stakeholders to turn business requirements into API contracts, reducing rework by 30%.'
    ]
  },
  {
    role: 'Full Stack Developer',
    period: 'Nov 2022 – Sept 2025',
    company: 'Npontu Technologies, Ghana',
    points: [
      'Built full-stack apps (Vue.js, Laravel, Flask) for 5 active enterprise clients, improving reliability by 20%.',
      'Designed responsive Vue.js interfaces that helped users finish tasks 30% faster.',
      'Shipped RESTful APIs for secure third-party integrations across 5 partner systems with zero security incidents.',
      'Developed Flutter mobile apps that extended service access to 1000+ additional users.'
    ]
  }
]
</script>
