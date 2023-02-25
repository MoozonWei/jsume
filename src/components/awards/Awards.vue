<script setup lang="ts">
const store = useStore()
const awards = store.awards
</script>

<template>
  <SectionBox
    v-if="awards"
    title="Awards"
  >
    awards
  </SectionBox>
</template>
