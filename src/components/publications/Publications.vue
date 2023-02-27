<script setup lang="ts">
const publications = getSectionComputedData('publications')
</script>

<template>
  <SectionBox
    v-if="publications && publications.length > 0"
    title="Publications"
  >
    publications
  </SectionBox>
</template>
