<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

import SearchResultItem from '../components/SearchResultItem'
import Pagination from '../components/Pagination'
import { GithubUserSearchResponse, makeSearchGithubUser } from '../repositories/searchGithubUser'

const searchGithubUser = makeSearchGithubUser(fetch)

const route = useRoute()
const result = ref<GithubUserSearchResponse | null>(null)
const perPage = ref(20)
const currentPage = ref(1)

async function updateResults () {
  const query = String(route.query.q)
  result.value = await searchGithubUser(query, {
    page: currentPage.value,
    per_page: perPage.value
  })
}

const pageCount = computed(
  () => {
    if (result.value === null) return 0
    const totalItems = result.value.total_count <= 1000
      ? result.value.total_count
      : 1000
    return Math.ceil(totalItems / perPage.value)
  }
)

watch(() => route.query.q, () => {
  if (currentPage.value > 1) {
    currentPage.value = 1
    return
  }
  updateResults()
})
watch(
  [perPage, currentPage],
  () => updateResults()
)

onMounted(() => updateResults())
</script>

<template>
  <main class="p-2">
    <h2 class="text-xl">Resultados para "{{ $route.query.q }}"</h2>
    <Pagination
      v-model="currentPage"
      class="my-2"
      :page-count="pageCount"
    />
    <ul v-if="result !== null" class="flex flex-col items-center">
      <li v-for="item in result.items" :key="item.id" class="my-2 w-1/2">
        <SearchResultItem :user="item" />
      </li>
    </ul>
    <Pagination
      v-model="currentPage"
      class="my-2"
      :page-count="pageCount"
    />
  </main>
</template>
