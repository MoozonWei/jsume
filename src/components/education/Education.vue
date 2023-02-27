<script setup lang="ts">
const education = getSectionComputedData('education')
</script>

<template>
  <SectionBox
    v-if="education && education.length > 0"
    title="Education"
  >
    <div class="education-container">
      <EducationCard
        v-for="edu, index in education"
        :key="index"
        :education="edu"
      />
    </div>
  </SectionBox>
</template>

<style src="@/styles/education.css" />
