<script setup lang="ts">
import { getGithubRepoStars } from '@/api'

const props = defineProps<{
  project: {
    name: string
    startDate: string
    endDate: string
    summary: string
    githubUrl: string
    website: string
    description: string
    keywords: string[]
  }
}>()

const githubRepoStars = ref(0)
onMounted(
  async () => {
    const {
      username,
      repo,
    } = parseGithubUrl(props.project.githubUrl)

    let stars = 0
    try {
      stars = await getGithubRepoStars(username, repo)
    }
    catch (e) {
      if (((e as any).response?.data?.message || '').includes('API rate limit exceeded'))
        console.error('Github API rate limit exceeded')
      else
        console.error(e)
    }
    githubRepoStars.value = stars
  },
)
</script>

<template>
  <div class="project-card">
    <div class="project-card-header">
      <div class="project-name">
        {{ project.name }}
        <div class="project-name-icon">
          <a
            v-if="project.githubUrl"
            :href="project.githubUrl"
            class="flex items-center"
          >
            <i-mdi-github />
          </a>
          <a
            v-if="project.website"
            :href="project.website"
            class="flex items-center"
          >
            <i-mdi:web />
          </a>
        </div>
      </div>
      <a
        v-if="project.githubUrl && githubRepoStars"
        :href="project.githubUrl"
        class="project-github-stars group"
      >
        <i-mdi:star class="trans group-hover:(text-yellow-300 animate-wiggle)" /> {{ githubRepoStars }}
      </a>
    </div>
    <div
      v-if="project.startDate && project.endDate"
      class="project-duration"
    >
      [ {{ project.startDate }} ~ {{ project.endDate }} ]
    </div>
    <div class="project-summary">
      {{ project.summary }}
    </div>
    <Description :content="project.description" />
    <div
      v-if="project.keywords"
      class="project-keywords-container"
    >
      <Tag
        v-for="keyword in project.keywords"
        :key="keyword"
      >
        {{ keyword }}
      </Tag>
    </div>
  </div>
</template>

<style src="@/styles/projects.css"></style>
