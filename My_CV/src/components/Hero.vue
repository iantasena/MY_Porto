<template>
  <section id="profil" class="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center min-h-screen">

    <div class="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
      <h2 class="text-2xl font-starwars text-space-text mb-2 animate-slidein-left" style="animation-delay: 100ms;">
        Halo, Saya
      </h2>

      <h1 class="text-4xl md:text-5xl font-starwars text-space-heading drop-shadow-glow-white mb-4 animate-slidein-left">
        <span class="text-neon-cyan drop-shadow-glow-cyan">Puantorian Antasena Handoko</span>
      </h1>

      <h3 class="text-xl text-neon-cyan/80 mt-4 mb-6 animate-slidein-left font-sans" style="animation-delay: 200ms;">
        Mahasiswa Teknik Informatika
      </h3>

      <p class="text-lg text-space-text mb-8 max-w-xl mx-auto md:mx-0 animate-slidein-left font-sans" style="animation-delay: 300ms;">
        Bersemangat dalam pengembangan web dan desain antarmuka, dengan ketertarikan pada logika dan pemecahan masalah. Bercita-cita menjadi seorang software engineer yang andal di masa depan.
      </p>

      <a href="#kontak" class="font-starwars bg-neon-cyan text-space-dark font-bold py-3 px-6 rounded-md hover:bg-opacity-80 transition-all duration-300 inline-block animate-slidein-left" style="animation-delay: 400ms;">
        Hubungi Saya
      </a>
    </div>

    <div class="md:w-1/2 flex justify-center animate-slidein-right">
      <img
        src="/images/profile.jpg"
        alt="Foto profil Puantorian Antasena Handoko"
        class="w-72 h-72 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-neon-cyan/50"
      >
    </div>

  </section>
</template>
