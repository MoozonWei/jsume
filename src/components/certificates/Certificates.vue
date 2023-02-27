<script setup lang="ts">
const certificates = getSectionComputedData('certificates')
</script>

<template>
  <SectionBox
    v-if="certificates && certificates.length > 0"
    title="Certificates"
  >
    certificates
  </SectionBox>
</template>
