<script setup lang="ts">
import Header from "./components/Header.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen bg-black">
    <!-- Header arriba -->
    <Header />
    
    <!-- Aquí se muestra el contenido de cada ruta -->
    <main class="flex-grow">
      <router-view />
    </main>
  </div>
</template>

<style lang="postcss">
/* Estilos globales básicos */
body {
  margin: 0;
  background-color: black;
  color: white;
}
.padding {
  @apply xl:px-40 md:px-20 px-6;
}
</style>
