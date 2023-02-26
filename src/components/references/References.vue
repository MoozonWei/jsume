<script setup lang="ts">
const store = useStore()
const references = store.references
</script>

<template>
  <SectionBox
    v-if="references && references.length > 0"
    title="References"
  >
    references
  </SectionBox>
</template>
