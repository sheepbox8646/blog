<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faXTwitter, faGithub, faTelegram, faWeixin, type IconDefinition } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

type Social = {
  icon: IconDefinition
  link: string
}

const socials: Social[] = [
  {
    icon: faXTwitter,
    link: 'https://x.com/AcboxLiu'
  },
  {
    icon: faGithub,
    link: 'https://github.com/sheepbox8646'
  },
  {
    icon: faTelegram,
    link: 'https://t.me/acboxawa'
  },
  {
    icon: faWeixin,
    link: '/wechat.jpg'
  },
  {
    icon: faEnvelope,
    link: 'mailto:me@acbox.lol'
  },
]

const router = useRouter()
</script>

<template>
  <div class="flex flex-row gap-8">
    <a v-for="social in socials" :href="social.link" target="_blank">
      <FontAwesomeIcon 
        class="size-6 opacity-50 hover:opacity-100 transition-opacity duration-300"
        :icon="social.icon"
      />
    </a>
  </div>
</template>
