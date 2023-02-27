<script setup lang="ts">
defineProps<{
  start?: {
    year?: number
    month?: number
  }
  end?: {
    year?: number
    month?: number
  }
  isTimePoint?: boolean
}>()
</script>

<template>
  <span
    v-if="start && (start?.month || start?.year)"
    class="flex items-center gap-0.5"
  >
    <i-mdi:calendar />
    <template
      v-if="isTimePoint"
    >
      {{ `${parseDate(start.year, start.month)}` }}
    </template>
    <template
      v-else
    >
      {{ `${parseDate(start.year, start.month)} - ${parseDate(end?.year, end?.month)}` }}
    </template>
  </span>
</template>
