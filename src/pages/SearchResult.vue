<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import SearchResultItem from '../components/SearchResultItem'
import { GithubUserSearchItem, makeSearchGithubUser } from '../repositories/searchGithubUser'

const searchGithubUser = makeSearchGithubUser(fetch)

const route = useRoute()
const results = ref([] as GithubUserSearchItem[])

async function updateResults (query: string) {
  results.value = (await searchGithubUser(query)).items
}

watch(() => route.query.q, (value) => updateResults(value ? String(value) : 'octocat'))

onMounted(() => updateResults(String(route.query.q)))
</script>

<template>
  <main class="p-2">
    <h2 class="text-xl">Resultados para "{{ $route.query.q }}"</h2>
    <ul v-if="results.length" class="flex flex-col items-center">
      <li v-for="item in results" :key="item.id" class="my-2 w-1/2">
        <SearchResultItem :user="item" />
      </li>
    </ul>
  </main>
</template>
