import { defineStore } from 'pinia'
import { useAsyncState } from '@vueuse/core'
// import localResumeData from '@/resume/resume.test.json'
import localResumeData from '@/resume/resume.local.json'

export const useStore = defineStore('main', () => {
  // state
  const [
    gistUsername,
    gistId,
  ] = ['MoozonWei', '70c30e0182fdf013aa6454f10c9db299']
  // const remoteResumeData = await getResumeData(gistUsername, gistId)
  const {
    state: gistState,
    isReady: gistIsReady,
    isLoading: gistIsLoading,
  } = useAsyncState(
    getGistResumeData(gistUsername, gistId),
    {},
  )

  const {
    state: localState,
    isReady: localIsReady,
    isLoading: localIsLoading,
  } = useAsyncState(
    getLocalResumeData(),
    {},
  )

  const resumeData = computed(
    () => (
      gistIsReady.value
        ? gistState.value
        : localIsReady.value
          ? localState.value
          : localResumeData
    ),
  )
  // get languages from resume.json
  const lang = 'en'
  const langs = computed(() => _.keys(resumeData.value))
  const defaultOrder = [
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
  const order: string[] = resumeData.value.order as string[] || defaultOrder

  return {
    lang,
    langs,
    order,
    resumeData,
    localIsReady,
    localIsLoading,
    gistIsReady,
    gistIsLoading,
  }
})
