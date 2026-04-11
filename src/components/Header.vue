<template>
  <header class="padding py-4 flex w-full flex-col" :class="$route.name === 'home' && 'absolute'">
    <noscript class="bg-red-600 text-white text-sm py-1 px-2 w-full rounded-4px mb-2">
      This site works better with Javascript enabled
    </noscript>
    
    <div class="flex items-center justify-between">
      <!-- Usamos :src (con dos puntos) para vincular la variable logoUrl -->
      <img class="logo h-5 cursor-pointer" :src="logoUrl"
        @click="$router.push({ name: 'home' })" />
      
      <ul class="flex w-full justify-between md:justify-end text-contrast gap-4 uppercase text-sm">
        <div class="flex gap-4 items-center md:justify-between">
          <SocialMedia title="instagram" link="https://www.instagram.com/doctor6prod?igsh=czcydHlwMmcyNGU5" />
          <SocialMedia title="youtube" link="https://www.youtube.com/@doctorsix6" />
          <SocialMedia title="discord" link="https://discord.gg/HFQNXYFwwA" />
          
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
// IMPORTAMOS EL LOGO AQUÍ:
import logoUrl from "~/assets/doctor6_logo_v2.svg";
import { switchTheme } from "~/logic";
import { useLocalStorage } from "@vueuse/core";
import { watch } from "vue";

const themeState = useLocalStorage("theme", "dark");
watch(themeState, () => switchTheme(themeState.value), { immediate: true });
</script>
