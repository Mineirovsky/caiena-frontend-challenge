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
