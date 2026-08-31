<template>
  <section class="homepage">
    <!-- Video centrado y clickeable -->
    <router-link :to="{ name: 'music' }" class="video-container">
      <video autoplay muted loop playsinline class="video-logo">
        <source :src="videoUrl" type="video/webm" />
        Tu navegador no soporta video en formato WebM.
      </video>
    </router-link>
  </section> <!-- Faltaba cerrar esta -->
</template> <!-- Faltaba cerrar esta -->

<script setup lang="ts">
import videoUrl from "../assets/doctor6logofloat.webm";
// Saqué el import de SocialMedia porque ya no se usa acá
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
  z-index: 1;
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

/* Podés borrar los estilos de .socials si querés limpiar, pero no molestan */
header {
  z-index: 100;
}

.logo {
  @apply transition-opacity duration-200 hover:opacity-80;
  min-width: 50px;
}
</style>
