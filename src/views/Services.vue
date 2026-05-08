<template>
  <div class="padding py-20 flex flex-col gap-8 min-h-screen">
    <section class="flex flex-col gap-4">
      <h1 class="text-4xl uppercase font-bold text-contrast">Services</h1>
      <p class="text-contrast/60 leading-relaxed max-w-2xl text-lg">
        Aquí podés contratar mis servicios profesionales de producción musical.
      </p>
    </section>

    <section class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Servicio: Mezcla + Mastering -->
      <div class="border border-contrast/10 p-6 rounded-lg bg-contrast/5 flex flex-col justify-between">
        <div>
          <div class="flex justify-between items-start">
            <h2 class="text-xl font-bold uppercase">Mezcla & Mastering</h2>
            <span class="bg-accent/10 text-accent text-xs py-1 px-2 rounded uppercase font-bold">Oferta</span>
          </div>
          <p class="text-contrast/60 mt-2">
            Finalización profesional para tus tracks. Incluye **Mastering de regalo**.
          </p>
          <ul class="mt-4 text-sm text-contrast/80 list-disc list-inside flex flex-col gap-1">
            <li>Entrega en WAV 44.1kHz / 24bit</li>
            <li>Versión MP3 incluida</li>
            <li>Opción 48kHz disponible bajo pedido</li>
          </ul>
          <p class="mt-6 font-mono text-accent text-2xl font-bold">$80.000 ARS</p>
        </div>

        <!-- Botones de Contacto -->
        <div class="flex flex-col sm:flex-row gap-3 mt-8">
          <a 
            href="mailto:contact@doctor6.uk?subject=Consulta por Mezcla y Mastering" 
            class="flex-1 text-center bg-contrast text-background py-2 rounded font-bold hover:opacity-90 transition-opacity"
          >
            Email
          </a>
          <a 
            href="https://wa.me" 
            target="_blank"
            class="flex-1 text-center border border-[#25D366] text-[#25D366] py-2 rounded font-bold hover:bg-[#25D366]/10 transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <!-- Aquí iría el de Beatmaking que mencionaste -->
      <div class="border border-contrast/10 p-6 rounded-lg bg-contrast/5 border-dashed flex items-center justify-center">
        <p class="text-contrast/40 uppercase tracking-widest italic">Beatmaking Personalizado (Próximamente)</p>
      </div>
    </section>
  </div>
</template>
