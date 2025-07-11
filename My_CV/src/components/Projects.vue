<script setup>
// Bagian script ini tidak perlu diubah, tetap mengambil data dari API
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

const projects = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('/api/projects');
    // BENAR: Simpan data ke variabel 'projects.value'
    projects.value = response.data;
  } catch (error) {
    console.error('Gagal mengambil data proyek:', error);
  }
});
</script>

<template>
  <section id="proyek" class="py-20 ">
    <div class="container mx-auto px-6">
      <SectionTitle title="Proyek Unggulan" />
      <div class="grid md:grid-cols-2 gap-12 mt-12">

        <div v-for="project in projects" :key="project.title" class="bg-sw-panel rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 border border-sw-border">
          <img :src="project.image" alt="Gambar Proyek" class="w-full h-56 object-cover">
          <div class="p-6">

            <h3 class="text-2xl font-bold text-sw-dark mb-2 font-sans">{{ project.title }}</h3>

            <p class="text-sw-text mb-4 font-sans">{{ project.description }}</p>

            <div class="mb-4">
              <span v-for="t in project.tech" :key="t" class="inline-block bg-blue-100 text-sw-accent text-sm font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-full font-sans">
                {{ t }}
              </span>
            </div>

            <a v-if="project.link" :href="project.link" target="_blank" rel="noopener noreferrer" class="text-sw-accent font-semibold hover:underline font-sans">
              Frontend
            </a>
            <span v-if="project.link && project.link2" class="mx-2 text-gray-400">|</span>
            <a v-if="project.link2" :href="project.link2" target="_blank" rel="noopener noreferrer" class="text-sw-accent font-semibold hover:underline font-sans">
              Backend
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
