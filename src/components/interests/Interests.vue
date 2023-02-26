<script setup lang="ts">
const store = useStore()
const interests = store.interests
</script>

<template>
  <SectionBox
    v-if="interests && interests.length > 0"
    title="Interests"
  >
    interests
  </SectionBox>
</template>
