<script setup>
// Script setup tidak berubah, tetap fetch data
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';
const skills = ref([]);
onMounted(async () => {
  try { const response = await axios.get('http://localhost:3000/api/skills'); skills.value = response.data; } catch (error) { console.error(error); }
});
</script>
<template>
  <section id="skill" class="py-20">
    <div class="container mx-auto px-6">
      <SectionTitle title="Keahlian & Teknologi" />
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
        <div v-for="skill in skills" :key="skill.name" class="bg-sw-panel p-6 rounded-lg border border-sw-border text-center transform hover:border-sw-accent transition-all duration-300 hover:-translate-y-1">
          <h3 class="text-xl font-starwars text-sw-dark">{{ skill.name }}</h3>
          <p class="text-sw-text mt-2">{{ skill.level }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
