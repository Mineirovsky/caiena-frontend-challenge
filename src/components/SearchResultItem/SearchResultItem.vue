<script setup lang="ts">
import { ExternalLinkIcon } from 'vue-tabler-icons'
import { PropType } from 'vue'
import { GithubUserSearchItem } from '../../repositories/searchGithubUser'
import Button from '../Button.vue'

defineProps({
  user: { type: Object as PropType<GithubUserSearchItem>, required: true }
})
defineEmits(['readMore'])
</script>

<template>
  <article class="flex p-3 border border-gray-100 rounded hover:shadow">
    <figure class="rounded-full w-20 h-20 shrink-0 grow-0 mr-4">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" class="rounded-full bg-gray-500">
      </a>
    </figure>
    <div>
      <h3 class="text-xl mb-3">
        <a :href="user.html_url" target="_blank">
          {{ user.login }}
        </a>
      </h3>
      <Button size="xs" name="readMore" @click="$emit('readMore', user)" class="mr-2">Ver mais</Button>
      <a :href="user.html_url" target="_blank">
        <Button color="primary" size="xs" name="readMore" @click="$emit('readMore', user)" class="align-middle">
          Perfil no Github
          <ExternalLinkIcon class="ml-1 translate-y-[-1px]" size="14" />
        </Button>
      </a>
    </div>
  </article>
</template>
