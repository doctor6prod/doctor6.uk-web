<script setup lang="ts">
// Importamos el video de alta resolución (1600x1600)
import logoVideo from '../assets/doctor6logofloat.webm';
</script>

<template>
  <!-- Contenedor principal que centra todo en pantalla -->
  <div class="flex h-screen w-full justify-center items-center overflow-hidden bg-black">
    
    <!-- Contenedor del Logo con efecto Click y Hover -->
    <div 
      @click="$router.push({ name: 'music' })"
      class="relative flex items-center justify-center cursor-pointer transition-transform duration-500 ease-out hover:scale-110 active:scale-95"
    >
      
      <!-- RESPLANDOR (GLOW) VERDE DE FONDO -->
      <div 
        class="absolute w-[40rem] h-[40rem] bg-green-500/20 filter blur-[100px] rounded-full animate-pulse z-0"
      ></div>

      <!-- VIDEO DEL LOGO 3D -->
      <video 
        :src="logoVideo" 
        autoplay 
        loop 
        muted 
        playsinline 
        class="relative z-10 w-[30rem] max-w-[85vw] h-auto mix-blend-screen contrast-125 brightness-110 pointer-events-none"
      ></video>
      
    </div>
  </div>
</template>

<style scoped>
/* Configuraciones para que el video se vea perfecto */
video {
  outline: none;
  border: none;
  background: transparent;
  user-select: none;
  /* Esto ayuda a que al achicarse no pierda definición */
  image-rendering: high-quality;
}

/* Evita que aparezcan barras de scroll molestas */
:host {
  display: block;
  overflow: hidden;
}
</style>
