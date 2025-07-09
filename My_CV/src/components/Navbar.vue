<script setup>
import { ref } from 'vue';
const isMenuOpen = ref(false);
</script>

<template>
  <header class="bg-gray-900/80 backdrop-blur-sm shadow-lg shadow-blue-500/10 sticky top-0 z-50 animate-fade-in">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <div class="text-2xl font-bold text-white">Puantorian Antasena Handoko</div>

      <ul class="hidden md:flex space-x-6">
        <li><a href="#profil" class="text-gray-300 hover:text-blue-400 transform hover:-translate-y-0.5 transition-all duration-300">Profil</a></li>
        <li><a href="#pendidikan" class="text-gray-300 hover:text-blue-400 transform hover:-translate-y-0.5 transition-all duration-300">Pendidikan</a></li>
        <li><a href="#skill" class="text-gray-300 hover:text-blue-400 transform hover:-translate-y-0.5 transition-all duration-300">Skill</a></li>
        <li><a href="#proyek" class="text-gray-300 hover:text-blue-400 transform hover:-translate-y-0.5 transition-all duration-300">Proyek</a></li>
        <li><a href="#kontak" class="text-gray-300 hover:text-blue-400 transform hover:-translate-y-0.5 transition-all duration-300">Kontak</a></li>
      </ul>

      <div class="md:hidden">
        <button @click="isMenuOpen = !isMenuOpen">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>
    </nav>

    <div v-if="isMenuOpen" class="md:hidden bg-gray-900 px-2 pt-2 pb-3 space-y-1 sm:px-3">
      <a href="#profil" @click="isMenuOpen = false" class="block text-gray-300 hover:text-blue-400 hover:bg-gray-800 px-3 py-2 rounded-md text-base font-medium">Profil</a>
      <a href="#pendidikan" @click="isMenuOpen = false" class="block text-gray-300 hover:text-blue-400 hover:bg-gray-800 px-3 py-2 rounded-md text-base font-medium">Pendidikan</a>
      <a href="#skill" @click="isMenuOpen = false" class="block text-gray-300 hover:text-blue-400 hover:bg-gray-800 px-3 py-2 rounded-md text-base font-medium">Skill</a>
      <a href="#proyek" @click="isMenuOpen = false" class="block text-gray-300 hover:text-blue-400 hover:bg-gray-800 px-3 py-2 rounded-md text-base font-medium">Proyek</a>
      <a href="#kontak" @click="isMenuOpen = false" class="block text-gray-300 hover:text-blue-400 hover:bg-gray-800 px-3 py-2 rounded-md text-base font-medium">Kontak</a>
    </div>
  </header>
</template>
