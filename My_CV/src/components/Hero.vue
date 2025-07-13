<template>
<section id="profil" class="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center min-h-screen">
  <div class="md:w-1/2 mb-10 md:mb-0">
    <h1 class="text-5xl font-starwars text-sw-dark drop-shadow-glow mb-4 animate-slidein-left">
      Halo, Saya <span class="text-sw-accent">Puantorian A. H.</span>
    </h1>
    <p class="text-xl text-sw-text mb-8 animate-slidein-left font-sans" style="animation-delay: 200ms;">
      Mahasiswa Teknik Informatika yang bersemangat dalam pengembangan web dan desain antarmuka.
    </p>
    <a href="#kontak" class="font-starwars bg-sw-accent text-white font-bold py-3 px-6 rounded-md hover:bg-sw-accent/80 transition-colors duration-300 inline-block animate-slidein-left" style="animation-delay: 400ms;">
      Hubungi Saya
    </a>
  </div>
  <div class="md:w-1/2 flex justify-center animate-slidein-right">
    <img src="/images/profile.png" alt="Foto Profil" class="w-80 h-80 rounded-full object-cover shadow-2xl border-4 border-white">
  </div>
</section>
</template>
