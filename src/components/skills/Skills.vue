<script setup lang="ts">
const store = useStore()
const skills = store.skills
</script>

<template>
  <SectionBox
    v-if="skills"
    title="Skills"
  >
    <div class="skills-container">
      <template
        v-for="skill in skills"
        :key="skill.name"
      >
        <span
          class="skill-name"
        >
          {{ skill.name }}
        </span>
        <span
          class="skill-keywords"
        >
          {{ skill.keywords.join(' | ') }}
        </span>
      </template>
    </div>
  </SectionBox>
</template>

<style src="@/styles/skills.css" />
