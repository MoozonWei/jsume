<script setup lang="ts">
const store = useStore()
const publications = store.publications
</script>

<template>
  <SectionBox
    v-if="publications"
    title="Publications"
  >
    publications
  </SectionBox>
</template>
