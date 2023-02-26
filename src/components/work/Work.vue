<script setup lang="ts">
const store = useStore()
const work = store.work
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
