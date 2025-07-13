<script setup>
defineProps({ title: String });
</script>
<template>
<div class="mb-12 text-center">
  <h2 class="text-4xl font-starwars text-space-heading drop-shadow-glow-cyan">{{ title }}</h2>
  <div class="w-24 h-1 bg-neon-cyan mx-auto mt-4 rounded"></div>
</div>
</template>
