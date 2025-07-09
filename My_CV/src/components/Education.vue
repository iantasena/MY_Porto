<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

const educationHistory = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/education');
    educationHistory.value = response.data;
  } catch (error) {
    console.error('Gagal mengambil data pendidikan:', error);
  }
});
</script>

<template>
  <section id="pendidikan" class="py-20 bg-gray-800">
    <div class="container mx-auto px-6">
      <SectionTitle title="Riwayat Pendidikan" />
      <div class="relative mt-12">
        <div class="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-300" aria-hidden="true"></div>

        <div class="space-y-8">
          <div v-for="(edu, index) in educationHistory" :key="edu.id" class="relative flex items-center" :class="[index % 2 === 0 ? 'justify-start' : 'justify-end']">

            <div class="w-1/2 px-4" :class="[index % 2 === 0 ? 'text-right' : 'text-left']">
              <p class="font-semibold text-blue-600">{{ edu.period }}</p>
              <h3 class="text-2xl font-bold text-white">{{ edu.institution }}</h3>
              <p class="text-gray-300">{{ edu.major }}</p>
            </div>

            <div class="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full z-10 border-4 border-white"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
