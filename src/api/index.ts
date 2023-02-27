// get github repo stars
// https://api.github.com/repos/username/repo
export const getGithubRepoStars = async (username: string, repo: string) => {
  const response = await axios.get(`https://api.github.com/repos/${username}/${repo}`)
  return response.data.stargazers_count
}

// get resume data from gist
// MoozonWei/70c30e0182fdf013aa6454f10c9db299
export const getGistResumeData = async (username: string, id: string) => {
  const response = await axios.get(`https://gist.githubusercontent.com/${username}/${id}/raw`)
  return response.data
}

export const getLocalResumeData = async () => {
  const response = await axios.get('/resume.json')
  return response.data
}
