<template>
  <div class="flex size-full flex-col gap-5">
    <PassageCard v-bind="{
      title: passage.title,
      date: passage.createdAt,
      body: passage.body,
      tags: ['test'],
      url: passage.url
    }" v-for="passage in passages"></PassageCard>
  </div>
</template>

<script setup lang="ts">
import type { PassageByGithubDiscussion } from '~/server/api/passage/index.get'

definePageMeta({
  layout: 'common'
})

const passages = ref<PassageByGithubDiscussion[]>([])

onMounted(async () => {
  const { data } = await useFetch('/api/passage')
  passages.value = data.value?.data ?? []
})
</script>
