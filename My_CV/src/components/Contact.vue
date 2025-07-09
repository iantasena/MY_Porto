<script setup>
import SectionTitle from './SectionTitle.vue';
</script>
<template>
<footer id="kontak" class="py-20 bg-sw-panel border-t border-sw-border">
  <div class="container mx-auto px-6 text-center">
    <SectionTitle title="Hubungi Saya"/>
    <p class="text-xl text-sw-text mb-8">Jangan ragu untuk terhubung atau bertanya.</p>
    <a href="mailto:puantorian12@gmail.com" class="font-starwars bg-sw-yellow text-sw-dark font-bold py-3 px-6 rounded-md hover:bg-sw-yellow/80 transition-colors inline-block mb-12">
      Kirim Email
    </a>
    <div class="mt-8">
      <h2 class="text-lg font-starwars text-sw-text mb-4">Sosial media</h2>
      <div class="flex justify-center items-center gap-6">
        <a href="https://www.instagram.com/iantasena" target="_blank" rel="noopener noreferrer" class="text-sw-text hover:text-sw-blue transition-transform duration-300 hover:scale-110">Instagram</a>
        <span class="text-sw-border">|</span>
        <a href="https://github.com/iantasena" target="_blank" rel="noopener noreferrer" class="text-sw-text hover:text-sw-blue transition-transform duration-300 hover:scale-110">GitHub</a>


      </div>
    </div>
    <div class="flex justify-center mt-12 pt-8 border-t border-sw-border">
      <p class="text-sw-text/70 text-sm">&copy; {{ new Date().getFullYear() }} Puantorian Antasena Handoko</p>
    </div>
  </div>
</footer>
</template>
