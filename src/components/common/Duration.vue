<script setup lang="ts">
defineProps<{
  start: {
    year: number
    month: number
  }
  end: {
    year: number
    month: number
  }
}>()
</script>

<template>
  <span
    v-if="start"
    class="flex items-center gap-0.5"
  >
    <i-mdi:calendar />
    {{ `${parseDate(start.year, start.month)} - ${parseDate(end.year, end.month)}` }}
  </span>
</template>
