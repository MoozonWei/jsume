<script setup lang="ts">
const store = useStore()
const education = store.education
</script>

<template>
  <SectionBox
    v-if="education"
    title="Education"
  >
    <div class="education-container">
      <EducationCard
        v-for="edu in education"
        :key="edu.institution"
        :education="edu"
      />
    </div>
  </SectionBox>
</template>

<style src="@/styles/education.css" />
