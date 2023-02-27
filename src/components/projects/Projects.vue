<script setup lang="ts">
const projects = getSectionComputedData('projects')
</script>

<template>
  <SectionBox
    v-if="projects && projects.length > 0"
    title="Projects"
  >
    <div class="projects-container">
      <ProjectCard
        v-for="project in projects"
        :key="project.name"
        :project="project"
      />
    </div>
  </SectionBox>
</template>
