<script setup lang="ts">
defineProps<{
  work: {
    company: string
    position: string
    website: string
    location: string
    summary: string
    ongoing: boolean
    start: {
      month: number
      year: number
    }
    end: {
      month: number
      year: number
    }
    highlights: string[]
  }
}>()
</script>

<template>
  <div class="work-card">
    <div class="work-card-header">
      <a
        :href="work.website"
        class="work-company"
      >
        {{ work.company }}
      </a>
      <span class="work-position">
        {{ work.position }}
      </span>
    </div>
    <div class="work-duration-location">
      <Duration
        :start="work.start"
        :end="work.end"
      />
      <Location
        :location="work.location"
      />
      <Ongoing :ongoing="Boolean(work.ongoing)" />
    </div>
    <div
      v-if="work.summary"
      class="work-summary"
    >
      {{ work.summary }}
    </div>
    <ul
      v-if="work.highlights"
      class="work-highlights"
    >
      <li
        v-for="highlight in work.highlights"
        :key="highlight"
      >
        {{ highlight }}
      </li>
    </ul>
  </div>
</template>

<style src="@/styles/work.css" />
