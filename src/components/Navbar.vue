<script setup lang="ts">
import SearchForm from './SearchForm'
</script>

<template>
  <nav class="p-4 flex items-center shadow-lg shadow-sky-50">
    <h1 class="uppercase text-sm grow-0 shrink-0">Github Explorer</h1>
    <div class="w-full">
      <SearchForm class="mx-auto max-w-lg" />
    </div>
  </nav>
</template>
