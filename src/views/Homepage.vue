<template>
  <section class="homepage">
    <!-- Video centrado y clickeable -->
    <router-link :to="{ name: 'music' }" class="video-container">
      <video autoplay muted loop playsinline class="video-logo">
        <source :src="videoUrl" type="video/webm" />
        Tu navegador no soporta video en formato WebM.
      </video>
    </router-link>

    <!-- Botones de redes sociales -->
    <div class="socials">
      <!-- Limpié los links de parámetros innecesarios para evitar errores de caracteres -->
      <SocialMedia title="instagram" link="https://www.instagram.com/doctor6produ/" />
      <SocialMedia title="youtube" link="https://www.youtube.com/@doctorsix6" />
      <SocialMedia title="discord" link="https://discord.gg/HFQNXYFwwA" />
    </div>
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
  justify-content: center;
  min-height: 100vh;
  position: relative;
}

.video-container {
  margin-top: 0.5rem;
  z-index: 1; /* El video se queda en una capa base */
}

.video-logo {
  width: 520px;
  height: auto;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.video-logo:hover {
  transform: scale(1.05);
}

.socials {
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
  /* ESTO ES LO QUE ARREGLA EL CLIC: */
  position: relative; 
  z-index: 50; 
}

header {
  z-index: 100;
}

.logo {
  @apply transition-opacity duration-200 hover:opacity-80;
  min-width: 50px;
}
</style>
