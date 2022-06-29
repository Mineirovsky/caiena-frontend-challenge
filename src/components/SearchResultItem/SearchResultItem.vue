<script setup lang="ts">
import { PropType } from 'vue'
import { GithubUserSearchItem } from '../../repositories/searchGithubUser'
import Button from '../Button.vue'

defineProps({
  user: { type: Object as PropType<GithubUserSearchItem>, required: true }
})
defineEmits(['readMore'])
</script>

<template>
  <article class="flex p-2 border border-gray-100 rounded hover:shadow">
    <figure class="rounded-full w-20 h-20 shrink-0 grow-0 mr-4">
      <img :src="user.avatar_url" class="rounded-full bg-gray-500">
    </figure>
    <div>
      <h3>
        <a :href="user.html_url" target="_blank">
          {{ user.login }}
        </a>
      </h3>
      <Button name="readMore" @click="$emit('readMore', user)">Ver mais</Button>
    </div>
  </article>
</template>
