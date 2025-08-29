<script setup lang="ts">
const { text = 'Acbox' } = defineProps<{
  text: string,
}>();
</script>

<template>
  <span class="text size-full flex justify-center items-center">
    <svg class="size-full" viewBox="0 0 600 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="text-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="36.06%" stop-color="#FBDAFD" />
          <stop offset="71.15%" stop-color="#D9FDD6" />
          <stop offset="100%" stop-color="#F7FA41" />
        </linearGradient>
      </defs>

      <!-- 描边文字 -->
      <text x="300" y="60" font-family="GenJyuuGothic, sans-serif" font-size="75" fill="none"
        stroke="url(#text-gradient)" stroke-width="5" class="stroke-text" text-anchor="middle" dominant-baseline="middle">
        {{ text }}
      </text>

      <!-- 填充文字 -->
      <text x="300" y="60" font-family="GenJyuuGothic, sans-serif" font-size="75" fill="url(#text-gradient)"
        stroke="none" class="fill-text" text-anchor="middle" dominant-baseline="middle">
        {{ text }}
      </text>
    </svg>

  </span>
</template>

<style scoped>
.stroke-text {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: draw-stroke 6s cubic-bezier(0.64, -0.01, 0, 0.9) forwards;
}

.fill-text {
  opacity: 0;
  animation: fade-in-fill 0.5s cubic-bezier(0.75, 0.25, 0.25, 0.5) 1s forwards;
}

@keyframes draw-stroke {
  0% {
    stroke-dashoffset: 1000;
  }

  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes fade-in-fill {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>