<script setup lang="ts">

</script>

<template>
  <svg class="w-full h-full opacity-50">
    <g>
      <line x1="0" y1="25%" x2="100%" y2="25%" stroke="#00B110" stroke-width="6" />
    </g>
    <g>
      <line transform="translate(5, 0)" :x1="`${100 * (5 / 6) + 5}%`" y1="0%" :x2="`${100 * (5 / 6) + 5}%`" y2="100%" stroke="#A05EB5" stroke-width="6" />
      <g v-for="index in 6">
        <rect width="15" height="10" :y="`${100 / 6 * (index - 1) + 45}%`" :x="`${100 / 6 * 5 + 5}%`" transform="translate(-2.5, -25)" fill="white" stroke="black" stroke-width="3" rx="5" ry="5" />
      </g>
    </g>
    <g v-for="index in 6">
      <rect width="10" :height="index === 6 ? 25 : 15" :x="`${100 / 6 * (index - 1) + 5}%`" y="25%" :transform="`translate(0, ${index === 6 ? -12.5 : -7.5})`" fill="white" stroke="black" stroke-width="3" rx="5" ry="5" />
    </g>
  </svg>
</template>