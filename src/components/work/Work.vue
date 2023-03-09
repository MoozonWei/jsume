<script setup lang="ts">
const { t } = useI18n()
const work = getSectionComputedData('work')
</script>

<template>
  <SectionBox
    v-if="work && work.length > 0"
    :title="t('title.work')"
  >
    <div class="work-container">
      <WorkCard
        v-for="item in work"
        :key="item.end"
        :work="item"
      />
    </div>
  </SectionBox>
</template>
