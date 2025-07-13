<script setup>
import SectionTitle from './SectionTitle.vue';
</script>
<template>
  <footer id="kontak" class="py-20 bg-sw-panel border-t border-sw-border">
    <div class="container mx-auto px-6 text-center">
      <SectionTitle title="Hubungi Saya"/>
      <p class="text-xl text-sw-text mb-8 font-sans">Jangan ragu untuk terhubung atau bertanya.</p>

      <a
        href="mailto:puantorian12@gmail.com"
        class="font-starwars bg-neon-cyan text-space-dark font-bold py-3 px-6 rounded-md hover:bg-opacity-80 transition-all duration-300 inline-block mb-12"
      >
        Kirim Pesan
      </a>


      <div class="flex flex-col items-center justify-center gap-4 mb-8 animate-fadein" style="animation-delay: 300ms;">
        <h1 class="text-xl font-sans text-sw-dark">Saluran Komunikasi</h1>
        <div class="flex gap-6">
          <a href="https://www.instagram.com/iantasena" target="_blank" rel="noopener noreferrer" class="inline-block">
            <img src="/images/instagram.svg" alt="Instagram" class="w-12 h-12 hover:scale-105 transition-transform duration-300">
          </a>
          <a href="https://steamcommunity.com/profiles/76561198442558338/" target="_blank" rel="noopener noreferrer" class="inline-block">
            <img src="/images/steam.svg" alt="Steam" class="w-12 h-12 hover:scale-105 transition-transform duration-300">
          </a>
          <a href="https://github.com/iantasena" target="_blank" rel="noopener noreferrer" class="inline-block">
            <img src="/images/github.svg" alt="Git" class="w-12 h-12 hover:scale-105 transition-transform duration-300">
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
