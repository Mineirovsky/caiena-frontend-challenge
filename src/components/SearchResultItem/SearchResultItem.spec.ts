import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import SearchResultItem from '.'
import { GithubUserSearchItem } from '../../repositories/searchGithubUser'

test('emit read-more event on button click', async () => {
  const user = {
    id: 1,
    login: 'octocat'
  } as GithubUserSearchItem

  const wrapper = mount(SearchResultItem, {
    props: { user }
  })

  await wrapper.findComponent('[name=readMore]').trigger('click')
  expect(wrapper.emitted()).toHaveProperty('readMore')
  // @ts-ignore
  expect(wrapper.emitted('readMore')[0][0]).toStrictEqual(user)
})
