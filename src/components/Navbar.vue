<script setup lang="ts">
import { useRouter } from 'vue-router'
import SearchForm from './SearchForm'
const router = useRouter()

async function handleSubmit (query: string) {
  const queryEncoded = encodeURIComponent(query)
  router.push(`/s?q=${queryEncoded}`)
}
</script>

<template>
  <nav class="p-4 flex items-center shadow-lg shadow-sky-50">
    <h1 class="uppercase text-sm grow-0 shrink-0">
      <RouterLink to="/">
        Github Explorer
      </RouterLink>
    </h1>
    <div class="w-full">
      <SearchForm class="mx-auto max-w-lg" @submit="handleSubmit" />
    </div>
  </nav>
</template>
