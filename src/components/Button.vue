<script setup lang="ts">
import { PropType } from 'vue'

export type ButtonSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

defineProps({
  size: { type: String as PropType<ButtonSizes>, default: 'md' }
})

const sizes = {
  xs: 'text-xs px-2 py-1',
  sm: 'text-sm px-3 py-2',
  md: 'px-4 py-2',
  lg: 'text-lg px-4 py-2',
  xl: 'text-xl px-6 py-3'
}
</script>

<template>
  <button :class="`bg-gray-100 rounded ${sizes[size]}`">
    <slot />
  </button>
</template>
