<script setup lang="ts">
const props = defineProps<{
  notCollapse?: boolean
}>()
const { t } = useI18n()
const isCollapsed = ref(!props.notCollapse)
</script>

<template>
  <template
    v-if="!isCollapsed"
  >
    <slot />
  </template>
  <span
    class="text-sm text-neutral-400 underline underline-dotted underline-offset-2 cursor-pointer inline-block animate-pulse"
    @click="isCollapsed = !isCollapsed"
  >
    {{ isCollapsed ? t('showMore') : t('showLess') }}
  </span>
</template>

<style scoped>

</style>
