export const useStore = defineStore('main', () => {
  // get gist username and gist id from env variables
  const [username, gistId] = [
    import.meta.env.VITE_GIST_USERNAME,
    import.meta.env.VITE_GIST_ID,
  ]
  // get resume data from gist
  const {
    state: gistState,
    isReady: gistIsReady,
    isLoading: gistIsLoading,
  } = useAsyncState(
    getGistResumeData(username, gistId),
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

  // get resume data, if gist is ready, use gist data, else use local data
  const resumeData = computed(() => gistIsReady.value ? gistState.value : localState.value)
  /**
   * in resume.json, the basic structure is:
   * {
   *    "zh": {...},
   *    "en": {...},
   *    ...
   *    "order": [...]
   * }
   */
  const jsonLangs = computed(
    () => _.filter(
      _.keys(resumeData.value),
      (key: string) => key !== 'order' && JSON.stringify(resumeData.value[key]) !== '{}',
    ),
  )
  // default lang is the first lang in resume.json
  const lang = computed(() => jsonLangs.value[0])
  // order is optional, if not exist, use defaultSectionOrder
  const order = computed(() => resumeData.value.order as string[] || defaultSectionOrder)

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
