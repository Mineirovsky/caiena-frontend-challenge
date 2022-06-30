<script setup lang="ts">
import { PropType } from 'vue'

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type ButtonColor = 'simple' | 'primary' | 'success' | 'error'

const props = defineProps({
  color: { type: String as PropType<ButtonColor>, default: 'simple' },
  href: { type: String, default: null },
  size: { type: String as PropType<ButtonSize>, default: 'md' },
  to: { type: String, default: null }
})

const colors: Record<ButtonColor, string> = {
  simple: 'bg-gray-100',
  primary: 'bg-sky-700 text-white',
  success: 'bg-emerald-400',
  error: 'bg-red-700 text-white'
}

const sizes: Record<ButtonSize, string> = {
  xs: 'text-xs px-2 h-6',
  sm: 'text-sm px-3 h-9',
  md: 'px-4 h-10',
  lg: 'text-lg px-4 h-11',
  xl: 'text-xl px-6 h-14'
}

function componentIs () {
  if (props.href) return 'a'
  if (props.to) return 'RouterLink'
  return 'button'
}
</script>

<template>
  <component
    :class="`inline-block rounded cursor-pointer disabled:cursor-default ${colors[color]} ${sizes[size]}`"
    :is="componentIs()"
    :href="href"
    :to="to"
  >
    <div class="flex items-center h-full">
      <slot />
    </div>
  </component>
</template>
