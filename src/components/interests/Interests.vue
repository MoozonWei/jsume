<script setup lang="ts">
const interests = getSectionComputedData('interests')
</script>

<template>
  <SectionBox
    v-if="interests && interests.length > 0"
    title="Interests"
  >
    interests
  </SectionBox>
</template>
