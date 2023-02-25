<script setup lang="ts">
defineProps<{
  content: string
}>()

const isCollapsed = ref(true)
</script>

<template>
  <div
    v-if="content"
  >
    <div
      v-if="!isCollapsed"
      class="project-description"
    >
      {{ content }}
    </div>
    <span
      class="text-sm text-neutral-400 underline underline-dotted underline-offset-2 cursor-pointer"
      @click="isCollapsed = !isCollapsed"
    >
      show {{ isCollapsed ? 'more' : 'less' }}
    </span>
  </div>
</template>
