import { PaginatedResponse } from './PaginatedResponse'

export interface GithubUserSearchItem {
  avatar_url: string
  events_url: string
  followers_url: string
  following_url: string
  gists_url: string
  gravatar_id: string
  html_url: string
  id: number
  login: string
  node_id: string
  organizations_url: string
  received_events_url: string
  repos_url: string
  score: number
  site_admin: false
  starred_url: string
  subscriptions_url: string
  type: string
  url: string
}

export type GithubUserSearchResponse = PaginatedResponse<GithubUserSearchItem>

export interface SearchGithubUserOptions {
  sort?: 'followers' | 'repositories' | 'joined'
  order?: 'desc' | 'asc'
  per_page?: number
  page?: number
}

export function makeSearchGithubUser (getContent: typeof fetch) {
  return async function searchGithubUser (query: string, options?: SearchGithubUserOptions): Promise<GithubUserSearchResponse> {
    const queryURI = encodeURIComponent(query)
    const optionParams = options
      ? Object.entries(options)
        .map(([key, value]) => `&${key}=${value}`)
        .join('')
      : ''

    const response = await getContent(`https://api.github.com/search/users?q=${queryURI}${optionParams}`)
    return response.json()
  }
}

export default makeSearchGithubUser
