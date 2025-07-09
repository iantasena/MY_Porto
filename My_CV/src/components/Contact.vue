<script setup>
import SectionTitle from './SectionTitle.vue';
</script>
<template>
<footer id="kontak" class="py-20 bg-sw-panel border-t border-sw-border">
  <div class="container mx-auto px-6 text-center">
    <SectionTitle title="Hubungi Saya"/>
    <p class="text-xl text-sw-text mb-8 font-sans">Jangan ragu untuk terhubung atau bertanya.</p>
    <a href="mailto:puantorian12@gmail.com" class="font-starwars bg-sw-accent text-white font-bold py-3 px-6 rounded-md hover:bg-sw-accent/80 transition-colors inline-block mb-12">
      Kirim Pesan
    </a>
    <div class="mt-8">
      <h2 class="text-lg font-semibold mb-4 text-sw-dark font-sans">Saluran Komunikasi</h2>
      <div class="flex justify-center items-center gap-6 font-sans">
        <a href="https://www.instagram.com/URL_PROFIL_ANDA" target="_blank" class="text-sw-text hover:text-sw-accent transition-transform duration-300 hover:scale-110">Instagram</a>
        <span class="text-sw-border">|</span>
        <a href="https://github.com/iantasena" target="_blank" class="text-sw-text hover:text-sw-accent transition-transform duration-300 hover:scale-110">GitHub</a>
        <span class="text-sw-border">|</span>
        <a href="https://steamcommunity.com/id/NAMA_PROFIL_STEAM" target="_blank" class="text-sw-text hover:text-sw-accent transition-transform duration-300 hover:scale-110">Steam</a>
      </div>
    </div>
    <div class="flex justify-center mt-12 pt-8 border-t border-sw-border">
      <p class="text-sw-text/70 text-sm font-sans">&copy; {{ new Date().getFullYear() }} Puantorian Antasena Handoko.</p>
    </div>
  </div>
</footer>
</template>
