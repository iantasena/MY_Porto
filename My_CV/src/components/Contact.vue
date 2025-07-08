<script setup>
import SectionTitle from './SectionTitle.vue';
</script>
<template>
<footer id="kontak" class="py-20 bg-gray-800 text-white">
<div class="container mx-auto px-6 text-center">
<SectionTitle title="Hubungi Saya"/>
<p class="text-xl text-gray-300 mb-8">Jangan ragu untuk terhubung
atau bertanya.</p>
<a href="mailto:puantorian12@gmail.com" class="bg-blue-600 textwhite font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transitioncolors duration-300 inline-block mb-12">
Kirim Email
</a>
<div class="flex justify-center">
  <p class="text-gray-500 flex items-center gap-2 text-center">
    &copy; {{ new Date().getFullYear() }} Puantorian Antasena Handoko.
    <span class="flex items-center gap-1">
      <img src="/images/VueLogo.png" alt="Vue.js" class="w-5 h-5 inline-block" />
      Vue.js
    </span>,
    <span class="flex items-center gap-1">
      <img src="/images/ExpressLogo.png" alt="Express.js" class="w-5 h-5 inline-block bg-white rounded" />
      Express.js
    </span>
  </p>
</div>

</div>
</footer>
</template>
