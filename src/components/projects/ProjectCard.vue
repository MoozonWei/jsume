<script setup lang="ts">
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
    const stars = await getRepoStars(username, repo)
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
      <div
        v-if="project.githubUrl && githubRepoStars"
        class="project-github-stars"
      >
        <i-mdi:star /> {{ githubRepoStars }}
      </div>
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
      <div
        v-for="keyword in project.keywords"
        :key="keyword"
        class="keyword-tag"
      >
        {{ keyword }}
      </div>
    </div>
  </div>
</template>

<style src="@/styles/projects.css"></style>
