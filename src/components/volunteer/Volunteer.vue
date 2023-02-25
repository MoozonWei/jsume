<script setup lang="ts">
const store = useStore()
const volunteer = store.volunteer
</script>

<template>
  <SectionBox
    v-if="volunteer"
    title="Volunteer"
  >
    volunteer
  </SectionBox>
</template>
