export const parseGithubUrl = (url: string) => {
  const [username, repo] = url.split('/').slice(-2)
  return { username, repo }
}

export const parseDate = (year: number, month: number) => {
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
  if (!monthMap[month] && !year)
    return 'Present'
  else if (!monthMap[month])
    return year

  return `${monthMap[month]} ${year}`
}
