<script setup lang="ts">
import { PropType } from 'vue'

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type ButtonColor = 'simple' | 'primary' | 'success' | 'error'

defineProps({
  color: { type: String as PropType<ButtonColor>, default: 'simple' },
  size: { type: String as PropType<ButtonSize>, default: 'md' }
})

const colors: Record<ButtonColor, string> = {
  simple: 'bg-gray-100',
  primary: 'bg-sky-700 text-white',
  success: 'bg-emerald-400',
  error: 'bg-red-700 text-white'
}

const sizes: Record<ButtonSize, string> = {
  xs: 'text-xs px-2 py-1',
  sm: 'text-sm px-3 py-2',
  md: 'px-4 py-2',
  lg: 'text-lg px-4 py-2',
  xl: 'text-xl px-6 py-3'
}
</script>

<template>
  <button :class="`rounded ${colors[color]} ${sizes[size]}`">
    <slot />
  </button>
</template>
