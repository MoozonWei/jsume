<script setup lang="ts">
defineProps<{
  education: {
    institution: string
    area: string
    studyType: string
    location?: string
    ongoing: boolean
    startDate: string
    endDate: string
    start: {
      year: number
      month: number
    }
    end: {
      year: number
      month: number
    }
    description: string
    activities: string[]
    gpa: string
    courses: string[]
  }
}>()
</script>

<template>
  <div class="education-card">
    <div class="education-study-type">
      {{ education.studyType }}
    </div>
    <div class="education-card-sub">
      <span class="education-area">
        {{ education.area }},
      </span>
      <span class="education-institution">
        {{ education.institution }}
      </span>
    </div>
    <div class="work-duration-location">
      <Duration
        :start="education.start"
        :end="education.end"
      />
      <Location
        :location="education.location"
      />
      <Ongoing :ongoing="Boolean(education.ongoing)" />
    </div>
    <Description :content="education.description" />
    <div
      v-if="education.courses"
      class="education-courses-container"
    >
      <Tag
        v-for="course in education.courses"
        :key="course"
      >
        {{ course }}
      </Tag>
    </div>
  </div>
</template>

<style src="@/styles/education.css" />
