<script setup lang="ts">
const awards = getSectionComputedData('awards')
</script>

<template>
  <SectionBox
    v-if="awards && awards.length > 0"
    title="Awards"
  >
    <div
      class="awards-container"
    >
      <div
        v-for="award in awards"
        :key="award.title"
      >
        <div class="award-title">
          {{ award.title }}
        </div>
        <div class="award-duration-awarder">
          <Duration
            :start="award.fullDate"
            is-time-point
            class="text-sm text-neutral-400"
          />
          <span class="flex items-center gap-0.5">
            <i-mdi:trophy />
            {{ award.awarder }}
          </span>
        </div>
        <div
          v-if="award.summary"
        >
          {{ award.summary }}
        </div>
        <Description :content="award.description" />
      </div>
    </div>
  </SectionBox>
</template>

<style src="@/styles/awards.css"></style>
