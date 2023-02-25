<script setup lang="ts">
const store = useStore()
const languages = store.languages
</script>

<template>
  <SectionBox
    v-if="languages"
    title="languages"
  >
    languages
  </SectionBox>
</template>
