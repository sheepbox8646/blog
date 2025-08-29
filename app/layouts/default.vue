<template>
  <div class="w-full min-h-screen bg py-5 px-20">
    <div class="px-56 py-18 flex-1 size-full">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.bg {
  background: var(--2, linear-gradient(90deg, #B5998F 0%, #A08FA1 100%));
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
}
</style>
