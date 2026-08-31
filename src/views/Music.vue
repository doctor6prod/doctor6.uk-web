<template>
  <div class="padding text-contrast">
    <section>
      <!-- Solo dejamos el título para un look más minimalista -->
      <h1 class="text-4xl font-bold">Portfolio</h1>

      <!-- Lista de Canciones -->
      <div class="mt-10 flex flex-col gap-6">
        <div v-for="song in sortedSongs" :key="song.title" 
             class="flex flex-col md:flex-row items-center gap-6 bg-theme-200 p-6 rounded-lg border border-theme-300">
          
          <!-- Portada -->
          <img :src="getCoverImage(song.cover)" 
               class="w-32 h-32 rounded shadow-2xl object-cover" 
               @error="(e) => (e.target as HTMLImageElement).src = 'https://placeholder.com'" />

          <div class="flex-1 w-full">
            <div class="flex justify-between items-start mb-4">
              <div>
                <h2 class="text-2xl font-bold text-title">{{ song.title }}</h2>
                <p class="text-theme-700">{{ song.artists.join(" & ") }}</p>
              </div>
              <span class="text-sm opacity-50 uppercase tracking-widest">{{ song.type }}</span>
            </div>

            <!-- Reproductor con Sincronización -->
            <audio 
              controls 
              :src="song.link" 
              preload="none" 
              class="w-full h-10 custom-player"
              @play="handlePlay"
            >
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Song as ISong, Cover as ICover } from "~/interfaces";

// Cargamos canciones y portadas
const songFiles = import.meta.globEager("../assets/songs/*.json");
const songs = Object.values(songFiles) as ISong[];

const coverFiles = import.meta.globEager("../assets/covers/*.json");
const covers = Object.values(coverFiles) as ICover[];

// Ordenar por fecha (más reciente primero)
const sortedSongs = computed(() => {
  return [...songs].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });
});

// Función para detener otros reproductores
const handlePlay = (event: Event) => {
  const allAudios = document.querySelectorAll('audio');
  allAudios.forEach((audio) => {
    if (audio !== event.target) {
      audio.pause();
    }
  });
};

// Función para encontrar la URL de la imagen
const getCoverImage = (coverName: string) => {
  const found = covers.find(c => c.name === coverName);
  return found ? found.original : 'https://placeholder.com';
};
</script>

<style scoped lang="postcss">
.custom-player {
  filter: invert(100%) hue-rotate(180deg) brightness(1.5);
}
</style>
