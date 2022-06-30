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
  xs: 'text-xs px-2 h-6',
  sm: 'text-sm px-3 h-9',
  md: 'px-4 h-10',
  lg: 'text-lg px-4 h-11',
  xl: 'text-xl px-6 h-14'
}
</script>

<template>
  <button :class="`rounded ${colors[color]} ${sizes[size]}`">
    <div class="flex items-center">
      <slot />
    </div>
  </button>
</template>
