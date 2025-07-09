<script setup>
defineProps({ title: String });
</script>
<template>
<div class="mb-12 text-center">
  <h2 class="text-4xl font-starwars text-sw-yellow text-shadow-glow-yellow">{{ title }}</h2>
  <div class="w-24 h-px bg-sw-blue mx-auto mt-4 rounded"></div>
</div>
</template>
