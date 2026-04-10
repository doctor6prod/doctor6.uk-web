<template>
  <li class="hidden md:flex">
    <a class="flex items-center text-contrast hover:text-white transition-colors" target="_blank" :href="link">
      <i-fluency-instagram v-if="link.includes('instagram')" class="w-5 h-5" />
      <i-fluency-youtube v-if="link.includes('youtube')" class="w-5 h-5" />
      <i-fluency-twitter v-if="link.includes('twitter')" class="w-5 h-5" />
      <i-fluency-tank v-if="link.includes('newgrounds')" class="w-5 h-5" />
      <i-fluency-cloud v-if="link.includes('soundcloud')" class="w-5 h-5" />
      <i-fluency-discord v-if="link.includes('discord')" class="w-5 h-5" />
      <i-fluency-github v-if="link.includes('github')" class="w-5 h-5" />
      <i-fluency-bandcamp v-if="link.includes('bandcamp')" class="w-5 h-5" />
    </a>
  </li>
</template>

<script setup lang="ts">
defineProps<{
  link: string;
  title: string;
}>();
</script>

<style scoped>
/* Asegura que el SVG herede el color del texto (el blanco) */
svg {
  fill: currentColor;
  display: inline-block;
}
</style>
