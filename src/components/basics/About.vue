<script setup lang="ts">
const basics = getSectionComputedData('basics')
</script>

<template>
  <SectionBox
    v-if="basics.summary && basics.summary.length > 0"
    title="About"
  >
    <div
      class="text-justify"
      v-html="basics.summary.replace(/\r\n|\r|\n/g, '<br>')"
    />
  </SectionBox>
</template>
