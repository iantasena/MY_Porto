<script setup>
import { ref } from 'vue';
const isMenuOpen = ref(false);
</script>
<template>
  <header class="bg-space-panel/70 backdrop-blur-md sticky top-0 z-50 border-b border-space-border">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <div class="text-2xl font-starwars text-space-heading">Puantorian Antasena Handook</div>
      <ul class="hidden md:flex space-x-6 font-starwars text-sm">
        <li><a href="#profil" class="text-space-text hover:text-neon-cyan transition-colors">Profil</a></li>
        <li><a href="#pendidikan" class="text-space-text hover:text-neon-cyan transition-colors">Pendidikan</a></li>
        <li><a href="#skill" class="text-space-text hover:text-neon-cyan transition-colors">Skill</a></li>
        <li><a href="#proyek" class="text-space-text hover:text-neon-cyan transition-colors">Proyek</a></li>
        <li><a href="#kontak" class="text-space-text hover:text-neon-cyan transition-colors">Kontak</a></li>
      </ul>
      <div class="md:hidden">
        <button @click="isMenuOpen = !isMenuOpen">
          <svg class="w-6 h-6 text-space-heading" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>
    </nav>
    <div v-if="isMenuOpen" class="md:hidden bg-space-panel font-starwars text-sm border-t border-space-border">
      <a v-for="link in ['profil', 'pendidikan', 'skill', 'proyek', 'kontak']" :key="link" :href="'#'+link" @click="isMenuOpen = false" class="block text-space-text hover:text-neon-cyan hover:bg-space-border/30 px-4 py-2 capitalize">{{ link }}</a>
    </div>
  </header>
</template>
