<script setup lang="ts">
const mode = useDarkMode()

const switchMode = () => {
  if (mode.value === 'auto') mode.value = 'dark'
  else if (mode.value === 'dark') mode.value = 'light'
  else if (mode.value === 'light') mode.value = 'auto'
  else mode.value = 'auto'
}
</script>
<template>
  <div class="dark:bg-black">
    <div class="w-max mx-auto my-5">
      <span class="dark:text-white">Hello World!</span>
    </div>
    <div class="w-max mx-auto">
      <button class="p-1 m-1 bg-slate-200 rounded hover:border border-black" @click="switchMode">Switch Color Mode</button>
      <span class="dark:text-white">{{ mode }}</span>
    </div>
  </div>
</template>
<style>
/* :root {
  background-color: black;
} */
</style>