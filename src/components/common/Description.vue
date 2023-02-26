<script setup lang="ts">
defineProps<{
  content?: string
}>()
</script>

<template>
  <div
    v-if="content"
  >
    <Collapse>
      <div
        class="project-description"
      >
        {{ content }}
      </div>
    </Collapse>
  </div>
</template>
