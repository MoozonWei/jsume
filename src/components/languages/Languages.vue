<script setup lang="ts">
const languages = getSectionComputedData('languages')
</script>

<template>
  <SectionBox
    v-if="languages && languages.length > 0"
    title="Languages"
  >
    <template
      v-for="language, index in languages"
      :key="language.language"
    >
      <span
        class="font-bold"
      >
        {{ language.language }}
      </span>[{{ language.fluency }}]{{ index < languages.length - 1 ? ', ' : '' }}
    </template>
  </SectionBox>
</template>
