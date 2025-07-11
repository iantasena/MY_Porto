<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
// import SectionTitle from './SectionTitle.vue'; // Aktifkan jika Anda punya
komponen ini
const educationHistory = ref([]);

const API_URL = import.meta.env.PROD ? '/api/education' :
'http://localhost:3000/api/education';
onMounted(async () => {
try {
educationHistory.value = (await axios.get(API_URL)).data;
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
      <div class="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-sw-border" aria-hidden="true"></div>
      <div class="space-y-8">
        <div v-for="(edu, index) in educationHistory" :key="edu.id" class="relative flex items-center" :class="[index % 2 === 0 ? 'justify-start' : 'justify-end']">
          <div class="w-1/2 px-4" :class="[index % 2 === 0 ? 'text-right' : 'text-left']">
            <p class="font-semibold text-sw-accent font-sans">{{ edu.period }}</p>
            <h3 class="text-2xl font-bold text-sw-dark font-sans">{{ edu.institution }}</h3>
            <p class="text-sw-text font-sans">{{ edu.major }}</p>
          </div>
          <div class="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-sw-accent rounded-full z-10 border-4 border-[#f0f0f0]"></div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
