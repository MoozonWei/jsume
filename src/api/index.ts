// get github repo stars
// https://api.github.com/repos/username/repo
export const getRepoStars = async (username: string, repo: string) => {
  const response = await axios.get(`https://api.github.com/repos/${username}/${repo}`)
  return response.data.stargazers_count
}
