<template>
  <div class="w-200 h-10 rounded-full flex flex-row bg-#FFFFFF66 shadow-2xl select-none">
      <div
        v-for="(link, index) in links"
        class="flex h-full flex-1 justify-center items-center font-bold text-gray-500"
        :class="{
          'rounded-r-full': index === links.length - 1,
          'rounded-l-full': index === 0,
          // 'bg-#FFFFFF66': index !== 0 && index !== links.length - 1,
          'hover:bg-[#FFFFFF66] transition-all duration-300': currentLink !== link.text,
          'bg-white': currentLink === link.text
        }"
        @click="() => {
          currentLink = link.text
          link.callback()
        }"
      >
        {{ link.text }}
      </div>
    </div>
</template>

<script setup lang="ts">
const router = useRouter()
const currentLink = defineModel<string>({

})

onMounted(() => {
  currentLink.value = (() => {
    const map = [
      ['blog', 'Blogs'],
      ['about', '关于'],
      ['message', '留言板'],
      ['link', '友情链接'],
    ]
    return map.find(([key]) => router.currentRoute.value.path.includes(key!))?.[1] ?? void 0
  })()
})

type Link = {
  text: string
  callback: () => void
}
const links: Link[] = [
  {
    text: 'Blogs',
    callback: () => {
      router.push('/blog')
    }
  },
  {
    text: '关于',
    callback: () => {
      console.log('Acbox的小站')
    }
  },
  {
    text: '留言板',
    callback: () => {
      console.log('Acbox的小站')
    }
  },
  {
    text: '碎碎念',
    callback: () => {
      console.log('Acbox的小站')
    }
  },
  {
    text: '友情链接',
    callback: () => {
      console.log('Acbox的小站')
    }
  }
]
</script>
