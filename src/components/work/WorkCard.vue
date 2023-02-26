<script setup lang="ts">
defineProps<{
  work: {
    company: string
    position: string
    website: string
    location: string
    summary: string
    isCurrentRole: boolean
    start: {
      month: string
      year: string
    }
    end: {
      month: string
      year: string
    }
    highlights: string[]
  }
}>()

const parseDate = (year: string, month: string) => {
  const monthMap: { [key: string]: string } = {
    '01': 'Jan',
    '02': 'Feb',
    '03': 'Mar',
    '04': 'Apr',
    '05': 'May',
    '06': 'Jun',
    '07': 'Jul',
    '08': 'Aug',
    '09': 'Sep',
    '10': 'Oct',
    '11': 'Nov',
    '12': 'Dec',
    '1': 'Jan',
    '2': 'Feb',
    '3': 'Mar',
    '4': 'Apr',
    '5': 'May',
    '6': 'Jun',
    '7': 'Jul',
    '8': 'Aug',
    '9': 'Sep',
  }
  if (!monthMap[month] && !year)
    return 'Present'
  else if (!monthMap[month])
    return year

  return `${monthMap[month]} ${year}`
}
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
      <span
        v-if="work.start"
        class="flex items-center gap-0.5"
      >
        <i-mdi:calendar />
        {{ `${parseDate(work.start.year, work.start.month)} - ${parseDate(work.end.year, work.end.month)}` }}
      </span>
      <span
        class="flex items-center gap-0.5"
      >
        <i-material-symbols:location-on />
        {{ work.location }}
      </span>
      <span
        v-if="work.isCurrentRole"
        class="flex items-center gap-0.5"
      >
        <i-mdi:circle class="text-green-100 animate-pulse" />
        Current
      </span>
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
