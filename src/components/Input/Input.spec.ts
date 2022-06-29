import { expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import Input from '.'

test('emits on input', async () => {
  const wrapper = mount(Input)

  await wrapper.setValue('Test')

  const emitted = wrapper.emitted()
  expect(emitted).toHaveProperty('update:modelValue')

  // @ts-ignore
  expect(emitted['update:modelValue'][0][0]).toBe('Test')
})
