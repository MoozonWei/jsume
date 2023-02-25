<script setup lang="ts">
const store = useStore()
const references = store.references
</script>

<template>
  <SectionBox
    v-if="references"
    title="references"
  >
    references
  </SectionBox>
</template>
