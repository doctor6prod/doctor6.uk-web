<template>
  <header class="padding py-4 flex w-full flex-col" :class="$route.name === 'home' && 'absolute'">
    <noscript class="bg-red-600 text-white text-sm py-1 px-2 w-full rounded-4px mb-2">
      This site works better with Javascript enabled
    </noscript>
    
    <div class="flex items-center justify-between">
      <!-- LOGO DOCTOR 6 (Ruta corregida para producción) -->
      <img class="logo h-5 cursor-pointer" src="/doctor6_logo.svg"
        @click="$router.push({ name: 'home' })" />
      
      <ul class="flex w-full justify-between md:justify-end text-contrast gap-4 uppercase text-sm">
        <div class="flex gap-4 items-center md:justify-between">
          <SocialMedia title="instagram" link="https://instagram.com" />
          <SocialMedia title="youtube" link="https://youtube.com" />
          <SocialMedia title="discord" link="https://discord.gg" />
          
          <li><router-link :to="{ name: 'music' }">Music</router-link></li>
          <li><router-link :to="{ name: 'services' }">Services</router-link></li>
          <li><router-link :to="{ name: 'biography' }">Biography</router-link></li>
        </div>

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
  /* Subimos el z-index para que esté por encima de cualquier video o glow */
  z-index: 100;
}

a.router-link-active {
  @apply text-accent font-bold;
}

li {
  @apply transition-colors duration-200 hover:text-white;
}

.logo {
  @apply transition-opacity duration-200 hover:opacity-80;
  /* Asegura que la imagen tenga un tamaño mínimo para ser visible */
  min-width: 50px; 
}
</style>
