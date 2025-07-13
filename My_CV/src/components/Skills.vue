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
  <section id="keahlian" class="py-20">
    <div class="container mx-auto px-6">
      <SectionTitle title="Keahlian Saya" />

      <div class="mt-12 space-y-8">
        <div v-for="skill in skills" :key="skill.name" class="font-sans">

          <div class="flex justify-between mb-1">
            <span class="text-base font-medium text-sw-dark">{{ skill.name }}</span>
            <span class="text-sm font-medium text-sw-text">{{ skill.level }}</span>
          </div>

          <div class="w-full bg-sw-border rounded-full h-2.5">
            <div
              class="bg-blue-500 h-2.5 rounded-full"
              :style="{ width: skill.width }">
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>
