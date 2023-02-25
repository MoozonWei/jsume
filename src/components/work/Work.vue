<script setup lang="ts">
const store = useStore()
const work = store.work
</script>

<template>
  <SectionBox
    v-if="work"
    title="Work Experiences"
  >
    work
  </SectionBox>
</template>
