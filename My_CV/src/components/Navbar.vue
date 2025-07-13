<script setup>
import { ref } from 'vue';
const isMenuOpen = ref(false);
</script>
<template>
  <header class="bg-sw-panel/45 backdrop-blur-sm sticky top-0 z-50 border-b border-sw-border">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <div class="text-2xl font-starwars text-sw-dark">Puantorian Antasena Handoko</div>
      <ul class="hidden md:flex space-x-6 font-starwars text-sm">
        <li><a href="#profil" class="text-sw-text hover:text-sw-accent transition-colors">Profil</a></li>
        <li><a href="#pendidikan" class="text-sw-text hover:text-sw-accent transition-colors">Pendidikan</a></li>
        <li><a href="#skill" class="text-sw-text hover:text-sw-accent transition-colors">Skill</a></li>
        <li><a href="#proyek" class="text-sw-text hover:text-sw-accent transition-colors">Proyek</a></li>
        <li><a href="#kontak" class="text-sw-text hover:text-sw-accent transition-colors">Kontak</a></li>
      </ul>
      <div class="md:hidden">
        <button @click="isMenuOpen = !isMenuOpen">
          <svg class="w-6 h-6 text-sw-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>
    </nav>
    <div v-if="isMenuOpen" class="md:hidden bg-sw-panel font-starwars text-sm border-t border-sw-border">
      <a v-for="link in ['profil', 'pendidikan', 'skill', 'proyek', 'kontak']" :key="link" :href="'#'+link" @click="isMenuOpen = false" class="block text-sw-text hover:text-sw-accent hover:bg-sw-border/30 px-4 py-2 capitalize">{{ link }}</a>
    </div>
  </header>
</template>
