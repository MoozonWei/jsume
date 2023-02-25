<script setup lang="ts">
const store = useStore()
const volunteer = store.volunteer
</script>

<template>
  <SectionBox
    v-if="volunteer"
    title="volunteer"
  >
    volunteer
  </SectionBox>
</template>
