<script setup lang="ts">
import { computed } from 'vue'
import { range } from 'lodash'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon
} from 'vue-tabler-icons'

import Button from '../Button'

const props = defineProps({
  modelValue: { type: Number, required: true },
  pageCount: { type: Number, required: true },
  siblingCount: { type: Number, default: 3 }
})

const emit = defineEmits(['update:modelValue'])

const pagesBefore = computed(() => {
  const startPage = props.modelValue - props.siblingCount
  return range(startPage > 1 ? startPage : 1, props.modelValue)
})

const pagesAfter = computed(() => {
  if (props.modelValue >= props.pageCount) return []
  const endPage = props.modelValue + props.siblingCount + 1
  return range(props.modelValue + 1, endPage <= props.pageCount ? endPage : props.pageCount + 1)
})

function onPageClick (page: number) {
  emit('update:modelValue', page)
}
</script>

<template>
  <nav>
    <ul class="flex flex-row justify-center">
      <li key="first" class="mx-1">
        <Button
          @click="() => onPageClick(1)"
          :disabled="modelValue <= 1"
        >
          <ChevronsLeftIcon size="16" />
          <span class="sr-only">Primeira página</span>
        </Button>
      </li>
      <li key="prev" class="mx-1">
        <Button
          @click="() => onPageClick(modelValue - 1)"
          :disabled="modelValue <= 1"
        >
          <ChevronLeftIcon size="16" />
          <span class="sr-only">Página anterior</span>
        </Button>
      </li>
      <li
        v-for="page in pagesBefore"
        :key="page"
        class="mx-1"
      >
        <Button @click="() => onPageClick(page)">
          {{ page }}
        </Button>
      </li>
      <li class="mx-1">
        <Button
          aria-current="page"
          color="primary"
          disabled
        >
          {{ modelValue }}
          <span class="sr-only">(atual)</span>
        </Button>
      </li>
      <li
        v-for="page in pagesAfter"
        :key="page"
        class="mx-1"
      >
        <Button @click="() => onPageClick(page)">
          {{ page }}
        </Button>
      </li>
      <li key="next" class="mx-1">
        <Button
          @click="() => onPageClick(modelValue + 1)"
          :disabled="modelValue >= pageCount"
        >
          <ChevronRightIcon size="16" />
          <span class="sr-only">Próxima página</span>
        </Button>
      </li>
      <li key="last" class="mx-1">
        <Button
          @click="() => onPageClick(pageCount)"
          :disabled="modelValue >= pageCount"
        >
          <ChevronsRightIcon size="16" />
          <span class="sr-only">Última página</span>
        </Button>
      </li>
    </ul>
  </nav>
</template>
