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
  <div>
    <div class="w-max mx-auto my-5">
      <span>Hello World!</span>
    </div>
    <div class="w-max my-5 mx-auto dark:text-vsc-text-dark-1">
      <button class="border dark:bg-vsc-bg-dark-2 p-1 m-1 bg-slate-200 rounded 
      border-black dark:border-vsc-border-dark
      dark:text-vsc-text-dark-2
      dark:hover:text-vsc-text-dark-1
      " @click="switchMode">Switch Color Mode</button>
      <span>{{ mode }}</span>
    </div>
    <div class="w-max mx-auto my-5">
      <RouterLink to="/_tailwind/" class="underline">Tailwind Page</RouterLink>
    </div>
  </div>
</template>
<style>
/* :root {
  background-color: black;
} */
</style>