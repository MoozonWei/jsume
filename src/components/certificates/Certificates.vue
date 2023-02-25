<script setup lang="ts">
const store = useStore()
const certificates = store.certificates
</script>

<template>
  <SectionBox
    v-if="certificates"
    title="Certificates"
  >
    certificates
  </SectionBox>
</template>
