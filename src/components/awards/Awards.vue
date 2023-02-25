<script setup lang="ts">
const store = useStore()
const awards = store.awards
</script>

<template>
  <SectionBox
    v-if="awards"
    title="awards"
  >
    awards
  </SectionBox>
</template>
