<template>
<section id="profil" class="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center min-h-screen">
  <div class="md:w-1/2 mb-10 md:mb-0">
    <h1 class="text-5xl font-starwars text-sw-yellow text-shadow-glow-yellow mb-4 animate-slidein-left">
      Halo, Saya <span class="text-sw-blue text-shadow-glow-blue">Puantorian A. H.</span>
    </h1>
    <p class="text-xl text-sw-text mb-8 animate-slidein-left" style="animation-delay: 200ms;">
      Mahasiswa Teknik Informatika yang bersemangat dalam pengembangan web dan desain antarmuka di galaksi ini.
    </p>
    <a href="#kontak" class="font-starwars bg-sw-blue text-sw-dark font-bold py-3 px-6 rounded-md hover:bg-sw-blue/80 transition-colors duration-300 inline-block animate-slidein-left" style="animation-delay: 400ms;">
      Hubungi Saya
    </a>
  </div>
  <div class="md:w-1/2 flex justify-center animate-slidein-right">
    <img src="/Images/Foto.jpg" alt="Foto Profil" class="w-80 h-80 rounded-full object-cover shadow-2xl shadow-sw-blue/30 border-2 border-sw-blue">
  </div>
</section>
</template>
