<template>
  <div class="padding py-20 flex flex-col gap-8 min-h-screen transition-all duration-500">

    <!-- HEADER -->
    <section class="flex flex-col md:flex-row justify-between items-start gap-4">
      <div class="flex flex-col gap-4">
        <h1 class="text-4xl uppercase font-bold text-contrast">Services</h1>
        <p class="text-contrast/60 leading-relaxed max-w-2xl text-lg italic">
          {{ lang === 'es' ? 'Servicios profesionales de audio.' : 'Professional audio services.' }}
        </p>
      </div>

      <!-- BOTONES DE IDIOMA -->
      <div class="flex gap-2 bg-contrast/5 p-1 rounded-lg border border-contrast/10">
        <button @click="lang = 'es'" :class="['px-3 py-1 text-xs font-bold uppercase rounded transition-all', lang === 'es' ? 'bg-accent text-background' : 'text-contrast/40 hover:text-contrast']">Español</button>
        <button @click="lang = 'en'" :class="['px-3 py-1 text-xs font-bold uppercase rounded transition-all', lang === 'en' ? 'bg-accent text-background' : 'text-contrast/40 hover:text-contrast']">English</button>
      </div>
    </section>

    <!-- SECCIÓN DE SERVICIOS (LISTA VERTICAL) -->
    <section class="flex flex-col gap-6 w-full max-w-5xl mx-auto">
      
      <!-- 1. MEZCLA MULTITRACK -->
      <div 
        class="border border-contrast/10 p-6 rounded-lg bg-contrast/5 w-full transition-all duration-300 cursor-pointer"
        @click="activeService = activeService === 'mezcla' ? null : 'mezcla'"
      >
        <div class="flex justify-between items-start">
          <div>
            <h2 class="text-2xl font-bold uppercase tracking-tighter">{{ texts[lang].mix.title }}</h2>
            <p class="text-accent font-bold text-xs">{{ texts[lang].mix.subtitle }}</p>
          </div>
          <span class="text-xs bg-contrast/10 px-2 py-1 rounded">{{ activeService === 'mezcla' ? '−' : '+' }}</span>
        </div>

        <div v-if="activeService === 'mezcla'" class="mt-8 flex flex-col gap-6">
          <ul class="flex flex-col gap-4">
            <li v-for="(point, i) in texts[lang].mix.mainPoints" :key="i" class="text-sm text-contrast/80 leading-snug">• {{ point }}</li>
          </ul>
          <div class="bg-background/50 p-5 rounded border border-contrast/10">
            <h3 class="text-xs uppercase font-bold mb-4 text-accent">{{ lang === 'es' ? '¿Como enviar la canción?' : 'How to send the song?' }}</h3>
            <ul class="flex flex-col gap-3">
              <li v-for="(step, i) in texts[lang].mix.sendSteps" :key="i" class="text-xs text-contrast/70 italic leading-relaxed">{{ i + 1 }}. {{ step }}</li>
            </ul>
          </div>
          <div class="pt-6 border-t border-contrast/10">
            <p class="text-[11px] uppercase text-contrast/40 mb-5 italic">{{ texts[lang].mix.conditions }}</p>
            <div class="flex justify-between items-center">
              <div>
                <p class="text-[10px] uppercase text-contrast/40">{{ lang === 'es' ? 'Precio' : 'Price' }}</p>
                <p class="text-2xl font-bold">{{ texts[lang].mix.price }}</p>
              </div>
              <a :href="'https://wa.me' + texts[lang].mix.waText" target="_blank" class="bg-contrast text-background px-6 py-3 rounded text-xs font-bold uppercase">Contact</a>
            </div>
          </div>
        </div>
      </div>

      <!-- 2. MEZCLA DE VOCES -->
      <div 
        class="border border-contrast/10 p-6 rounded-lg bg-contrast/5 w-full transition-all duration-300 cursor-pointer"
        @click="activeService = activeService === 'voces' ? null : 'voces'"
      >
        <div class="flex justify-between items-start">
          <h2 class="text-2xl font-bold uppercase tracking-tighter">{{ texts[lang].voces.title }}</h2>
          <span class="text-xs bg-contrast/10 px-2 py-1 rounded">{{ activeService === 'voces' ? '−' : '+' }}</span>
        </div>
        <div v-if="activeService === 'voces'" class="mt-4 text-contrast/60 italic text-sm">
          {{ lang === 'es' ? 'Contenido de mezcla de voces próximamente...' : 'Vocal mixing content coming soon...' }}
        </div>
      </div>

      <!-- 3. MENTORIA PRIVADA -->
      <div 
        class="border border-contrast/10 p-6 rounded-lg bg-contrast/5 w-full transition-all duration-300 cursor-pointer"
        @click="activeService = activeService === 'mentoria' ? null : 'mentoria'"
      >
        <div class="flex justify-between items-start">
          <h2 class="text-2xl font-bold uppercase tracking-tighter">{{ texts[lang].mentoria.title }}</h2>
          <span class="text-xs bg-contrast/10 px-2 py-1 rounded">{{ activeService === 'mentoria' ? '−' : '+' }}</span>
        </div>
        <div v-if="activeService === 'mentoria'" class="mt-4 text-contrast/60 italic text-sm">
          {{ lang === 'es' ? 'Contenido de mentoría próximamente...' : 'Mentorship content coming soon...' }}
        </div>
      </div>

      <!-- 4. CUSTOM BEAT -->
      <div 
        class="border border-contrast/10 p-6 rounded-lg bg-contrast/5 w-full transition-all duration-300 cursor-pointer opacity-50"
        @click="activeService = activeService === 'beats' ? null : 'beats'"
      >
        <div class="flex justify-between items-start">
          <h2 class="text-2xl font-bold uppercase tracking-tighter">{{ texts[lang].beats.title }}</h2>
          <p class="text-contrast/40 text-xs uppercase italic">Coming Soon</p>
        </div>
      </div>

    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lang: 'es',
      activeService: null,
      texts: {
        es: {
          mix: {
            title: 'Mezcla y Mastering',
            subtitle: 'MULTITRACK',
            price: '$80.000 ARS',
            waText: 'Hola! Me interesa el servicio de Mezcla + Mastering',
            mainPoints: [
              "Tiempo de entrega estimado 2 semanas (El tiempo puede variar dependiendo del proyecto, siendo los tiempos de entrega mas rápidos o más lentos)",
              "Recibiras tu canción en formato WAV 44.1khz 24bits y MP3 de alta calidad (si lo requiere puede pedir la version en 48Khz)",
              "La cancion se entregara Mezclada y Masterizada (se incluira la version sin masterizar por si usa un ingeniero de mastering particular)"
            ],
            sendSteps: [
              "Exportar todas las pistas por separado tal cual estan en tu proyecto con su nomenclatura (para saber bien que canal es el que estoy viendo)",
              "Si tienen reverb o efectos en voces enviar la version en crudo y la version procesada",
              "Crear un zip con un archivo de texto dentro especificicando el BPM del proyecto y tonalidad (la tonalidad solo si requiere afinación de voces o autotune)",
              "Comunicar previamente el concepto de tu canción (podes incluir una canción de referencia o comentarme lo que busca expresar la pieza ya que esto ayuda a entendernos más rápido)",
              "Aclararme antes de comenzar el nivel de libertad que se me otorga en la mezcla si buscas una mezcla metódica o una mezcla creativa (aplicando efectos distintivos)"
            ],
            conditions: 'Condiciones de acuerdo: Incluir en creditos y redes @doctor6mixer o "mixer: Doctor 6". El pago se efectua el 50% por adelantado y el 50% al terminar (a menos que sea cliente habitual)'
          },
          voces: { title: 'Mezcla de voces' },
          mentoria: { title: 'Mentoría privada' },
          beats: { title: 'Custom Beat' }
        },
        en: {
          mix: { title: '', subtitle: '', price: '', waText: '', mainPoints: [], sendSteps: [], conditions: '' },
          voces: { title: 'Vocal Mixing' },
          mentoria: { title: 'Private Mentorship' },
          beats: { title: 'Custom Beat' }
        }
      }
    }
  }
}
</script>
