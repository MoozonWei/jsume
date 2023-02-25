<script setup lang="ts">
// import all icons of profiles
import About from '@/components/basics/About.vue'
import Work from '@/components/work/Work.vue'
import Volunteer from '@/components/volunteer/Volunteer.vue'
import Education from '@/components/education/Education.vue'
import Awards from '@/components/awards/Awards.vue'
import Certificates from '@/components/certificates/Certificates.vue'
import Publications from '@/components/publications/Publications.vue'
import Skills from '@/components/skills/Skills.vue'
import Languages from '@/components/languages/Languages.vue'
import Interests from '@/components/interests/Interests.vue'
import References from '@/components/references/References.vue'
import Projects from '@/components/projects/Projects.vue'

defineProps<{
  name: string
}>()

const sectionComponents: { [key: string]: any } = {
  about: About,
  About,
  work: Work,
  Work,
  volunteer: Volunteer,
  Volunteer,
  education: Education,
  Education,
  awards: Awards,
  Awards,
  certificates: Certificates,
  Certificates,
  publications: Publications,
  Publications,
  skills: Skills,
  Skills,
  languages: Languages,
  Languages,
  interests: Interests,
  Interests,
  references: References,
  References,
  projects: Projects,
  Projects,
}

const getSection = (name: string) => {
  const comp = sectionComponents[name]
  if (comp)
    return comp
  return ''
}
</script>

<template>
  <component :is="getSection(name)" />
</template>
