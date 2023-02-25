<script setup lang="ts">
const store = useStore()
const skills = store.skills
</script>

<template>
  <SectionBox
    v-if="skills"
    title="skills"
  >
    skills
  </SectionBox>
</template>
