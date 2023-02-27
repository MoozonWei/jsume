<script setup lang="ts">
const references = getSectionComputedData('references')
</script>

<template>
  <SectionBox
    v-if="references && references.length > 0"
    title="References"
  >
    references
  </SectionBox>
</template>
