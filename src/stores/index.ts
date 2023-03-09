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
  const jsonLangs = computed(
    () => _.filter(
      _.keys(resumeData.value),
      (key: string) => key !== 'order' && JSON.stringify(resumeData.value[key]) !== '{}',
    ),
  )
  const lang = ref(jsonLangs.value[0])
  const order = computed(
    () => resumeData.value.order as string[] || defaultSectionOrder,
  )

  return {
    lang,
    jsonLangs,
    order,
    resumeData,
    localIsReady,
    localIsLoading,
    gistIsReady,
    gistIsLoading,
  }
})
