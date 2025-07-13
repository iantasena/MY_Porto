<script setup>
import { ref } from 'vue';

// State untuk mengontrol visibilitas menu mobile
const isMenuOpen = ref(false);

// 1. SATU SUMBER DATA: Simpan semua link navigasi dalam satu array.
// Jika ada link baru, cukup tambahkan di sini.
const navLinks = ref([
  { text: 'Profil', href: '#profil' },
  { text: 'Pendidikan', href: '#pendidikan' },
  { text: 'Skill', href: '#skill' },
  { text: 'Proyek', href: '#proyek' },
  { text: 'Kontak', href: '#kontak' },
]);

// Fungsi untuk menutup menu, agar lebih bersih saat dipanggil di template
const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<template>
  <header class="bg-space-panel/40 backdrop-blur-md sticky top-0 z-50 border-b border-space-border">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <div class="text-1x1 font-starwars text-space-heading">
        Puantorian Antasena Handoko
      </div>

      <ul class="hidden md:flex space-x-6 font-starwars text-sm">
        <li v-for="link in navLinks" :key="link.href">
          <a :href="link.href" class="text-space-text hover:text-neon-cyan transition-colors">
            {{ link.text }}
          </a>
        </li>
      </ul>

      <div class="md:hidden">
        <button
          @click="isMenuOpen = !isMenuOpen"
          aria-label="Buka menu navigasi"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-menu"
        >
          <svg class="w-6 h-6 text-space-heading" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </nav>

    <Transition name="slide-fade">
      <div v-if="isMenuOpen" id="mobile-menu" class="md:hidden bg-space-panel font-starwars text-sm border-t border-space-border">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          @click="closeMenu"
          class="block text-space-text hover:text-neon-cyan hover:bg-space-border/30 px-4 py-2"
        >
          {{ link.text }}
        </a>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
/* 5. Tambahkan CSS untuk animasi <Transition> */

</style>
