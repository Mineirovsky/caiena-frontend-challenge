<script setup lang="ts">
import { ref } from 'vue'
import { SearchIcon } from 'vue-tabler-icons'

import Input from '../Input'
import Button from '../Button'

const emit = defineEmits(['submit'])
const query = ref('')

function handleSubmit () {
  emit('submit', query.value)
}
</script>

<template>
  <form
    @submit.prevent="handleSubmit"
    class="flex flex-row items-stretch"
  >
    <Input v-model="query" class="rounded-r-none peer w-full" />
    <Button type="submit" @click="handleSubmit" class="rounded-l-none peer-focus:shadow duration-200">
      <SearchIcon />
      <span class="sr-only">Buscar</span>
    </Button>
  </form>
</template>
