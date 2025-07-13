<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';
const skills = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('/api/skills');
    skills.value = response.data;
  } catch (error) {
    console.error('Gagal mengambil data skills:', error);
  }
});
</script>
<template>
  <section id="skill" class="py-20 bg-space-dark">
    <div class="container mx-auto px-6">
      <SectionTitle title="Keahlian & Teknologi" />

      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">

        <div v-for="skill in skills" :key="skill.name"
             class="bg-space-panel p-4 rounded-lg border border-space-border text-left transform hover:-translate-y-1 transition-transform duration-300">
          <div class="flex justify-between items-center mb-2">
            <h3 class="font-starwars text-space-heading text-lg">{{ skill.name }}</h3>
            <p class="text-sm text-space-text font-sans">{{ skill.level }}</p>
          </div>
          <div class="w-full bg-space-dark rounded-full h-2.5">
                        <div class="h-2.5 rounded-full" :class="skill.colorClass" :style="{ width: skill.width }"></div>
          </div>
        </div>

      </div>
  </div>
</section>
</template>
