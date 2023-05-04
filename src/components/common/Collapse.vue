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
    class="inline-block animate-pulse cursor-pointer text-sm text-neutral-400 underline underline-offset-2 underline-dotted"
    @click="isCollapsed = !isCollapsed"
  >
    {{ isCollapsed ? t('showMore') : t('showLess') }}
  </span>
</template>

<style scoped>

</style>
