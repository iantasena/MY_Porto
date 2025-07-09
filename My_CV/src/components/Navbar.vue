<script setup>
import { ref } from 'vue';
const isMenuOpen = ref(false);
</script>
<template>
  <header class="bg-sw-dark/80 backdrop-blur-sm sticky top-0 z-50 border-b border-sw-border">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <div class="text-2xl font-starwars text-sw-yellow text-shadow-glow-blue">Puantorian Antasena Handoko</div>
      <ul class="hidden md:flex space-x-6 font-starwars text-sm">
        <li><a href="#profil" class="text-sw-text hover:text-sw-yellow transition-colors">Profil</a></li>
        <li><a href="#pendidikan" class="text-sw-text hover:text-sw-yellow transition-colors">Pendidikan</a></li>
        <li><a href="#skill" class="text-sw-text hover:text-sw-yellow transition-colors">Skill</a></li>
        <li><a href="#proyek" class="text-sw-text hover:text-sw-yellow transition-colors">Proyek</a></li>
        <li><a href="#kontak" class="text-sw-text hover:text-sw-yellow transition-colors">Kontak</a></li>
      </ul>
      <div class="md:hidden">
        <button @click="isMenuOpen = !isMenuOpen">
          <svg class="w-6 h-6 text-sw-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>
    </nav>
    <div v-if="isMenuOpen" class="md:hidden bg-sw-panel font-starwars text-sm">
      <a v-for="link in ['profil', 'pendidikan', 'skill', 'proyek', 'kontak']" :key="link" :href="'#'+link" @click="isMenuOpen = false" class="block text-sw-text hover:text-sw-yellow hover:bg-sw-border px-4 py-2 capitalize">{{ link }}</a>
    </div>
  </header>
</template>
