<script setup lang="ts">
const store = useStore()
const projects = store.projects
</script>

<template>
  <SectionBox
    v-if="projects"
    title="projects"
  >
    projects
  </SectionBox>
</template>
