<script setup lang="ts">
const { t } = useI18n()
const publications = getSectionComputedData('publications')
</script>

<template>
  <SectionBox
    v-if="publications && publications.length > 0"
    :title="t('title.publications')"
  >
    publications
  </SectionBox>
</template>
