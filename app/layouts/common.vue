<template>
   <div class="w-full h-full bg min-h-screen py-5 px-20 flex flex-col">
    <div class="flex flex-row w-full h-16 items-center justify-between gap-8 sticky top-0">
      <GuideBar/>
      <Socials />
    </div>
    <div class="px-56 py-18 flex-1 size-full">
      <slot />
    </div>
  </div>
</template>