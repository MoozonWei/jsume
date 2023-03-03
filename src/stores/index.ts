export const useStore = defineStore('main', () => {
  // get resume data from gist
  const {
    state: gistState,
    isReady: gistIsReady,
    isLoading: gistIsLoading,
  } = useAsyncState(
    getGistResumeData(import.meta.env.VITE_GIST_USERNAME, import.meta.env.VITE_GIST_ID),
    {},
  )
  // get resume data from local public/resume.json file
  const {
    state: localState,
    isReady: localIsReady,
    isLoading: localIsLoading,
  } = useAsyncState(
    getLocalResumeData(),
    defaultResumeData,
  )

  const resumeData = computed(
    () => (
      gistIsReady.value
        ? gistState.value
        : localState.value
    ),
  )
  const lang = 'en'
  const langs = computed(
    () => _.keys(resumeData.value),
  )
  const order = computed(
    () => resumeData.value.order as string[] || defaultSectionOrder,
  )

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
