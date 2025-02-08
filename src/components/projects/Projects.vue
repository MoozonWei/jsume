<script setup lang="ts">
const { t } = useI18n()
const projects = getSectionComputedData('projects')
</script>

<template>
  <SectionBox v-if="projects && projects.length > 0" :title="t('title.projects')">
    <div class="projects-container">
      <ProjectCard v-for="project in projects" :key="project.name" :project="project" />
    </div>
  </SectionBox>
</template>
