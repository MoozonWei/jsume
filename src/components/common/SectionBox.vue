<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="section-container">
    <span class="section-title">
      {{ title }}
    </span>
    <div class="section-slot">
      <slot />
    </div>
  </div>
</template>

<style src="@/styles/section.css" />
