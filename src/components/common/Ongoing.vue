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
    <i-mdi:circle class="animate-pulse text-green-200" />
    Ongoing
  </span>
</template>
