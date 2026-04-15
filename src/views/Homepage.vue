<template>
  <section class="homepage">
    <!-- Header -->
    <header class="padding py-4 flex w-full flex-col absolute top-0 left-0">
      <div class="flex items-center justify-between">
        <img class="logo h-5 cursor-pointer" :src="logoUrl"
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
        </ul>
      </div>
    </header>

    <!-- Video centrado y clickeable -->
    <router-link :to="{ name: 'music' }" class="video-container">
      <video autoplay muted loop playsinline class="video-logo">
        <source :src="videoUrl" type="video/webm" />
        Tu navegador no soporta video en formato WebM.
      </video>
    </router-link>
  </section>
</template>

<script setup lang="ts">
import SocialMedia from "~/components/SocialMedia.vue";
import logoUrl from "~/assets/doctor6_logo_v2.svg";
import videoUrl from "../assets/doctor6logofloat.webm";
</script>

<style scoped lang="postcss">
.homepage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* centra verticalmente */
  min-height: 100vh;
  position: relative;
}

.video-container {
  margin-top: 0.5rem; /* más separación del header */
}

.video-logo {
  width: 520px;   /* un poco más grande que antes */
  height: auto;
  border-radius: 50%; /* forma circular tipo medallón */
  cursor: pointer;
  transition: transform 0.3s ease;
}

.video-logo:hover {
  transform: scale(1.05); /* efecto sutil al pasar el mouse */
}

header {
  z-index: 100;
}

.logo {
  @apply transition-opacity duration-200 hover:opacity-80;
  min-width: 50px;
}
</style>
