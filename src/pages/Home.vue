<script setup lang="ts">
import { SearchIcon } from 'vue-tabler-icons'
import Button from '../components/Button.vue'
</script>

<template>
  <main class="p-2">
    <h2 class="text-xl">Inicie uma busca</h2>

    Insira palavras chaves no campo acima e clique em
    <Button disabled>
      <SearchIcon />
    </Button>
  </main>
</template>
