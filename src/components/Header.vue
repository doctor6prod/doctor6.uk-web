<template>
  <header class="padding py-4 flex w-full flex-col" :class="$route.name === 'home' && 'absolute'">
    <noscript class="bg-red-600 text-white text-sm py-1 px-2 w-full rounded-4px mb-2">
      This site works better with Javascript enabled
    </noscript>
    
    <div class="flex items-center justify-between">
      <!-- LOGO DOCTOR 6 -->
      <img class="hidden md:flex logo h-5 cursor-pointer" src="../assets/doctor6_logo.svg"
        @click="$router.push({ name: 'home' })" />
      
      <ul class="flex w-full justify-between md:justify-end text-contrast gap-4 uppercase text-sm">
        <div class="flex gap-4 items-center md:justify-between">
          <!-- TUS REDES REALES YA CARGADAS -->
          <SocialMedia title="instagram" link="https://www.instagram.com/doctor6prod?igsh=czcydHlwMmcyNGU5" />
          <SocialMedia title="youtube" link="https://www.youtube.com/@doctorsix6" />
          <SocialMedia title="discord" link="https://discord.gg/HFQNXYFwwA" />
          
          <!-- SECCIONES -->
          <li>
            <router-link :to="{ name: 'music' }">Music</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'services' }">Services</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'biography' }">Biography</router-link>
          </li>
        </div>

        <!-- BOTÓN DE TEMA (LUNA) -->
        <button class="flex items-center text-contrast"
          @click="themeState === 'dark' ? (themeState = 'light') : (themeState = 'dark')">
          <i-fluency-moon />
        </button>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
import SocialMedia from "~/components/SocialMedia.vue";
import { switchTheme } from "~/logic";
import { useLocalStorage } from "@vueuse/core";
import { watch } from "vue";

const themeState = useLocalStorage("theme", "dark");
watch(themeState, () => switchTheme(themeState.value), { immediate: true });
</script>

<style scoped lang="postcss">
header {
  @apply z-50;
}

a.router-link-active {
  @apply text-accent font-bold;
}

li {
  @apply transition-colors duration-200 hover:text-white;
}

.logo {
  @apply transition-opacity duration-200 hover:opacity-80;
}
</style>
