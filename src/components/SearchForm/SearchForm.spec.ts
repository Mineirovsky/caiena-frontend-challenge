import { expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import SearchForm from '.'

test('emit on submit', async () => {
  const wrapper = mount(SearchForm)
  await wrapper.get('input').setValue('Query')
  await wrapper.get('button').trigger('click')

  expect(wrapper.emitted()).toHaveProperty('submit')
  // @ts-ignore
  expect(wrapper.emitted('submit')[0][0]).toBe('Query')
})
