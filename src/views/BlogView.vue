<template>
  <div class="min-h-screen px-4 py-16">
    <div class="mx-auto max-w-4xl">
      <div v-reveal class="mb-12 text-center">
        <p class="section-eyebrow">&gt; writing &amp; tutorials</p>
        <h1 class="mt-2 mb-4 text-4xl font-bold tracking-tight md:text-5xl">BLOG</h1>
        <p class="max-w-2xl mx-auto text-lg text-light">
          Notes from the command line and beyond. Each post lives on Dev.to, where
          you can read the full article and join the discussion.
        </p>
      </div>

      <div v-if="loading" class="space-y-6" aria-hidden="true">
        <div v-for="n in 3" :key="n" class="p-6 card-surface">
          <div class="w-24 h-4 mb-4 rounded bg-mid/40 animate-pulse"></div>
          <div class="w-3/4 h-6 mb-3 rounded bg-mid/40 animate-pulse"></div>
          <div class="w-full h-4 mb-2 rounded bg-mid/30 animate-pulse"></div>
          <div class="w-5/6 h-4 rounded bg-mid/30 animate-pulse"></div>
        </div>
      </div>

      <p v-else-if="error" class="py-16 text-center text-light">
        Couldn't load articles right now. Check back in a bit or browse them on
        <a class="text-brand underline" href="https://dev.to/ejayarma" target="_blank" rel="noopener noreferrer">Dev.to</a>.
      </p>

      <ol v-else class="space-y-6">
        <li v-for="(article, index) in articles" :key="article.slug" v-reveal="index * 60">
          <a
            :href="article.url"
            target="_blank"
            rel="noopener noreferrer"
            class="block p-6 transition-[border-color,background-color,transform] duration-200 ease-smooth card-surface hover:border-brand/50 hover:bg-dark hover:-translate-y-1"
          >
            <div class="flex flex-wrap items-center gap-2 mb-3">
              <time class="font-mono text-xs text-light" :datetime="article.published_at">
                {{ formatDate(article.published_at) }}
              </time>
              <span class="text-light" aria-hidden="true">/</span>
              <span class="font-mono text-xs text-light">{{ article.reading_time_minutes }} min read</span>
              <span class="flex flex-wrap gap-1.5 ml-auto">
                <span
                  v-for="tag in article.tag_list"
                  :key="tag"
                  class="px-2 py-0.5 text-xs rounded-full border border-brand/30 text-brand"
                >
                  #{{ tag }}
                </span>
              </span>
            </div>
            <h2 class="mb-2 text-xl font-semibold tracking-tight text-lightest md:text-2xl">
              {{ article.title }}
            </h2>
            <p class="text-light line-clamp-3">{{ article.description }}</p>
            <span class="inline-flex items-center gap-2 mt-4 font-mono text-sm text-brand">
              Read on Dev.to
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </span>
          </a>
        </li>
      </ol>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const loading = ref(true)
const error = ref(false)
const articles = ref([])

const fallbackArticles = [
  {
    title: 'Unlocking the Command Line: Episode 2 - The Shell and the shell prompt',
    description: 'In the previous episode, we explored the enduring significance of the Command Line Interface (CLI)...',
    published_at: '2024-01-31T13:12:50Z',
    reading_time_minutes: 4,
    tag_list: ['cli', 'unix', 'linux', 'bash'],
    url: 'https://dev.to/ejayarma/unlocking-the-command-line-episode-2-the-shell-and-the-shell-prompt-47hd',
    slug: 'unlocking-the-command-line-episode-2-the-shell-and-the-shell-prompt-47hd'
  },
  {
    title: 'Unlocking the Command Line: Episode 1 - Exploring Origins',
    description: 'When it comes to computer interaction, you have two primary avenues: the widely-used Graphical User...',
    published_at: '2024-01-16T13:00:23Z',
    reading_time_minutes: 2,
    tag_list: ['cli'],
    url: 'https://dev.to/ejayarma/unlocking-the-command-line-episode-1-exploring-origins-1cog',
    slug: 'unlocking-the-command-line-episode-1-exploring-origins-1cog'
  },
  {
    title: 'Is Learning Programming/Coding Difficult?',
    description: 'What is programming or coding?   You might have heard it before; programming or coding. What...',
    published_at: '2021-12-06T15:21:03Z',
    reading_time_minutes: 3,
    tag_list: ['programming', 'beginners', 'python', 'scratch'],
    url: 'https://dev.to/ejayarma/is-learning-programmingcoding-difficult-19k6',
    slug: 'is-learning-programmingcoding-difficult-19k6'
  }
]

const formatDate = (iso) => {
  try {
    return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
  } catch {
    return iso.slice(0, 10)
  }
}

onMounted(async () => {
  try {
    const res = await fetch('https://dev.to/api/articles?username=ejayarma&per_page=30')
    if (!res.ok) throw new Error(`Dev.to API ${res.status}`)
    const data = await res.json()
    articles.value = data.map(({ title, description, published_at, reading_time_minutes, tag_list, url, slug }) => ({
      title,
      description,
      published_at,
      reading_time_minutes,
      tag_list,
      url,
      slug
    }))
    if (!articles.value.length) throw new Error('Empty list')
  } catch {
    articles.value = fallbackArticles
  } finally {
    loading.value = false
  }
})
</script>
