<script setup lang="ts">
const store = useStore()
const interests = store.interests
</script>

<template>
  <SectionBox
    v-if="interests"
    title="interests"
  >
    interests
  </SectionBox>
</template>
