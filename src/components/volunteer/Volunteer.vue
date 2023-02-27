<script setup lang="ts">
const volunteer = getSectionComputedData('volunteer')
</script>

<template>
  <SectionBox
    v-if="volunteer && volunteer.length > 0"
    title="Volunteer"
  >
    volunteer
  </SectionBox>
</template>
