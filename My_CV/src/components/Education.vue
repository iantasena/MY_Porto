<script setup>
// Script setup tidak berubah, tetap fetch data
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';
const educationHistory = ref([]);
onMounted(async () => {
  try {
    // URL diubah menjadi path relatif agar berfungsi di Vercel
    const response = await axios.get('/api/education');
    educationHistory.value = response.data;
  } catch (error) {
    console.error('Gagal mengambil data pendidikan:', error);
  }
});
</script>

<template>
  <section id="pendidikan" class="py-20 bg-sw-panel/80 backdrop-blur-sm">
    <div class="container mx-auto px-6">
      <SectionTitle title="Riwayat Pendidikan" />
      <div class="relative mt-12">
        <div class="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-neon-cyan" aria-hidden="true"></div>
        <div class="space-y-8">
          <div v-for="(edu, index) in educationHistory" :key="edu.id" class="relative flex items-center" :class="[index % 2 === 0 ? 'justify-start' : 'justify-end']">
            <div
              class="absolute top-1/2 -translate-y-1/2 h-0.5 w-1/2 bg-neon-cyan"
              :class="[index % 2 === 0 ? 'left-0' : 'left-1/2']"
              aria-hidden="true"
            ></div>

            <div
              class="w-1/2 px-4 z-10 bg-sw-panel"
              :class="[index % 2 === 0 ? 'text-right' : 'text-left']"
            >
              <p class="font-semibold text-sw-accent font-sans">{{ edu.period }}</p>
              <h3 class="text-2xl font-bold text-sw-dark font-sans">{{ edu.institution }}</h3>
              <p class="text-sw-text font-sans">{{ edu.major }}</p>
            </div>

            <div class="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-neon-cyan rounded-full z-10 border-4 border-space-dark"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
