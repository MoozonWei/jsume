<script setup lang="ts">
const store = useStore()
const projects = store.projects
</script>

<template>
  <SectionBox
    v-if="projects"
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
