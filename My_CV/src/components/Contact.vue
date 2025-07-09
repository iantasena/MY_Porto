<script setup>
import SectionTitle from './SectionTitle.vue';
</script>
<template>
<footer id="kontak" class="py-20 bg-gray-800 text-white">
<div class="container mx-auto px-6 text-center">
  <SectionTitle title="Hubungi Saya"/>
  <p class="text-xl text-gray-300 mb-8">Jangan ragu untuk terhubung atau bertanya.</p>

  <a href="mailto:puantorian12@gmail.com" class="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 inline-block mb-12">
    Kirim Email
  </a>

  <div class="flex justify-center space-x-6 mb-8">
    <a href="https://github.com/iantasena" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors duration-300">GitHub</a>
    <a href="#" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors duration-300">LinkedIn</a>
  </div>

  <div class="mt-8">
    <h2 class="text-lg font-semibold mb-4">Sosial Media Saya</h2>
    <div class="flex justify-center items-center gap-6">

      <a href="https://www.instagram.com/iantasena/" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png" alt="Instagram" class="w-10 h-10 transform hover:scale-110 transition-transform duration-300">
      </a>

      <a href="https://www.facebook.com/antasena.handoko.5/" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="Facebook" class="w-10 h-10 transform hover:scale-110 transition-transform duration-300">
      </a>

      <a href="https://discord.com/channels/1374717291429630012/1374717291882876931" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn-icons-png.flaticon.com/128/5968/5968756.png" alt="Discord" class="w-10 h-10 transform hover:scale-110 transition-transform duration-300">
      </a>

      <a href="https://steamcommunity.com/profiles/76561198442558338/" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn-icons-png.flaticon.com/128/220/220223.png" alt="Steam" class="w-10 h-10 transform hover:scale-110 transition-transform duration-300">
      </a>

    </div>
  </div>

  <div class="flex justify-center mt-12 pt-8 border-t border-gray-700">
    <p class="text-gray-400 flex items-center gap-2 text-center flex-wrap justify-center">
      &copy; {{ new Date().getFullYear() }} Puantorian Antasena Handoko, Dibuat dengan
      <span class="flex items-center gap-1">
        Vue.js
        <img src="/images/VueLogo.png" alt="Vue.js" class="w-5 h-5 inline-block" />
      </span>
      ,
      <span class="flex items-center gap-1">
        Express.js
        <img src="/images/ExpressLogo.png" alt="Express.js" class="w-5 h-5 inline-block" />
      </span>
    </p>
  </div>

</div>
</footer>
</template>
