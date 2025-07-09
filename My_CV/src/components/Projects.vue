<script setup>
// Script tetap sama
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';
const projects = ref([]);
onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/projects');
    projects.value = response.data;
  } catch (error) {
    console.error('Gagal mengambil data proyek:', error);
  }
});
</script>
<template>
  <section id="proyek" class="py-20 bg-gray-900">
    <div class="container mx-auto px-6">
      <SectionTitle title="Proyek Unggulan" />
      <div class="grid md:grid-cols-2 gap-12 mt-12">
        <div v-for="project in projects" :key="project.title" class="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 border border-gray-700">
          <img :src="project.image" alt="Gambar Proyek" class="w-full h-56 object-cover">
          <div class="p-6">
            <h3 class="text-2xl font-bold text-white mb-2">{{ project.title }}</h3>
            <p class="text-gray-300 mb-4">{{ project.description }}</p>
            <div class="mb-4">
              <span v-for="t in project.tech" :key="t" class="inline-block bg-blue-900/50 text-blue-300 text-sm font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-full">
                {{ t }}
              </span>
            </div>
            <a v-if="project.link" :href="project.link" target="_blank" rel="noopener noreferrer" class="text-blue-400 font-semibold hover:text-green-400 hover:underline">
              Frontend
            </a>
            <span v-if="project.link && project.link2" class="mx-2 text-gray-500">|</span>
            <a v-if="project.link2" :href="project.link2" target="_blank" rel="noopener noreferrer" class="text-blue-400 font-semibold hover:text-red-400 hover:underline">
              Backend
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
