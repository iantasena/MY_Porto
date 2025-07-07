<script setup>
import EducationSection from './components/Education.vue';
import SkillsSection from './components/Skills.vue';
import ProjectsSection from './components/Projects.vue';
import { RouterView } from 'vue-router';
</script>
<template>
<div class="bg-gray-100 font-sans">
<RouterView />
</div>
</template>
<style>
/* Anda bisa menambahkan style global di sini jika perlu */
body {
  background-color: #f8fafc; /* bg-gray-50 */
}
</style>
