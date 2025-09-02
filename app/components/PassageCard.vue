<template>
  <div class="w-full h-42 rounded-md flex flex-row bg-#FFFFFF66 shadow-2xl select-none p-3 hover:opacity-80 transition-opacity duration-300">
    <div class="flex flex-col gap-1">
      <div class="text-lg font-bold text-gray-700">{{ title }}</div>
      <div class="text-sm text-gray-500 flex flex-row gap-1 items-center">
        <FontAwesomeIcon class="opacity-50 size-4" :icon="faCalendarDays" />
        <span class="text-3">{{ date }}</span>
      </div>
      <div class="text-sm text-gray-500 flex flex-row gap-1 items-center">
        <FontAwesomeIcon class="opacity-50 size-4" :icon="faFile" />
        <span class="text-3">{{ body.slice(0, 100) }}...</span>
      </div>
      <div class="flex flex-row gap-2 mt-auto">
        <div v-for="tag in tags" class="text-sm text-gray-500">{{ tag }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCalendarDays, faFile } from '@fortawesome/free-solid-svg-icons'

const {} = defineProps<{
  title: string
  date: string
  body: string
  tags: string[]
  url: string
}>()
</script>
