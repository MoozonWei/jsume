export const parseGithubUrl = (url: string) => {
  const [username, repo] = url.split('/').slice(-2)
  return { username, repo }
}

export const parseDate = (year: number | undefined, month: number | undefined) => {
  const monthMap: { [key: number]: string } = {
    1: 'Jan',
    2: 'Feb',
    3: 'Mar',
    4: 'Apr',
    5: 'May',
    6: 'Jun',
    7: 'Jul',
    8: 'Aug',
    9: 'Sep',
    10: 'Oct',
    11: 'Nov',
    12: 'Dec',
  }

  if (year === undefined && month === undefined)
    return 'Present'
  else if (year === undefined)
    return monthMap[month!]
  else if (month === undefined)
    return year.toString()

  return `${monthMap[month || 0]} ${year}`
}

export const getSectionComputedData = (section: string) => {
  const store = useStore()
  const sectionData = computed(
    () => store.resumeData[store.lang][section],
  )
  return sectionData
}
