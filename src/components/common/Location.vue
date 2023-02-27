<script setup lang="ts">
defineProps<{
  location?: string
}>()
</script>

<template>
  <span
    v-if="location"
    class="flex items-center gap-0.5"
  >
    <i-material-symbols:location-on />
    {{ location }}
  </span>
</template>
