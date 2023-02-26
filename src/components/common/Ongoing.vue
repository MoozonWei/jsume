<script setup lang="ts">
defineProps<{
  ongoing: boolean
}>()
</script>

<template>
  <span
    v-if="ongoing"
    class="flex items-center gap-0.5"
  >
    <i-mdi:circle class="text-green-200 animate-pulse" />
    Ongoing
  </span>
</template>
