<script setup>
import IconX from '@/components/icons/IconX.vue';
import IconLinkedIn from '@/components/icons/IconLinkedIn.vue';
import IconPencilSquare from '@/components/icons/IconPencilSquare.vue';
import IconCogLoop from '@/components/icons/IconCogLoop.vue';

</script>

<template>
  <div class="flex flex-col items-center justify-center gap-2">
    <h2 class="text-center text-brand">Website still in development...</h2>
    <IconCogLoop class="size-6" />
  </div>
  <div class="grid items-center min-h-[80vh] place-items-center">
    <div id="yarmy-card" class="flex flex-col items-center justify-center px-6 py-12 overflow-hidden">
      <img class="text-center rounded-full size-44 bg-dark border-brand"
        src="@/assets/images/fav-pic_copy-removebg-preview.png" alt="Emmanuel John Ayarma">
      <h1 class="mt-4 text-xl font-bold tracking-wide uppercase">Emmanuel John Ayarma</h1>
      <p class="mt-3 font-medium"><span class="font-light">Full-Stack</span> Software Engineer</p>

      <div class="flex gap-4 mt-3 text-dark">

        <a class="p-2 rounded-full bg-brand" target="_blank" rel="noopener noreferrer" title="LinkedIn"
          href="https://www.linkedin.com/in/emmanuel-john-ayarma">
          <IconLinkedIn class="size-6" />
        </a>

        <a class="p-2 rounded-full bg-brand" target="_blank" rel="noopener noreferrer" title="X"
          href="https://twitter.com/ejayarma">
          <IconX class="size-6" />
        </a>

        <a class="p-2 rounded-full bg-brand" target="_blank" rel="noopener noreferrer" title="Blog"
          href="https://dev.to/ejayarma">
          <IconPencilSquare class="size-6" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
#yarmy-card {
  box-shadow: 0px 5px 13px 2px #5BC0BE;
}
</style>