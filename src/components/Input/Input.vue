<script setup lang="ts">
defineProps({
  modelValue: String
})
const emit = defineEmits(['update:modelValue'])

function handleInput (payload: Event) {
  emit('update:modelValue', (payload.target as HTMLInputElement).value)
}
</script>

<template>
  <input
    :value="modelValue"
    @input="handleInput"
    class="p-1 rounded border border-gray-200 outline-none focus:shadow transition-shadow duration-200"
  >
</template>
