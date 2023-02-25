<script setup lang="ts">
const store = useStore()
const education = store.education
</script>

<template>
  <SectionBox
    v-if="education"
    title="Education"
  >
    education
  </SectionBox>
</template>
