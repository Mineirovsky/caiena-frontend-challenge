import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import Button from '.'

test('button has the correct root component', () => {
  const wrapper = mount(Button)

  expect(wrapper.element.tagName).toBe('BUTTON')
})

test('button with `href` has the correct root component', () => {
  const wrapper = mount(Button, {
    props: {
      href: '//locahost'
    }
  })

  expect(wrapper.element.tagName).toBe('A')
})

test('button with `to` has the correct root component', () => {
  const wrapper = mount(Button, {
    props: {
      to: '/'
    }
  })

  expect(wrapper.element.tagName).toBe('ROUTERLINK')
})
