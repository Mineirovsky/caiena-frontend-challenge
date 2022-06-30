import { expect, test, vi } from 'vitest'

import makeSearchGithubUser from './searchGithubUser'

test('search calls correct URL', async () => {
  const fetchMock = vi.fn(() => new Promise((resolve) => resolve({ json: () => null })))

  // @ts-ignore
  const searchGithubUser = makeSearchGithubUser(fetchMock)

  await searchGithubUser('octocat')

  // @ts-ignore
  expect(fetchMock.mock.calls[0][0]).toContain('q=octocat')
})

test('search calls correct URL with options', async () => {
  const fetchMock = vi.fn(() => new Promise((resolve) => resolve({ json: () => null })))

  // @ts-ignore
  const searchGithubUser = makeSearchGithubUser(fetchMock)

  await searchGithubUser('octocat', { page: 2, per_page: 10 })

  // @ts-ignore
  const options = fetchMock.mock.calls[0][0]

  expect(options).toContain('page=1')
  expect(options).toContain('per_page=10')
})
