export const parseGithubUrl = (url: string) => {
  const [username, repo] = url.split('/').slice(-2)
  return { username, repo }
}
