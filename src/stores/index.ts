import { defineStore } from 'pinia'
import resumeConfigObject from '@/resume/resume.json'
// import resumeConfigObject from '@/resume/resume.antfu.json'

export const useStore = defineStore('main', () => {
  // state
  // get languages from resume.json
  const langs = _.keys(resumeConfigObject)
  const order: string[] = resumeConfigObject.order as string[] | [
    'about',
    'projects',
    'publications',
    'work',
    'skills',
    'education',
    'awards',
    'languages',
    'certificates',
    'volunteer',
    'interests',
    'references',
  ]
  /**
   * basics
   * work
   * volunteer
   * education
   * awards
   * certificates
   * publications
   * skills
   * languages
   * interests
   * references
   * projects
   */
  const {
    basics,
    work,
    volunteer,
    education,
    awards,
    certificates,
    publications,
    skills,
    languages,
    interests,
    references,
    projects,
  } = resumeConfigObject.en

  return {
    langs,
    order,
    basics,
    work,
    volunteer,
    education,
    awards,
    certificates,
    publications,
    skills,
    languages,
    interests,
    references,
    projects,
  }
})
