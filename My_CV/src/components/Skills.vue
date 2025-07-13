<script setup>
// Script setup tidak berubah, tetap fetch data
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';
const skills = ref([]); // Variabelnya bernama 'skills'

onMounted(async () => {
  try {
    const response = await axios.get('/api/skills');

    // TAMBAHKAN BARIS INI UNTUK MELIHAT DATA DI CONSOLE
    console.log('Data skills yang diterima:', response.data);

    skills.value = response.data;
  } catch (error) {
    console.error('Gagal mengambil data skills:', error);
  }
});
</script>
<template>
  <section id="skill" class="py-20">
    <div class="container mx-auto px-6">
      <SectionTitle title="Keahlian & Teknologi" />

      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">

        <div v-for="skill in skills" :key="skill.name" class="bg-sw-panel p-4 rounded-lg border border-sw-border text-left">
          <div class="flex justify-between items-center mb-1">
            <h3 class="font-starwars text-sw-dark font-bold">{{ skill.name }}</h3>
            <p class="text-sm text-sw-text">{{ skill.level }}</p>
          </div>
          <div class="w-full bg-sw-border rounded-full h-2.5">
            <div class="bg-sw-accent h-2.5 rounded-full" :style="{ width: skill.width }"></div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
