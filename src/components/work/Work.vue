<script setup lang="ts">
const work = getSectionComputedData('work')
</script>

<template>
  <SectionBox
    v-if="work && work.length > 0"
    title="Work Experiences"
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
