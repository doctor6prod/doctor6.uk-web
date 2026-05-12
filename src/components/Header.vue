<template>
  <header class="padding py-4 flex w-full flex-col" :class="$route.name === 'home' ? 'relative' : ''">
    <noscript class="bg-red-600 text-white text-sm py-1 px-2 w-full rounded-4px mb-2">
      This site works better with Javascript enabled
    </noscript>
    
    <!-- Cambié items-center por items-start o center según prefieras -->
    <div class="flex flex-col md:flex-row items-center justify-between gap-4">
      
<!-- Logo -->
<router-link :to="{ name: 'home' }">
  <img class="logo h-5" src="/doctor6_logo_v2.svg" alt="Doctor6 Logo" />
</router-link>

      
      <!-- Menú de navegación y redes -->
      <!-- Agregamos flex-wrap para que bajen en pantallas muy chicas -->
      <ul class="flex flex-wrap justify-center md:justify-end items-center text-contrast gap-x-4 gap-y-2 uppercase text-xs md:text-sm w-full">
        
        <!-- Iconos Sociales -->
        <div class="flex gap-4 items-center">
          <SocialMedia title="instagram" link="https://www.instagram.com/doctor6produ/" />
          <SocialMedia title="youtube" link="https://www.youtube.com/@doctorsix6" />
          <SocialMedia title="discord" link="https://discord.gg/HFQNXYFwwA" />
        </div>
        
        <!-- Enlaces (Separados por un margen pequeño en móvil) -->
        <div class="flex gap-4 items-center">
          <li><router-link :to="{ name: 'portfolio' }">Portfolio</router-link></li>
          <li><router-link :to="{ name: 'services' }">Services</router-link></li>
          <li><router-link :to="{ name: 'biography' }">Biography</router-link></li>
        </div>

      </ul>
    </div>
  </header>
</template>
