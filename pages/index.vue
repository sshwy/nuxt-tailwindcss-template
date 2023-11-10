<script setup lang="ts">
const mode = useDarkMode()

const switchMode = () => {
  if (mode.value === 'auto') mode.value = 'dark'
  else if (mode.value === 'dark') mode.value = 'light'
  else if (mode.value === 'light') mode.value = 'auto'
  else mode.value = 'auto'
  console.log(mode.value)
}
</script>
<template>
  <div>
    <div class="w-max mx-auto my-5">
      <span>Hello World!</span>
    </div>
    <div class="w-max my-5 mx-auto flex gap-x-2 items-center">
      <UButton @click="switchMode">Switch Color Mode</UButton>
      <span>{{ mode }}</span>
    </div>
    <div class="w-max mx-auto my-5">
      <ULink to="/_tailwind/" class="underline">Tailwind Page</ULink>
    </div>
  </div>
</template>
<style>
/* :root {
  background-color: black;
} */
</style>